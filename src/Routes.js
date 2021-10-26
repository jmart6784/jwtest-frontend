import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/users/SignUp";
import NoteIndex from "./components/notes/NoteIndex";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={NoteIndex} />
        <Route exact path="/sign_up" component={SignUp} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
