import React from "react";
import "./Contact.css";

function Contact() {

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
    }
  };

  return (
    <section className="contact-section" id="contact">

      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="contact-container">

        <div className="contact-header">

          <h2>Contact DE Dance Destiny</h2>

          <p>
            Have questions about dance classes, schedules, or enrollment?
            Contact our team today and start your dance journey at the
            best dance academy in OMR Chennai.
          </p>

        </div>


        <div className="contact-grid">

          {/* PHONE */}

          <div className="contact-card">

            <div className="contact-icon">📞</div>

            <h3>Call Us</h3>

            <p>Speak directly with our team for class details and enrollment.</p>

            <a href="tel:8754470020" className="contact-btn">
              8754470020
            </a>

          </div>


          {/* EMAIL */}

          <div className="contact-card">

            <div className="contact-icon">📧</div>

            <h3>Email Us</h3>

            <p>Send your questions about classes, events, or collaborations.</p>

            <a
              href="mailto:omrdedancedestiny@gmail.com"
              className="contact-btn"
            >
              Send Email
            </a>

          </div>


          {/* LOCATION */}

          <div className="contact-card">

            <div className="contact-icon">📍</div>

            <h3>Visit Our Studio</h3>

            <p>
              No 63, Ambrosio Apartment, Club House<br/>
              2nd Floor, Nookampalayam Ring Road<br/>
              Semmanchery, Chennai – 600119
            </p>

            <a
              href="https://www.google.com/maps/place/De+Dance+Destiny+-+OMR"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Get Directions
            </a>

          </div>

        </div>


        {/* CTA */}

        <div className="contact-cta">

          <h3>Ready to Start Dancing?</h3>

          <p>
            Join DE Dance Destiny today and learn from professional
            dance instructors in a fun and energetic environment.
          </p>

          <div className="contact-cta-buttons">

            <a href="tel:8754470020" className="cta-primary">
              Call Now
            </a>

            <a
              href="https://wa.me/918754470020"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;