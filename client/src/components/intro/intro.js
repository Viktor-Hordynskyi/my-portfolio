import React from "react";
import arrowRight from "../../img/icons/arrow-right.svg";
import "./intro.scss";

function Intro() {
  return (
    <>
      <div className="intro__bg"></div>

      <div className="intro__preview" id="home">
        <h1>
          Hello, I'm <span>Viktor Hordynskyi</span>.
          <br />
          I'm a front-end web developer.
        </h1>

        <a href="#about" className="intro__button">
          View my works <img src={arrowRight} alt="arrow right" />
        </a>
      </div>
    </>
  );
}

export default Intro;
