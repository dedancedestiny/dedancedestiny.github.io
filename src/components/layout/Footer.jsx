import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>DE Dance Destiny</h2>
          <p>
            Professional Dance Academy in OMR, Chennai offering training for
            all age groups. Learn, perform and grow with expert choreography
            and structured programs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Academy</a></li>
            <li><a href="/classes">Dance Programs</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            📍 No 63, Ambrosio Apartment, Club House, 2nd Floor,
            Nookampalayam Ring Road, Semmanchery,
            Chennai – 600119
          </p>

          <p>📞 <a href="tel:8754470020">8754470020</a></p>

          <p>
            📧
            <a href="mailto:omrdedancedestiny@gmail.com">
              omrdedancedestiny@gmail.com
            </a>
          </p>

        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/dedancedestiny_omr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <p className="footer-note">
            Follow us for dance videos, performances and academy updates.
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        © 2026 DE Dance Destiny Academy – OMR, Chennai | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;