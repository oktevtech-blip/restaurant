import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
      <div className="header-content">
      <h1>BLACK HERITAGE</h1>
        <div className="logo">
          <img src="/logo.png" alt="Black Heritage Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/menus">Menus</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin-login">Admin</Link></li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  );
}

export default Header;

