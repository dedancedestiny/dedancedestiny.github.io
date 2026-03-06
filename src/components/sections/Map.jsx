import React from "react";
import "./Map.css";

function Map() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    "name": "DE Dance Destiny",
    "url": "https://www.dedancedestiny.com",
    "telephone": "+918754470020",
    "email": "omrdedancedestiny@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 63, Ambrosio Apartment, Club House, 2nd Floor, Nookampalayam Ring Road, Semmanchery",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600119",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.instagram.com/dedancedestiny_omr"
    ]
  };

  return (
    <section className="map-section" id="location">

      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="map-container">

        <div className="map-header">

          <h2>Visit DE Dance Destiny – OMR Chennai</h2>

          <p>
            Looking for the best dance classes in OMR Chennai? Visit 
            <strong> DE Dance Destiny </strong>
            for professional training in Kids Dance, Hip Hop, Adult Dance,
            and Personal Dance Classes. Our studio offers expert instructors,
            performance training, and a vibrant dance community.
          </p>

        </div>


        <div className="map-grid">

          {/* CONTACT INFO */}

          <div className="map-info">

            <h3>Our Studio Location</h3>

            <p className="map-address">
              📍 No 63, Ambrosio Apartment<br/>
              Club House, 2nd Floor<br/>
              Nookampalayam Ring Road<br/>
              Semmanchery, Chennai – 600119
            </p>

            <p className="map-contact">
              📞 8754470020
            </p>

            <p className="map-email">
              📧 omrdedancedestiny@gmail.com
            </p>


            <div className="map-buttons">

              <a
                href="https://www.google.com/maps/place/De+Dance+Destiny+-+OMR"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn directions"
              >
                Get Directions
              </a>

              <a
                href="tel:8754470020"
                className="map-btn call"
              >
                Call Now
              </a>

            </div>

          </div>


          {/* GOOGLE MAP */}

          <div className="map-embed">

            <iframe
              title="DE Dance Destiny Location OMR Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.467648036648!2d80.21976409999999!3d12.8776231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbaf231c865%3A0x477f5416dafd471e!2sDe%20Dance%20Destiny%20-%20OMR!5e0!3m2!1sen!2sin!4v1772351282938!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Map;