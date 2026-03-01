import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="hero">
      <HeroSlider />

      <div className="hero-content">
        <h1>
          Chennai’s Most <span>Energetic</span> Dance Academy 🔥
        </h1>

        <p>
          Kids • Adults • Zumba • Wedding Choreography
        </p>

        <a
          href="https://wa.me/918754470020"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Free Trial Class
        </a>
      </div>
    </section>
  );
}

export default Hero;