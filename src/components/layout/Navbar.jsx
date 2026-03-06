import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <h2>DE Dance Destiny</h2>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Programs</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

          {/* CTA Button */}
          <a href="tel:8754470020" className="cta-btn">
            Call Now
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="menu-btn" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

    </header>
  );
}

export default Navbar;