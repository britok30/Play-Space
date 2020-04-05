import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App/App";
import { Router } from "@reach/router";

ReactDOM.render(
    <Router>
        <App path="/" />
    </Router>,
    document.getElementById("root")
);
