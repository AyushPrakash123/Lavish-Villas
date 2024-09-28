import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>We're here to assist you with any questions or special requests to make your stay perfect.</p>
        <p>
        Reach out to our team, and we'll ensure your luxury experience is tailored to your needs.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 99999 99999</span>
              </div>
              <div>
                <p>Email</p>
                <span>LV@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.123 Sector A-1</span>
              </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;