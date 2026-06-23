// src/components/Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Black Heritage</h2>
          <p>
            Celebrating culture, cuisine, and community through unforgettable
            dining experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navigation</h3>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Kampala, Uganda</p>
          <p>info@blackheritage.com</p>
          <p>+256 XXX XXX XXX</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} Black Heritage. Crafted with passion and modern web
          technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
