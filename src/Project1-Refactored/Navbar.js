import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

// e) destructuring
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* a. Props */}
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// b) default props
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// c) PropTypes
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

export default Navbar;
