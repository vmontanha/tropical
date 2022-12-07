import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5511939588122&text=Ol%C3%A1,%20vim%20do%20site,%20podem%20me%20ajudar?" className="c-button">SAIBA MAIS</a>
    </div>
  );
};

export default Card;
