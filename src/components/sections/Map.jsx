import React from "react";
import "./Map.css";

function Map() {

  const business = {
    name: "DE Dance Destiny - OMR",
    phone: "+918754470020",
    email: "omrdedancedestiny@gmail.com",
    address: {
      street: "No 63, Ambrosio Apartment, Club House, 2nd Floor",
      road: "Nookampalayam Ring Road",
      locality: "Semmanchery",
      city: "Chennai",
      state: "Tamil Nadu",
      zip: "600119",
      country: "India"
    }
  };

  /* Navigation links */

  const directionsURL =
    "https://www.google.com/maps/dir/?api=1&destination=De+Dance+Destiny+-+OMR+Chennai";

  const openMapsURL =
    "https://www.google.com/maps/place/De+Dance+Destiny+-+OMR/@12.8776283,80.2171892,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525bbaf231c865:0x477f5416dafd471e!8m2!3d12.8776231!4d80.2197641!16s%2Fg%2F11z0kqr7xp?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D";


  /* Structured Data for SEO */

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: "DE Dance Destiny",
    url: "https://www.dedancedestiny.com",
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.8776231,
      longitude: 80.2197641
    }
  };

  return (
    <section className="map-section" id="location">

      {/* SEO Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <div className="map-container">


        {/* SECTION HEADER */}

        <div className="map-header">

          <h2>Visit DE Dance Destiny – OMR Chennai</h2>

          <p>
            Looking for the best dance classes in OMR Chennai? Visit
            <strong> DE Dance Destiny </strong>
            for professional training in Kids Dance, Hip Hop, Adult Dance
            and Personal Dance Classes. Join our vibrant dance community
            and learn from experienced instructors.
          </p>

        </div>


        <div className="map-grid">


          {/* CONTACT INFORMATION */}

          <div className="map-info">

            <h3>Our Studio Location</h3>

            <p className="map-address">
              📍 {business.address.street} <br/>
              {business.address.road} <br/>
              {business.address.locality}, {business.address.city} <br/>
              {business.address.state} – {business.address.zip}
            </p>


            <p className="map-contact">
              📞
              <a href="tel:+918754470020">
                8754470020
              </a>
            </p>


            <p className="map-email">
              📧
              <a href="mailto:omrdedancedestiny@gmail.com">
                omrdedancedestiny@gmail.com
              </a>
            </p>


            {/* ACTION BUTTONS */}

            <div className="map-buttons">

              {/* Primary navigation button */}

              <a
                href={directionsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn directions"
              >
                Get Directions
              </a>


              {/* Call button */}

              <a
                href="tel:+918754470020"
                className="map-btn call"
              >
                Call Now
              </a>


              {/* Extra navigation button to increase map clicks */}

              <a
                href={openMapsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn open-map"
              >
                Open in Google Maps
              </a>

            </div>

          </div>



          {/* GOOGLE MAP EMBED */}

          <div className="map-embed">

            <iframe
              title="DE Dance Destiny Location OMR Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.467648036648!2d80.21976409999999!3d12.8776231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbaf231c865%3A0x477f5416dafd471e!2sDe%20Dance%20Destiny%20-%20OMR!5e0!3m2!1sen!2sin!4v1772867609009!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>


        </div>

      </div>

    </section>
  );
}

export default Map;

