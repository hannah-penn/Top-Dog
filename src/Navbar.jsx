import React, { Component } from "react";
import { Link } from "@reach/router";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/contact">
            <button>Contact</button>
          </Link>
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
