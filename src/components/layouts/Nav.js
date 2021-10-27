import React from "react";
import { Link, useHistory } from "react-router-dom";

const Nav = () => {
  let history = useHistory();

  return (
    <div>
      <Link to="/">Index</Link>
      <Link to="/static">Static Page</Link>
      <Link to="/sign_up">Sign Up</Link>
      <Link to="/notes">Notes</Link>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/sign_in");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Nav;
