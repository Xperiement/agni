import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history.js";
import App from "./App.js";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "remixicon/fonts/remixicon.css";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/agni" history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
