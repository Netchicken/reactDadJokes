import React from "react";
import jokePlay from "./components/JokePlay";
import appHeader from "./components/AppHeader";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  //from reactstrap

import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={jokePlay} />
        <Route component={appHeader} />
      </Switch>
    </div>
  );
}

export default App;
