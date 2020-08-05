import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import en from "../../img/icons/en.svg";
import ru from "../../img/icons/ru.svg";
import arrowRight from "../../img/icons/arrow-right.svg";
import "./headerProject.scss";

function HeaderProject({ t }) {
  const { i18n } = useTranslation();
  function translate(lang) {
    i18n.changeLanguage(lang);
    i18n.reloadResources(lang);
  }
  return (
    <header>
      <nav className="navbarProject">
        <ul className="container">
          <li>
            <Link to="/">
              <img src={arrowRight} alt="arrow right" />
              {t("projectHeader.1")}
            </Link>
          </li>
        </ul>

        <div className="navbarProject-language">
          <button onClick={() => translate("ru")}>
            <img src={ru} alt="ru" />
          </button>

          <button onClick={() => translate("en")}>
            <img src={en} alt="en" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderProject;
