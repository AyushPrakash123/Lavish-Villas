import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";
const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.filter((villa) => villa.id === numericId)[0];
  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
        <div className="villaImg">
            <img src={filteredVilla.image} alt={filteredVilla.name} />
          </div>
          <h3>{filteredVilla.name}</h3>
          <h4>{filteredVilla.location}</h4>
          <p>
            {filteredVilla.bedrooms} Bedrooms / {filteredVilla.guests} Guests /{" "}
            {filteredVilla.bathrooms} Bathrooms / {filteredVilla.squareMeter} sqm
          </p>
          <div className="checkin_out">
            <h5>
              Check In: <span> 9:00 AM</span>
            </h5>
            <h5>
              Check Out: <span> 11:00 AM</span>
            </h5>
          </div>
          <div className="location">
            <h4>LOCATION</h4>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAikc6nFxY19jae4BeU81RQpMRntfTMCVE&q=Athens,+Greece"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVilla;