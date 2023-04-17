import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        My Blog
      </a>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="/blog" className="navbar-link">
            Blog
          </a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
