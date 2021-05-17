import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="navbar shadow">
      <div className="logo">
        <span>Math </span>
        Magician
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home </Link>
        <Link to="/calculator" className="nav-link">Calculator </Link>
        <Link to="/quote" className="nav-link">Quote </Link>
      </div>
    </div>
  </>
);

export default Navbar;
