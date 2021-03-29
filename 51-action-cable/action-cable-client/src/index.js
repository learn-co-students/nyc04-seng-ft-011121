import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "semantic-ui-css/semantic.min.css";

import App from "./App";
import { ActionCableProvider } from "./context/actioncable";

ReactDOM.render(
  <ActionCableProvider url="ws://localhost:3000/cable">
    <App />
  </ActionCableProvider>,
  document.getElementById("root")
);
