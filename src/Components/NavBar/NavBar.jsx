import './NavBar.css';
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => (
  <ul className="navbar">
    <li>
      <Link className="nav-item" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="nav-item" to="/about">
        About
      </Link>
    </li>
    <li>
      <Link className="nav-item" to="/contact">
        Contact
      </Link>
    </li>
    <li>
      <Link className="nav-item" to="/blogs">
        Blogs
      </Link>
    </li>
  </ul>
);

export default NavBar;
