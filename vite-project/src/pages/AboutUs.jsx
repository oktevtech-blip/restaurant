// src/pages/AboutUs.jsx

import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <section className="about-page">

      <div className="about-hero">

        <div className="about-overlay"></div>

        <div className="about-hero-content">

          <span className="about-tag">
            Our Heritage
          </span>

          <h1>
            More Than A Restaurant.
            <span> A Cultural Experience.</span>
          </h1>

          <p>
            Black Heritage brings together authentic African cuisine,
            rich traditions, and unforgettable hospitality to create
            experiences that celebrate culture through food.
          </p>

        </div>

      </div>

      <div className="about-container">

        <section className="story-section">

          <div className="story-text">
            <h2>Our Story</h2>

            <p>
              Black Heritage was founded from a passion for preserving
              and sharing the rich culinary traditions of Africa.
              Every dish we serve carries generations of history,
              craftsmanship, and cultural pride.
            </p>

            <p>
              What began as a vision to introduce authentic African
              flavors has grown into a destination where people gather
              to celebrate food, family, and community.
            </p>
          </div>

          <div className="story-image">
            <img
              src="/about.png"
              alt="Black Heritage"
            />
          </div>

        </section>

        <section className="stats-section">

          <div className="stat-card">
            <h3>10K+</h3>
            <span>Happy Guests</span>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <span>Traditional Dishes</span>
          </div>

          <div className="stat-card">
            <h3>4.9★</h3>
            <span>Customer Rating</span>
          </div>

          <div className="stat-card">
            <h3>8+</h3>
            <span>Years Experience</span>
          </div>

        </section>

        <section className="mission-section">

          <h2>Our Mission</h2>

          <p>
            To preserve African culinary heritage while delivering
            exceptional dining experiences through innovation,
            authenticity, and hospitality.
          </p>

        </section>

        <section className="values-section">

          <h2>What We Stand For</h2>

          <div className="values-grid">

            <div className="value-card">
              <h3>Authenticity</h3>
              <p>
                Respecting traditional recipes and cooking methods.
              </p>
            </div>

            <div className="value-card">
              <h3>Community</h3>
              <p>
                Bringing people together through food and culture.
              </p>
            </div>

            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                Delivering premium quality in every experience.
              </p>
            </div>

          </div>

        </section>

      </div>

    </section>
  );
};

export default AboutUs;