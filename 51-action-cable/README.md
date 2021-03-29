# Action Cable

## SWBATs

- [ ] Understand the difference between HTTP and WebSocket protocols
- [ ] Create Action Cable channels in Rails
- [ ] Manage Action Cable subscriptions and broadcast messages
- [ ] Connect to Action Cable from a React application

## Action Cable in Rails

Rails has support for WebSockets via Action Cable. Action Cable is included with
Rails, so you don't need to install any additional gems to get up and running.

To allow connections to web socket server, update your `routes.rb` file to
include a handshake route for Action Cable:

```rb
# config/routes.rb
Rails.application.routes.draw do
  # will create a route at ws://localhost:3000/cable
  mount ActionCable.server => "/cable"
end
```

**Notes on Deploying**: Make sure to follow these steps if you plan on deploying
your app! There are a few additional settings you need for Rails to work in
production:

- [Heroku and ActionCable Deploying](https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable#deploying-our-application-to-heroku)

With that take care of, let's create a `channel` for web socket connections. You
can think of a channel as the web socket equivalent of a controller - it's a way
for us to group together common functionality for users interacting with our
server. With channels, we're going to be managing _subscriptions_ instead of
managing requests and responses as we do with our controllers.

You can generate a channel like this:

```sh
rails g channel channel_name
```

**Note**: Channel names are singular by convention rather than plural.

Here's an example of what a channel might look like:

```ruby
class FeedChannel < ApplicationCable::Channel
  def subscribed
    # find a User instance using params from the subscription
    user = User.find_by(id: params[:id])

    # stream_for subscribes to events related to a specific user
    stream_for user
  end
end
```

In the example above, we're creating a `FeedChannel` that clients can subscribe
to. When the client subscribes, we need to provide an identifier for the channel
they've subscribed to - that way when any messages are broadcast to that
channel, they'll receive them. We create the identifier using
[`stream_from` or `stream_for`](https://edgeguides.rubyonrails.org/action_cable_overview.html#streams).

We can then broadcast messages to any clients who are subscribed to that channel
using `broadcast_to`, which we'll use to send a payload of JSON data to any
clients who are listening.

You can broadcast messages from your channels (as above), but you can also
broadcast messages from controller actions:

```rb
class TweetsController < ApplicationController

  def create
    tweet = Tweet.create(message: params[:message], user_id: params[:user_id])
    if tweet.valid?
      user = tweet.user
      # broadcast to anyone subscribed to the FeedChannel for this specific user
      FeedChannel.broadcast_to user, TweetSerializer.new(tweet)
      render json: tweet
    else
      render json: { error: 'Could not create that tweet' }, status: 422
    end
  end

end
```

## Action Cable in React

In addition to the server-side Action Cable library we're using in Rails, there
is also a client-side Action Cable library to make it easier to work with
WebSocket connections. In addition to the Action Cable library, there are also
some wrappers for that library to make it easier to work with React. We're going
to work directly with the Action Cable library to get a better sense of its
internals and give us more flexibility in using it.

To get started, let's install the `@rails/actioncable` package:

```sh
npm install @rails/actioncable
```

First we'll need to connect to Action Cable on our server:

```js
// cable.js
import { createConsumer } from "@rails/actioncable";

const cable = createConsumer("ws://localhost:3000/cable");

export default cable;
```

Once we've created the connection, we can use it to subscribe to any channel in
our component we like. We can use the `useEffect` hook to help manage the
subscription to our channel:

```js
import React, { useEffect } from "react";
import cable from "../cable";

function TweetList({ feedId }) {
  useEffect(() => {
    // params must include the channel, and can also include any other info you'd like as params for the subscription
    const params = {
      channel: "FeedChannel",
      id: feedId,
    };

    // handlers lets you define callback functions to run when messages are received from the subscription
    const handlers = {
      // when a new message is broadcast, we'll receive it here
      received: (data) => console.log("received", data),
      connected: () => console.log("connected"),
      disconnected: () => console.log("disconnected"),
    };

    // subscribe to the cable
    const subscription = cable.subscriptions.create(params, handlers);

    // unsubscribe
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, [feedId]);

  return <div>I'm connected to the FeedChannel!</div>;
}
```

The `useEffect` hook will help manage the subscription based on the `feedId` in
our component:

- When the component renders, we'll connect to a `FeedChannel` based on the
  `feedId`
- When the component re-renders or unmounts, we'll disconnect from the
  `FeedChannel`

## Action Cable + JWT Auth

If you're using JWT Auth for your HTTP requests, it can also be helpful to
authenticate users as they are connecting to the Action Cable. The
[example in the Rails guide](https://guides.rubyonrails.org/action_cable_overview.html#connection-setup)
uses cookies and sessions instead of JWT, so we'll need to handle it a bit
differently: by adding the JWT token to the URL when we connect to Action Cable!

```js
const token = localStorage.getItem("token");
const url = "ws://localhost:3000/cable?token=" + token;
const cable = createConsumer(url);
```

Now we can use the token from the URL to identify the user:

```rb
# app/channels/application_cable/connection.rb
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
      def find_verified_user
        # get the token from the URL params
        token = request.params[:token]
        # decode the token (using the same secret you used to decode it)
        user_id = JWT.decode(token, "my$ecretK3y", true, { algorithm: 'HS256' })
        if verified_user = User.find_by(id: user_id)
          verified_user
        else
          reject_unauthorized_connection
        end
      end
  end
end
```

Having an identified user lets us access that user's info in the Channels:

```rb
class AppearanceChannel < ApplicationCable::Channel
  def subscribed
    # current_user is set in the ApplicationCable::Connection
    current_user.update(is_active: true)

    # subscribe to the channel
    stream_from "appearance_channel"

    # broadcast the user's active status
    ActionCable.server.broadcast "appearance_channel", current_user
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    current_user.update(is_active: false)

    # broadcast the user's active status
    ActionCable.server.broadcast "appearance_channel", current_user
  end
end
```

### Action Cable in React: Advanced

For more advanced handling of the Action Cable connection, we could use
[React Context](https://reactjs.org/docs/context.html#api) and create a Provider
component to give give our app access to the cable. The idea with this component
is to have it wrap our entire application (like Provider from `react-redux`) and
give us access to the Action Cable connection whenever we need it. The advantage
of this approach is we're keeping the Action Cable connection as part of the
React component hierarchy, which means we can work with connecting
to/disconnecting from the Action Cable server more easily.

We want the provider to connect to Action Cable when the component renders, so
let's use the `useEffect` hook for that:

```js
// context/actioncable.js
import React, { createContext, useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable";

// create a shared context
export const ActionCableContext = createContext();

// create a context provider component
function ActionCableProvider({ url, children }) {
  const [cable, setCable] = useState(null);

  useEffect(() => {
    // create connection
    const cable = createConsumer(url);
    setCable(cable);

    // disconnect if component unmounts
    return function cleanup() {
      cable.disconnect();
      setCable(null);
    };
  }, [url]);

  return (
    <ActionCableContext.Provider value={cable}>
      {children}
    </ActionCableContext.Provider>
  );
}

// for convenience, create a custom hook to access the context
function useActionCable() {
  return useContext(ActionCableContext);
}

// exports
export { ActionCableProvider, useActionCable };
```

Now we can use our custom `CableProvider` component to wrap any parts of our
application that need an Action Cable connection:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { ActionCableProvider } from "./context/actioncable";
import App from "./App";

ReactDOM.render(
  <ActionCableProvider url="ws://localhost:3000/cable">
    <App />
  </ActionCableProvider>,
  document.getElementById("root")
);
```

With all that set up, now we can subscribe to our Action Cable channels from any
component we like. We'll the `useActionCable` hook to get access to the cable
connection, and `useEffect` to subscribe/unsubscribe to specific channels:

```js
import React, { useEffect } from "react";
import { useActionCable } from "../cable/context";

function TweetList({ feedId }) {
  const cable = useActionCable();

  useEffect(() => {
    const params = {
      channel: "FeedChannel",
      id: feedId,
    };

    const handlers = {
      received: (data) => console.log("received", data),
      connected: () => console.log("connected"),
      disconnected: () => console.log("disconnected"),
    };

    cable.subscriptions.create(params, handlers);
  }, [feedId, cable.subscriptions]);

  return <div>I'm connected to the FeedChannel!</div>;
}
```

We can also create a custom hook to manage subscriptions to individual channels.
This one's a bit more complex, but let's break it down:

```js
// reducer function for managing state (see useReducer)
function cableReducer(state, action) {
  switch (action.type) {
    case "CONNECTING":
      return { status: "CONNECTING", subscription: action.payload };
    case "OPEN":
      return { ...state, status: "OPEN" };
    case "CLOSING":
      return { ...state, status: "CLOSING" };
    case "CLOSED":
      return { status: "CLOSED", subscription: null };
    case "MESSAGE":
      return { ...state, lastMessage: action.payload };
    default:
      return state;
  }
}

// custom hook to subscribe to an action cable channel
function useChannel(params) {
  const cable = useCable();
  // https://reactjs.org/docs/hooks-reference.html#usereducer
  const [{ lastMessage, subscription, status }, dispatch] = useReducer(
    cableReducer,
    {
      lastMessage: null,
      subscription: null,
      status: "NONE",
    }
  );

  // Install this code: https://github.com/kentcdodds/use-deep-compare-effect
  // params will be an object, so we can use this hook to prevent our useEffect from being called more than needed
  useDeepCompareEffect(() => {
    if (cable) {
      // subscribe to cable, and update state when new messages are received
      const subscription = cable.subscriptions.create(params, {
        initialized() {
          dispatch({ type: "CONNECTING", payload: this });
        },
        connected() {
          dispatch({ type: "OPEN" });
        },
        disconnected() {
          dispatch({ type: "CLOSED" });
        },
        received(value) {
          dispatch({ type: "MESSAGE", payload: value });
        },
      });

      return function cleanup() {
        dispatch({ type: "CLOSING" });
        subscription.unsubscribe();
      };
    }
  }, [cable, params]);

  // return the last message (whatever we received from the cable), the connection status, and the subscription object
  return { lastMessage, status, subscription };
}
```

To use the custom hook:

```js
import React, { useEffect } from "react";
import { useChannel } from "../cable/context";

function TweetList({ feedId }) {
  const { lastMessage, subscription } = useChannel({
    channel: "FeedChannel",
    id: feedId,
  });

  // this effect will run whenever a new message is received
  useEffect(() => {
    if (lastMessage) {
      console.log(lastMessage);
    }
  }, [lastMessage]);

  function handleSubmitTweet(text) {
    // we can use the subscription object to send messages to the channel
    // (instead of sending a HTTP request)
    subscription.perform("create", { body: text });
  }

  return <div>I'm connected to the FeedChannel!</div>;
}
```

## Resources

### Useful Tools for testing on multiple computers/mobile

- [Rails server binding](https://stackoverflow.com/a/41380359)
- [ngrok](https://ngrok.com/)
- [localtunnel](https://github.com/localtunnel/localtunnel)

### Example Apps

- [Flyak](https://github.com/ihollander/flyak-actioncable)

- [Hidden Names App](http://hidden-names.herokuapp.com/)
- [Hidden Names Frontend](https://github.com/alexgriff/hidden_phrase_frontend)
- [Hidden Names Backend](https://github.com/alexgriff/hidden_phrase_backend)

- [Gridbuds App](https://gridbuds.netlify.com/lobby)
- [Gridbuds Frontend](https://github.com/ihollander/react-ipuz)
- [Gridbuds Backend](https://github.com/ihollander/react-ipuz-api)
