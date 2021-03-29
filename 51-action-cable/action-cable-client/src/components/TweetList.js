import React, { useState, useEffect, useContext } from "react";

import TweetItem from "./TweetItem";
import NewTweet from "./NewTweet";
import TweetForm from "./TweetForm";

import { getTweets, createTweet } from "../api";
import { ActionCableContext } from "../context/actioncable";

function TweetList({ user, currentUser }) {
  const [tweets, setTweets] = useState({
    feed: [],
    newTweets: [],
  });

  // 1. create the connection to the backend
  const cable = useContext(ActionCableContext);

  useEffect(() => {
    // 2. subscribe to the specific channel I care about (coffee_dad's feed or tea_mom's feed)
    const params = {
      channel: "FeedChannel",
      user_id: user.id,
    };

    const handlers = {
      // 3. figure out how to add a new tweet from that channel when a new tweet comes in
      received(newTweet) {
        setTweets((tweets) => ({
          ...tweets,
          newTweets: [newTweet, ...tweets.newTweets],
        }));
      },
      connected() {
        console.log("connected");
      },
      disconnected() {
        console.log("disconnected");
      },
    };

    console.log("subscribing to ", user.id);
    const subscription = cable.subscriptions.create(params, handlers);

    // 4. unsubsubscribe from the channel when my component is done with it
    return function cleanup() {
      console.log("unsubscribing from ", user.id);
      subscription.unsubscribe();
    };
  }, [user.id]);

  useEffect(() => {
    if (user.id) {
      getTweets(user.id).then((tweets) => {
        setTweets({
          feed: tweets,
          newTweets: [],
        });
      });
    }
  }, [user.id]);

  function handleAddTweet(message) {
    createTweet(message);
  }

  function handleUpdateTweets() {
    setTweets((tweets) => ({
      feed: [...tweets.newTweets, ...tweets.feed],
      newTweets: [],
    }));
  }

  return (
    <div className="ui segment">
      {currentUser.id === user.id && <TweetForm onAddTweet={handleAddTweet} />}
      <div className="ui feed">
        <NewTweet
          newTweetCount={tweets.newTweets.length}
          onUpdateTweets={handleUpdateTweets}
        />
        {tweets.feed.map((tweet) => (
          <TweetItem
            key={tweet.id}
            username={user.username}
            photo={user.photo}
            tweet={tweet}
          />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
