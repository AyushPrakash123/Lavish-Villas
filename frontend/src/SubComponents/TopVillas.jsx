import React from "react";
import { villas } from "../villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopVillas = () => {
  return (
    <section id="topVillas">
      <h1>TOP PICK VILLAS</h1>
      <p>
      Explore our curated selection of exclusive villas, each offering unmatched elegance, privacy, and luxury. Whether you’re looking for a serene escape by the ocean or a lavish retreat in the hills, our top picks provide the perfect blend of style and comfort. Dive into extraordinary living with these handpicked gems.
      </p>
      <div className="villasContainer">
        {villas.slice(0,3).map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span>{element.squareMeter}</span>
                    Area
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>
                </div>
                <div className="badge">
                  From <span>Rs{element.dailyRent} / Day </span>
                </div>
              </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopVillas;