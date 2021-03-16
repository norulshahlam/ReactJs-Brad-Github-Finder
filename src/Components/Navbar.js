import React from "react";
import propTypes from "prop-types";

// e) simplifying the state values
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* a. Props */}
        <i className={icon} /> {title}
      </h1>
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
