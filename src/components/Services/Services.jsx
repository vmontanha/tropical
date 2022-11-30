import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>Nossos soluções</span>
        <span>para você</span>
        <span>
          Temos como função principal ajudar e incentivar os pequenos negócios a implementar a tecnologia como solução para sua empresa. Perceba que o que falta para alavancar seu negócio na área de teologia são os serviços da Tropical.
          <br />

        </span>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        <span className="introservice">Seja bem vindo a <span className="introserviceorange">Tecnologia...</span></span>

      </div>
      {/* right */}
      <div className="cards">

        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Sites & Sistemas"}
            detail={"Design, sistemas financeiros, administrativos, estoque e todos os tipos de serviços para sua empresa."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Apps em geral"}
            detail={"Aplicações em iOS, Android e Web com foco na sua necessidade. "}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Manutenção & Sustentação"}
            detail={
              "Todo o suporte e sustentação para os aplicativos, sistemas e sites."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
