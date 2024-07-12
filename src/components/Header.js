import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">To-Do List</Link>
      </div>
      <div className="header-right">
        <Link to="/about-us" className="header-link">About Us</Link>
        <Link to="/contact-us" className="header-link">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
