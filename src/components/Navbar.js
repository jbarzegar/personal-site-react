import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <h1 className="title is-5">Wahid Shafique</h1>
            <h2 className="subtitle is-7">Developer 🍔 Edible Food Product</h2>
            {/* <img src={logo} alt="Wahid Shafique" style={{ width: "88px" }} /> */}
          </figure>
        </Link>
      </div>
      {/* <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div> */}
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/wahidshafique"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
