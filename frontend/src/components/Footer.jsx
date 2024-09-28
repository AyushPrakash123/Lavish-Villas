import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
        <p></p>
        <p></p>    
          <p>Discover handpicked luxury properties designed for comfort, style, and exclusivity. From chic city apartments to stunning beachside villas, we offer rentals that redefine luxury living. Find your next dream space with ease.</p>
          <ul>
            <li>
              <h1><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></h1>
            </li>
            <li>
              <h1><Link to={"/termsandconditions"}>Terms & Conditions</Link></h1>
            </li>
            <li>
              <h1><Link to={"/contact"}>Contact</Link></h1>
            </li>
          </ul>
         
        </div>
        <div className="container">
          <div className="logo" onClick={()=> gotoHome()}>
        <img src="/LVlogo1.png" alt="Lavish Villas Logo" 
        style={{
          borderRadius: '50%',
          width: "auto",
          height: '250px',
          objectFit: 'cover', }} />
        </div>
          
        </div>
      
        
      </footer>
  
    </>
  );
};

export default Footer;