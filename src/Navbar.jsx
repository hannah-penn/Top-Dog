import React, { Component } from "react";
import { Link } from "@reach/router";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar">
        <ul>
          <Link class="navbar-link" to="/">
            Home
          </Link>
          <Link class="navbar-link" to="/contact">
            <button>Contact</button>
          </Link>
          <Link class="navbar-link" to="/about">
            About
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
