import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/sendinblue.webp";
import Fiverr from "../../img/figma.png";
import Amazon from "../../img/favicon.png";
import Shopify from "../../img/twilio.png";
import Facebook from "../../img/whatsapp.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Conheça nossas
          </span>
          <span>Ferramentas</span>
          <spane>
            Tropical oferece todos os serviços de marketing, design e ajustes de operações para concluirmos sua solicitação.
          </spane>

          <a href="https://api.whatsapp.com/send?phone=5511951442972&text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Tropical.%20Gostaria%20de%20saber%20um%20pouco%20mais%20sobre%20os%20servi%C3%A7os." className="button s-button">Contrate-nos</a>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
