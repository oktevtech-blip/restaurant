// src/components/HeroSection.js

import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-text">

          <span className="hero-tag">
            Premium African Dining Experience
          </span>

          <h1>
            Discover the Taste of
            <span> Black Heritage</span>
          </h1>

          <p>
            Experience authentic African cuisine crafted with passion,
            tradition, and modern culinary excellence. Every meal tells a
            story, every visit creates a memory.
          </p>

          <div className="hero-buttons">
            <Link to="/menus" className="primary-btn">
              Explore Menu
            </Link>

            <Link to="/contact" className="secondary-btn">
              Reserve Table
            </Link>
          </div>

          <div className="hero-stats">

            <div>
              <h3>10K+</h3>
              <span>Customers</span>
            </div>

            <div>
              <h3>4.9★</h3>
              <span>Rating</span>
            </div>

            <div>
              <h3>8+</h3>
              <span>Years</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-card">
            <img
              src="/restaurant.png"
              alt="Black Heritage Restaurant"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;