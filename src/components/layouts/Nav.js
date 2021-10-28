import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const Nav = () => {
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  let history = useHistory();

  if (globalContext.token) {
    return (
      <div>
        <span>
          Hello, {globalContext.user ? globalContext.user.username : ""}
        </span>
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/notes/new">Create Note</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setGlobalContext({
              domain: globalContext.domain,
              user: null,
              token: null,
            });
            history.push("/sign_in");
          }}
        >
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>Sign in to create notes</span>
        <Link to="/sign_up">Sign Up</Link>
        <Link to="/sign_in">Sign In</Link>
      </div>
    );
  }
};

export default Nav;
