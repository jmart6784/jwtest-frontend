import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
