import React from "react";
import arrowRight from "../../img/icons/arrow-right.svg";
import "./intro.scss";

function Intro() {
  return (
    <>
      <div className="intro__bg"></div>

      <div className="intro__preview" id="home">
        <h1>
          <span className="wow zoomIn" data-wow-delay=".1s">Hello, I'm <strong>Viktor Hordynskyi</strong>.</span>
          <br />
          <span className="wow zoomIn" data-wow-delay=".5s">I'm a front-end web developer.</span>
        </h1>

        <a href="#about" className="intro__button wow zoomIn" data-wow-delay="1s">
          View my works <img src={arrowRight} alt="arrow right" />
        </a>
      </div>
    </>
  );
}

export default Intro;
