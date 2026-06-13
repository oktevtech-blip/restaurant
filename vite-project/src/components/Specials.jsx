// src/components/Specials.jsx
import React from 'react';
import './Special.css';

const Specials = () => {
  return (
    <section className="specials">
      <div className="container">
        <h2>Today's Specials</h2>
        <div className="specials-content">
          <div className="special-item">
            <img src="/rolex.png" alt="Special 1" />
            <p>The Ugandan Rolex</p>
          </div>
          <div className="special-item">
            <img src="/samosa.png" alt="Special 2" />
            <p>African Samosa</p>
          </div>
          <div className="special-item">
            <img src="/chicken.png" alt="Special 3" />
            <p>Roast Chicken</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;

