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
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Instagram />
      <Map />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default Home;