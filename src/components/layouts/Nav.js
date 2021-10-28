import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const Nav = () => {
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  let history = useHistory();

  return (
    <div>
      <span>
        Hello, {globalContext.user ? globalContext.user.username : ""}
      </span>
      <Link to="/">Index</Link>
      <Link to="/sign_up">Sign Up</Link>
      <Link to="/sign_in">Sign In</Link>
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
};

export default Nav;
