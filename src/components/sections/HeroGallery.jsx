import React, { useState } from "react";
import "./Hero.css";

import img1 from "../../assets/dance1.png";
import img2 from "../../assets/dance2.png";
import img3 from "../../assets/dance3.png";
import img4 from "../../assets/dance4.png";

const gallery = [
  { image: img1, title: "Kids Dance Classes" },
  { image: img2, title: "Hip Hop Training" },
  { image: img3, title: "Wedding Choreography" },
  { image: img4, title: "Stage Performance" }
];

function HeroGallery() {

  const [active, setActive] = useState(0);

  return (
    <section className="hero-gallery">

      <div className="gallery-container">

        {gallery.map((item, index) => (
          <div
            key={index}
            className={`gallery-card ${index === active ? "active" : ""}`}
          >

            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <p>{item.title}</p>
            </div>

          </div>
        ))}

      </div>

      {/* DOT SLIDER */}

      <div className="gallery-dots">
        {gallery.map((_, index) => (
          <span
            key={index}
            className={active === index ? "dot active" : "dot"}
            onClick={() => setActive(index)}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default HeroGallery;