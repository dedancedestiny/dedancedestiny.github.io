import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        <h2 className="about-title">
          About DE Dance Destiny
        </h2>

        <h3 className="about-subtitle">
          Best Dance Classes in Semmanchery, OMR Chennai
        </h3>

        <p className="about-text">
          <strong>DE Dance Destiny</strong> is one of the most trusted dance academies
          in <strong>Semmanchery, OMR Chennai</strong>. Our academy is dedicated
          to nurturing creativity, confidence, and fitness through professional
          dance training for kids, teenagers, and adults.
        </p>

        <p className="about-text">
          We offer professional programs including
          <strong>
            {" "}Kids Dance Classes, Private Dance Classes, Personal Training,
            Wedding Choreography, Bollywood Dance, Hip-Hop, Contemporary,
            and Zumba Fitness Classes.
          </strong>
        </p>

        <p className="about-text">
          At <strong>DE Dance Destiny</strong>, dance is more than movement —
          it builds <strong>confidence, creativity, discipline and performance
          skills</strong>. Whether you're a beginner or experienced dancer,
          we help you grow and shine on stage.
        </p>

        <p className="about-text">
          We proudly serve students from
          <strong>
            {" "}Semmanchery, Navalur, Sholinganallur, Perumbakkam and OMR Road.
          </strong>
        </p>


        <div className="about-stats">

          <div className="stat-card">
            <h4>500+</h4>
            <p>Students Trained</p>
          </div>

          <div className="stat-card">
            <h4>10+</h4>
            <p>Dance Styles</p>
          </div>

          <div className="stat-card">
            <h4>5+</h4>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h4>OMR</h4>
            <p>Chennai Location</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;