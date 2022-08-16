import ReactDOM from "react-dom";
import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";

// Ecmascript vs Javascript vs Node
// Ecmascript:  Syntax standard : ES5 ES6 ES7..
// Javascript: Ecmascript + WebAPI(DOM, fetch ...)
// Node: Ecmascript + NodeAPI(require, fs, crypto, http)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
