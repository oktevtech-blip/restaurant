// src/pages/Events.jsx

import React from "react";
import "./Events.css";

const events = [
  {
    title: "African Cultural Night",
    date: "15 August 2026",
    image: "/culture.png",
    description:
      "Experience authentic African cuisine, live music, and traditional performances.",
  },
  {
    title: "Food Festival Weekend",
    date: "28 August 2026",
    image: "/fest.png",
    description:
      "Explore signature dishes, chef specials, and exclusive tasting experiences.",
  },
  {
    title: "Live Music Evening",
    date: "10 September 2026",
    image: "/music.png",
    description:
      "Enjoy an unforgettable evening of music, food, and culture.",
  },
];

const Events = () => {
  return (
    <div className="events-page">

      <section className="events-hero">

        <span className="events-tag">
          Upcoming Experiences
        </span>

        <h1>Events & Experiences</h1>

        <p>
          Join us for memorable evenings featuring African cuisine,
          music, culture, and community.
        </p>

      </section>

      <section className="featured-event">

        <div className="featured-image">
          <img
            src="/restaurant.png"
            alt="Featured Event"
          />
        </div>

        <div className="featured-content">

          <span className="featured-badge">
            Featured Event
          </span>

          <h2>African Heritage Celebration</h2>

          <p>
            A special evening dedicated to African traditions,
            storytelling, live performances and signature dishes.
          </p>

          <button>
            Reserve Your Spot
          </button>

        </div>

      </section>

      <section className="events-grid">

        {events.map((event, index) => (
          <div className="event-card" key={index}>

            <img
              src={event.image}
              alt={event.title}
            />

            <div className="event-content">

              <span className="event-date">
                {event.date}
              </span>

              <h3>{event.title}</h3>

              <p>{event.description}</p>

              <button>
                Learn More
              </button>

            </div>

          </div>
        ))}

      </section>

      <section className="events-stats">

        <div>
          <h2>25+</h2>
          <span>Events Hosted</span>
        </div>

        <div>
          <h2>5K+</h2>
          <span>Guests Attended</span>
        </div>

        <div>
          <h2>4.9★</h2>
          <span>Event Rating</span>
        </div>

      </section>

    </div>
  );
};

export default Events;