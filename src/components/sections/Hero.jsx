import React from "react";
import HeroGallery from "./HeroGallery";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <p className="hero-tag">IGNITE PASSION • MOVE</p>

        <h1 className="hero-title">
          Chennai’s Most <span>Energetic</span> Dance Academy
        </h1>

        <p className="hero-subtitle">
          Kids • Adults • Hip Hop • Wedding Choreography • Stage Performance
        </p>

        <div className="hero-buttons">
          <a href="https://wa.me/918754470020" className="btn-primary">
            Book Free Trial
          </a>

          <a href="#services" className="btn-outline">
            Explore Programs
          </a>
        </div>

      </div>

      <HeroGallery />

    </section>
  );
}

export default Hero;