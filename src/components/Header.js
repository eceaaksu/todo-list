import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-button" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <div className="sidebar-content">
          <Link to="/" className="sidebar-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/dashboard" className="sidebar-link" onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link to="/about" className="sidebar-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="sidebar-link" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;