import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./components/users/SignUp";
import SignIn from "./components/users/SignIn";
import NoteIndex from "./components/notes/NoteIndex";
import Nav from "./components/layouts/Nav";
import Static from "./components/static";

const Routes = () => {
  let loggedIn = !!localStorage.getItem("token");

  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/notes" /> : <Redirect to="/sign_in" />}
        </Route>
        <Route exact path="/notes" component={NoteIndex} />
        <Route exact path="/static" component={Static} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/sign_in" component={SignIn} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
