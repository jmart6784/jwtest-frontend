import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/users/SignUp";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exatc path="/sign_up" component={SignUp} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
