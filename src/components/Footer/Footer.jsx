import React from "react";
import "./Footer.css";
import Logo from '../../img/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        <div className="f-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
