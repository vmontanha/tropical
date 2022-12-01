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

        <a href="https://api.whatsapp.com/send?phone=5511939588122&text=Seja%20bem%20vindo!%2C%20como%20podemos%20lhe%20ajudar%20%3F" className="button n-button">Conversar</a>

      </div>
    </div>
  );
};

export default navbar;
