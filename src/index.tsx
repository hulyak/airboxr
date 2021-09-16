import React from "react";
import ReactDOM from "react-dom";
import ExamplePage from "./ExamplePage";
import RootComponent from "./RootComponent";
import HomePage from "./components/HomePage";
import SelectTable from "./components/SelectTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SelectSource from "./components/SelectSource";

ReactDOM.render(
  // Theme Provider
  <RootComponent>
    <Router>
      {/* <ExamplePage /> */}
      <Switch>
        <Route path="/source" exact>
          <SelectSource />
        </Route>
        <Route path="/table" exact>
          <SelectTable />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
      <HomePage />
    </Router>
  </RootComponent>,
  document.querySelector("#root")
);
