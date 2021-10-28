import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalContext from "./components/context/GlobalContext";
import Nav from "./components/layouts/Nav";
import SignUp from "./components/users/SignUp";
import SignIn from "./components/users/SignIn";
import NoteIndex from "./components/notes/NoteIndex";
import NoteNew from "./components/notes/NoteNew";

const Routes = () => {
  const [globalContext, setGlobalContext] = useState({
    domain: "http://localhost:3000",
    user: null,
    token: localStorage.getItem("token"),
  });

  useEffect(() => {
    const url = `${globalContext.domain}/present_user`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        setGlobalContext({
          domain: globalContext.domain,
          user: response.user,
          token: globalContext.token,
        });
      })
      .catch(() => console.log("current user not found"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let loggedIn = !!localStorage.getItem("token");

  return (
    <GlobalContext.Provider value={[globalContext, setGlobalContext]}>
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/notes" /> : <Redirect to="/sign_in" />}
          </Route>
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route exact path="/notes" component={NoteIndex} />
          <Route exact path="/notes/new" component={NoteNew} />
        </Switch>
      </HashRouter>
    </GlobalContext.Provider>
  );
};

export default Routes;
