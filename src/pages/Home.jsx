import React, { useEffect } from "react";
import AOS from "aos";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Instagram from "../components/sections/Instagram";
import Map from "../components/sections/Map";
import Contact from "../components/sections/Contact";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,          // faster animation
      once: true,             // animation runs only once (important for mobile)
      offset: 80,             // triggers animation earlier
      easing: "ease-out-cubic"
    });

    // Refresh animations after load
    setTimeout(() => {
      AOS.refresh();
    }, 500);

  }, []);

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <section className="section">
          <About />
        </section>

        <section className="section">
          <Services />
        </section>

        <section className="section">
          <Instagram />
        </section>

        <section className="section">
          <Map />
        </section>

        <section className="section">
          <Contact />
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />

    </>
  );
}

export default Home;