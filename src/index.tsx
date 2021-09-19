import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RootComponent from "./RootComponent";
import HomePage from "./pages/HomePage";
import SelectSourcePage from "./pages/SelectSourcePage";
import SelectTablePage from "./pages/SelectTablePage";

ReactDOM.render(
  <RootComponent>
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/source" exact component={SelectSourcePage} />
        <Route path="/table/:name" exact component={SelectTablePage} />
      </Switch>
    </Router>
  </RootComponent>,
  document.querySelector("#root")
);
