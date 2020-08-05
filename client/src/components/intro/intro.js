import React from "react";
import arrowRight from "../../img/icons/arrow-right.svg";
import "./intro.scss";

function Intro({ linkClick, t }) {
  return (
    <>
      <div className="intro__bg"></div>

      <div className="intro__preview" id="home">
        <h1>
          <span className="wow zoomIn" data-wow-delay=".1s">
            {t("intro.1")}&nbsp;
            <strong>{t("intro.2")}</strong>.
          </span>
          <br />
          <span className="wow zoomIn" data-wow-delay=".5s">
            {t("intro.3")}
          </span>
        </h1>

        <button
          className="intro__button wow zoomIn"
          data-wow-delay="1s"
          onClick={() => linkClick("about")}
        >
          {t("intro.4")} <img src={arrowRight} alt="arrow right" />
        </button>
      </div>
    </>
  );
}

export default Intro;
