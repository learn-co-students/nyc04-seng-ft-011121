// library import
import React from "react";
import ReactDOM from "react-dom";

// our code
import "./index.css";
import App from "./App";
// named import
// import { a, b } from "./variables";

// console.log("a", a);
// console.log("b", b);

ReactDOM.render(
  // what we want to render
  <App />,
  // where we want to render it
  document.getElementById("root")
);
