// src/pages/Menus.jsx

import React, { useState } from "react";
import "./Menus.css";

const menuData = {
  appetizers: [
    {
      name: "Burgers",
      description:
        "High quality beef medium to well with cheese and bacon on a multigrain bun.",
      price: "UGX 10,000",
      img: "/burgers.png",
    },
    {
      name: "Pizza",
      description:
        "Delicious, hot and loaded with fresh toppings and rich flavors.",
      price: "UGX 35,000",
      img: "/pizza.png",
    },
    {
      name: "Hot Dogs",
      description:
        "Grilled sausage served in a soft bun with delicious toppings.",
      price: "UGX 10,000",
      img: "/hot-dogs.png",
    },
  ],

  salads: [
    {
      name: "North African Carrot Salad",
      description:
        "Fresh carrots blended with authentic North African spices.",
      price: "UGX 2,000",
      img: "/carrotsalad.png",
    },
    {
      name: "Kachumbari",
      description:
        "Traditional East African salad with tomatoes and onions.",
      price: "UGX 1,000",
      img: "/kachumbari.png",
    },
    {
      name: "Egyptian Salata Baladi",
      description:
        "A refreshing Mediterranean-inspired vegetable salad.",
      price: "UGX 2,000",
      img: "/egypt.png",
    },
  ],

  fruits: [
    {
      name: "Apples",
      description: "Fresh juicy apples selected daily.",
      price: "UGX 1,000",
      img: "/apples.png",
    },
    {
      name: "Mangoes",
      description: "Sweet tropical mangoes full of flavor.",
      price: "UGX 1,000",
      img: "/mangoes.png",
    },
    {
      name: "Pineapples",
      description: "Fresh pineapples rich in natural sweetness.",
      price: "UGX 2,000",
      img: "/pineapples.png",
    },
    {
      name: "grapes",
      description: "Grapes rich in vitamins with sweet taste.",
      price: "UGX 2,000",
      img: "/grapes.png",
    },
  ],

  breakfast: [
    {
      name: "Samosas",
      description:
        "Crunchy pastries filled with seasoned minced meat.",
      price: "UGX 1,000",
      img: "/samosa.png",
    },
    {
      name: "Pancakes",
      description:
        "Fluffy pancakes served with syrup and butter.",
      price: "UGX 7,000",
      img: "/pancakes.png",
    },
    {
      name: "Chapati",
      description:
        "Soft and delicious freshly prepared chapati.",
      price: "UGX 1,000",
      img: "/chapati.png",
    },
  ],

  lunch: [
    {
      name: "Grilled Chicken",
      description:
        "Tender grilled chicken seasoned with African spices.",
      price: "UGX 30,000",
      img: "/chicken.png",
    },
    {
      name: "Egusi stew",
      description:
        "Popular in West African countries, egusi stew is made with egusi, or melon seeds, which have been ground and cooked in a tomato and/or bell pepper stew.",
      price: "UGX 30,000",
      img: "/egusi.png",
    },
    {
      name: "Red Red",
      description:
        "Recipe author Gabi Odebode says, 'Growing up in Koforidua, Ghana, red red bean stew was part of a weekly meal.'",
      price: "UGX 10,000",
      img: "/red.png",
    },
  ],

  snacks: [
    {
      name: "Cheese Nachos",
      description:
        "Crispy nachos topped with melted cheese.",
      price: "UGX 6,000",
      img: "/nachos.png",
    },
  ],
};

const Menus = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = Object.keys(menuData);

  const filteredItems =
    activeCategory === "all"
      ? Object.values(menuData).flat()
      : menuData[activeCategory];

  const displayedItems = filteredItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-page">

      <section className="menu-hero">
        <span className="menu-tag">
          Authentic African Cuisine
        </span>

        <h1>Our Menu</h1>

        <p>
          Discover carefully crafted dishes inspired by African
          traditions, culture, and modern culinary excellence.
        </p>
      </section>

      <section className="menu-controls">

        <input
          type="text"
          className="menu-search"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="category-tabs">

          <button
            className={
              activeCategory === "all" ? "active" : ""
            }
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1)}
            </button>
          ))}

        </div>
      </section>

      <section className="menu-grid">

        {displayedItems.map((item, index) => (
          <div className="menu-card" key={index}>

            <div className="menu-card-image">
              <img
                src={item.img}
                alt={item.name}
              />
            </div>

            <div className="menu-card-content">

              <div className="menu-rating">
                ★★★★★
              </div>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="menu-card-footer">

                <span>{item.price}</span>

                <button>
                  View Details
                </button>

              </div>

            </div>

          </div>
        ))}

      </section>

      <section className="menu-stats">

        <div>
          <h2>50+</h2>
          <span>Menu Items</span>
        </div>

        <div>
          <h2>10K+</h2>
          <span>Happy Customers</span>
        </div>

        <div>
          <h2>4.9★</h2>
          <span>Average Rating</span>
        </div>

      </section>

    </div>
  );
};

export default Menus;