import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          At Lavish Villas, we redefine luxury living through a carefully curated selection of exceptional real estate properties. From stunning beachfront villas to serene mountain retreats, our portfolio offers the perfect blend of comfort, elegance, and exclusivity.
          </p>
          <p>
          We go beyond offering beautiful homes by delivering personalized services tailored to each guest's needs. Whether you're looking for a short-term getaway or a long-term residence, our dedicated team ensures that every stay is memorable. With concierge services and customized experiences, we make every moment special.
          </p>
          <p>
          Our focus on premium amenities and unparalleled customer care guarantees a seamless and luxurious stay. At Lavish Villas, we create homes where your dreams take shape, offering the highest standards of quality and service.
          </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;