// src/components/Header.js

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="brand">
          <img src="/logo.png" alt="Black Heritage Logo" />
          <div>
            <h1>Black Heritage</h1>
            <span>Restaurant & Culture</span>
          </div>
        </Link>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={isActive("/") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className={isActive("/about-us") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/gallery"
            className={isActive("/gallery") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>

          <Link
            to="/menus"
            className={isActive("/menus") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>

          <Link
            to="/events"
            className={isActive("/events") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className={isActive("/contact") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="reservation-btn"
            onClick={() => setMenuOpen(false)}
          >
            Reserve Table
          </Link>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </header>
  );
};

export default Header;