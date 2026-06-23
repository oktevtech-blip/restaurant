// src/components/Specials.jsx

import React from "react";
import "./Special.css";

const specials = [
  {
    image: "/rolex.png",
    name: "Ugandan Rolex",
    description:
      "Fresh chapati rolled with eggs, vegetables and signature spices.",
    price: "UGX 12,000",
  },
  {
    image: "/samosa.png",
    name: "African Samosa",
    description:
      "Golden crispy pastry filled with seasoned meat and vegetables.",
    price: "UGX 5,000",
  },
  {
    image: "/chicken.png",
    name: "Roast Chicken",
    description:
      "Slow-roasted chicken infused with authentic African flavors.",
    price: "UGX 25,000",
  },
];

const Specials = () => {
  return (
    <section className="specials">

      <div className="specials-container">

        <div className="section-header">
          <span className="section-tag">
            Chef Recommendations
          </span>

          <h2>Today's Specials</h2>

          <p>
            Carefully prepared dishes crafted from fresh ingredients and
            inspired by African culinary traditions.
          </p>
        </div>

        <div className="specials-grid">

          {specials.map((item, index) => (
            <div className="special-card" key={index}>

              <div className="special-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="special-content">

                <div className="special-rating">
                  ★★★★★
                </div>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="special-footer">
                  <span>{item.price}</span>

                  <button>
                    Order Now
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Specials;