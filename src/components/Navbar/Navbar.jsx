import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from '../../img/favicon.png'
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <img src={Logo} alt="logo" />
        </div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            {/* <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li> */}
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>

        <a href="https://api.whatsapp.com/send?phone=5511951442972&text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Tropical.%20Gostaria%20de%20saber%20um%20pouco%20mais%20sobre%20os%20servi%C3%A7os." className="button n-button">Conversar</a>

      </div>
    </div>
  );
};

export default navbar;
