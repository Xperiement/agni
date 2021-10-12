import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import "remixicon/fonts/remixicon.css";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router children={<App />} />
  </React.StrictMode>,
  document.getElementById("root")
);
