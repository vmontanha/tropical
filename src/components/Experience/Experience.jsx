import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>8+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Anos de </span>
        <span>Experiência</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>20+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Projetos</span>
        <span>Realizados</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>5+</div>
        <span style={{ color: darkMode ? 'white' : '' }}>Trabalhos </span>
        <span>Concluídos</span>
      </div>
    </div>
  );
};

export default Experience;
