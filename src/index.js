import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //from reactstrap
import AppHeader from "./components/AppHeader";
import JokePlay from "./components/JokePlay";
import "./App.css";
//import App from "./App";

ReactDOM.render(
  <Router>
    <AppHeader />
    <JokePlay />
    {/* <App /> */}
  </Router>,
  document.getElementById("root")
);
