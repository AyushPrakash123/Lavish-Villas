import React from "react";
import AboutComponentMini from "../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>At Lavish Villas, we prioritize your comfort and tranquility, ensuring every detail of your stay is flawless.</p>
          <p>From seamless check-ins to round-the-clock support, we handle everything so you can focus on relaxation.</p>
          <p>Our dedicated team is committed to creating a stress-free experience, allowing you to fully immerse yourself in the luxury you deserve.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;