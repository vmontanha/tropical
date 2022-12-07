import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from '../../img/favicon.png'
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">
          <img src={Logo} alt="logo" />
        </div>
      </div>
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
                Serviços
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Parceiros
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Depoimentos
              </Link>
            </li>
          </ul>
        </div>

        <a href="https://api.whatsapp.com/send?phone=5511939588122&text=Ol%C3%A1,%20vim%20do%20site,%20podem%20me%20ajudar?" className="button n-button">Conversar</a>

      </div>
    </div>
  );
};

export default navbar;
