import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../App.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
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
            {t("header.home")}
          </Link>
          <Link to="/dashboard" className="sidebar-link" onClick={toggleMenu}>
            {t("header.dashboard")}
          </Link>
          <Link to="/about" className="sidebar-link" onClick={toggleMenu}>
            {t("header.about")}
          </Link>
          <Link to="/contact" className="sidebar-link" onClick={toggleMenu}>
            {t("header.contact")}
          </Link>
        </div>
      </div>
      <div className="language-switcher">
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
