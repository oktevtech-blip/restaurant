import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <span className="contact-tag">
          Reservations & Enquiries
        </span>

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Reserve a table,
          ask a question, or plan your next visit.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info">

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Kampala, Uganda</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+256 700 000000</p>
          </div>

          <div className="info-card">
            <h3>✉ Email</h3>
            <p>info@blackheritage.com</p>
          </div>

          <div className="info-card">
            <h3>🕒 Opening Hours</h3>
            <p>Mon - Sun: 8:00 AM - 11:00 PM</p>
          </div>

        </div>

        <div className="contact-form-container">

          <h2>Reserve a Table</h2>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <input
              type="date"
            />

            <textarea
              rows="5"
              placeholder="Special Requests..."
            ></textarea>

            <button type="submit">
              Send Reservation Request
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;