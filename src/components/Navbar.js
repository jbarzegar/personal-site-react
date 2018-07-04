import React from "react";
import Link from "gatsby-link";
import logo from "../img/wahid-logo.svg";

const Navbar = props => {
  console.log(props);
  return (
    <nav
      className={props.invertedLogo ? "navbar background-gradient" : "navbar"}
    >
      <div className="container">
        <div className="navbar-brand">
          <img
            className={props.invertedLogo && "inverted"}
            src={logo}
            alt="Wahid Shafique"
            style={{
              float: "left",
              width: "3.5em",
              height: "3.5em",
              transform: "rotate(30deg)",
              margin: "4px"
              // paddingTop: "2px",
              // paddingLeft: "10px"
            }}
          />
          <Link to="/" className="navbar-item">
            <figure className="image">
              <h1 className="title is-4">Wahid Shafique</h1>
              <h2 className="subtitle is-6">Developer ◼️ Creator</h2>
              {/* <span className="icon">
              <i className="fas fa-home" />
            </span> */}
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
        {/* <div className="navbar-end">
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
      </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
