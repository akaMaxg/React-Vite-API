import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <p>
        <Link to="/">Home</Link>
      </p>
      <Link to="/person">Person page</Link>
    </nav>
  );
}

export default NavBar;
