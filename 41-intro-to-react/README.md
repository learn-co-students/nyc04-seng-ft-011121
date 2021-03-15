# Intro to React

## Students Will Be Able To (SWBATs)

- [ ] Understand the difference between **imperative** and **declarative** programming
- [ ] Briefly explain Babel's purpose in React
- [ ] Visualize/identify **components** on any website

## Outline

- [ ] Discuss React's philosophy
- [ ] Show component syntax and how Babel translates JSX
- [ ] Break a website down into components
  - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
  - **Breakout Exercise**: translate
    [this mockup](https://app.diagrams.net/#G1DvSXW51B9CgVaDF1Spmdwaw8Zs7L85Ua)
    (or use [this image](./wireframe.png) if the link doesn't work) into
    components
  - Draw out component hierarchy (parent/child relationship)

## Imperative vs Declarative Code

- [Demo](https://codesandbox.io/s/declarative-vs-imperative-zkl40?file=/src/index.js)

React lets us write our UI code **declaratively**, which means as developers we
don't have to do as much work to make changes to the DOM.

For example, if I were to make a DOM element without React, I need write more
**imperative** code to tell the browser how to create my DOM elements:

```js
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
document.querySelector("#root").append(h1);
```

Whereas with React, I can write the same code more **declaratively**, and just
describe what I want my DOM element while React takes care of the
implementation:

```jsx
const h1 = (
  <h1 id="main" className="blue">
    Hello!
  </h1>
);

ReactDOM.render(h1, document.querySelector("#root"));
```

### `create-react-app`

There are many tools for easily building React applications such as Create React
App, Gatsby, and Next; each of these solutions packages together React with
several other tools for making our lives as developers easier. The
[React Docs](https://reactjs.org/docs/create-a-new-react-app.html) go into some
more detail on what each of these tools is best suited for. For Flatiron
projects, we're going to be using Create React App. In addition to React, it
gives us:

- **Webpack**: a tool for bundling and minifying our code (along with a server
  for running our code in development)
- **Babel**: a transpiler that lets us write modern JavaScript and JSX

Think of `create-react-app` like `rails new`: it will build a project folder for
our application and install all the dependencies we need (via Node Package
Manager).

To create a new React application and start it, run:

```sh
npx create-react-app app-name
cd app-name
npm start
```

### Babel

[Babel](https://babeljs.io/) is a tool for **transpiling** JavaScript code - it
lets us write JavaScript code in any version we want (so we can use the latest
and greatest features of the language), and it converts our code into a version
of JavaScript that will run on any browsers we want. For any React project we're
making, we need to use Babel in order to write JSX (JavaScript XML) markup in
our code. Babel lets us write code that looks like this:

```jsx
ReactDOM.render(<h1>Isn't Babel neat?</h1>, document.getElementById("root"));
```

And turn it into this:

```js
ReactDOM.render(
  React.createElement("h1", null, "Isn't Babel neat?"),
  document.getElementById("root")
);
```

`create-react-app` uses Babel under the hood, so we don't have to worry about
doing much of our own Babel configuration, but it is a key piece of the puzzle
in terms of the modern JavaScript ecosystem.

### JSX

In vanilla Javascript, there were several steps involved to adding DOM elements
to the page:

```js
function renderCard() {
  // 1. create each individual DOM element
  const cardDiv = document.createElement("div");
  // 2. assign any attributes we want on that element
  cardDiv.className = "card";
  cardDiv.id = "card1";
  cardDiv.textContent = "hi";
  // 3. append that card to some parent element in the DOM
  parentElement.append(cardDiv);
}
```

JSX is an _abstraction_ that makes it easier to write code _declaratively_
representing DOM elements, and lets React do the heavy lifting of turning our
JSX into actual DOM elements. Instead of us _imperatively_ telling the browser
exactly how to create the DOM element, we use JSX to describe what our element
should look like.

```jsx
ReactDOM.render(
  // 1. tell React how we want our element to look
  <div id="card1" className="card">
    hi
  </div>,
  // 2. append our components to the DOM
  document.getElementById("root")
);
```

We can also make our JSX work with dynamic values by using {} to evaluate our JS
code as an expression:

```jsx
const greeting = "hello!";

ReactDOM.render(
  <div id="card1" className="card">
    {greeting}
  </div>,
  document.getElementById("root")
);
```

### Resources

- [React Docs - Official](https://reactjs.org/)
- [React Docs - Unofficial Hooks Version](https://reactwithhooks.netlify.app/)
- [Babel](https://babeljs.io/)
