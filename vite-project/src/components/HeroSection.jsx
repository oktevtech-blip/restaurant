import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        {/* <div className="logo">
          <img src="/logo.png" alt="Black Heritage Logo" />
        </div> */}
        <div className="hero-content">
          <div className="hero-image">
            <img src="/restaurant.png" alt="Restaurant" />
          </div>
          <div className="hero-text">
            <h2>FOR THOSE WHO HUNT IN SILENCE</h2>
            <p>
              We're glad you stopped by. Welcome to Black Heritage, your mobile restaurant. Order your desires at unbeatable prices.
            </p>
            <button onClick={() => window.location.href= '/Menus'}>Browse Our Menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

