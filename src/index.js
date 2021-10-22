import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history.js";
import App from "./App.js";
import "remixicon/fonts/remixicon.css";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
