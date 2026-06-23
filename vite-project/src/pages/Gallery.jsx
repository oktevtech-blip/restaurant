// src/pages/Gallery.jsx

import React, { useState } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    image: "/restaurant.png",
    category: "restaurant",
    title: "Restaurant Interior",
  },
  {
    image: "/about.png",
    category: "restaurant",
    title: "Customer seat",
  },
  {
    image: "/culture.png",
    category: "restaurant",
    title: "Cultural night",
  },
  {
    image: "/pizza.png",
    category: "food",
    title: "Signature Pizza",
  },
  {
    image: "/chicken.png",
    category: "food",
    title: "Roast Chicken",
  },
  {
    image: "/rolex.png",
    category: "food",
    title: "Ugandan Rolex",
  },
  {
    image: "/samosa.png",
    category: "food",
    title: "African Samosa",
  },
  {
    image: "/burgers.png",
    category: "food",
    title: "Premium Burgers",
  },
  {
    image: "/kachumbari.png",
    category: "food",
    title: "Fresh Kachumbari",
  },
  {
    image: "/chapati.png",
    category: "food",
    title: "Traditional Chapati",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <div className="gallery-page">

      <section className="gallery-hero">

        <span className="gallery-tag">
          Visual Experience
        </span>

        <h1>Our Gallery</h1>

        <p>
          Explore the atmosphere, flavors and experiences that
          make Black Heritage unique.
        </p>

      </section>

      <section className="gallery-filters">

        <button
          className={
            activeFilter === "all" ? "active" : ""
          }
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>

        <button
          className={
            activeFilter === "food" ? "active" : ""
          }
          onClick={() => setActiveFilter("food")}
        >
          Food
        </button>

        <button
          className={
            activeFilter === "restaurant"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveFilter("restaurant")
          }
        >
          Restaurant
        </button>

      </section>

      <section className="gallery-grid">

        {filteredItems.map((item, index) => (
          <div
            className="gallery-card"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">

              <h3>{item.title}</h3>

              <span>
                {item.category}
              </span>

            </div>
          </div>
        ))}

      </section>

    </div>
  );
};

export default Gallery;