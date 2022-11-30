import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5511939588122&text=Seja%20bem%20vindo!%2C%20como%20podemos%20lhe%20ajudar%20%3F" className="c-button">SAIBA MAIS</a>
    </div>
  );
};

export default Card;
