import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Index</Link>
      <Link to="/static">Static Page</Link>
      <Link to="/sign_up">Sign Up</Link>
      <Link to="/notes">Notes</Link>
    </div>
  );
};

export default Nav;
