import React, { useState } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalContext from "./components/context/GlobalContext";
import SignUp from "./components/users/SignUp";
import SignIn from "./components/users/SignIn";
import NoteIndex from "./components/notes/NoteIndex";
import Nav from "./components/layouts/Nav";

const Routes = () => {
  const [globalContext, setGlobalContext] = useState({});
  let loggedIn = !!localStorage.getItem("token");

  return (
    <GlobalContext.Provider value={[globalContext, setGlobalContext]}>
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
    </GlobalContext.Provider>
  );
};

export default Routes;
