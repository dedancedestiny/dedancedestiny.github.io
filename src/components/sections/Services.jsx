import React from "react";
import "./Services.css";

const Services = () => {
  const programs = [
    {
      title: "Kids Dance Classes",
      description:
        "Fun and engaging dance classes for kids that build rhythm, confidence, coordination, and creativity through professional choreography."
    },
    {
      title: "Adult Dance Classes",
      description:
        "Beginner friendly dance programs designed for adults to learn dance, improve fitness, and enjoy expressive movement."
    },
    {
      title: "Hip Hop Dance Classes",
      description:
        "High energy hip hop training including freestyle, grooves, choreography, and stage performance techniques."
    },
    {
      title: "Personal Dance Classes",
      description:
        "One-on-one personalized dance coaching to improve technique, flexibility, performance, and confidence faster."
    },
    {
      title: "Wedding Choreography",
      description:
        "Professional wedding dance choreography for couples, families, and group performances."
    },
    {
      title: "Beginner Dance Training",
      description:
        "Perfect starting point for new dancers to learn basic rhythm and foundational dance techniques."
    },
    {
      title: "Advanced Dance Training",
      description:
        "Professional level choreography and performance training for experienced dancers."
    },
    {
      title: "Stage Performance Training",
      description:
        "Specialized training focused on expressions, stage confidence and choreography execution."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <h2 className="services-title">
          Professional Dance Classes in Chennai
        </h2>

        <p className="services-subtitle">
          Join our expert-led dance programs designed for kids, adults, beginners,
          and advanced dancers. Learn choreography, improve confidence, and perform
          on stage with the best dance academy training.
        </p>

        <div className="services-grid">
          {programs.map((program, index) => (
            <div key={index} className="service-card">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;