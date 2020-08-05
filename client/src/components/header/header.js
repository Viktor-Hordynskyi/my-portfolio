import React from "react";
import { useTranslation } from "react-i18next";
import en from "../../img/icons/en.svg";
import ru from "../../img/icons/ru.svg";
import "./header.scss";

function Header({ menu, togglerHandler, classes, linkClick, t }) {
  const { i18n } = useTranslation();
  function translate(lang) {
    i18n.changeLanguage(lang);
    i18n.reloadResources(lang);
  }
  return (
    <header id="navbar">
      <nav className={classes.join(" ")}>
        <div className="navbar-language">
          <button onClick={() => translate("ru")}>
            <img src={ru} alt="ru" />
          </button>

          <button onClick={() => translate("en")}>
            <img src={en} alt="en" />
          </button>
        </div>

        <ul className="container">
          {menu.map((e, idx) => {
            return (
              <li key={idx}>
                <button
                  className={e.status ? "active" : ""}
                  onClick={() => linkClick(e.id)}
                >
                  {t(`header.${idx + 1}`)}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="navbar-toggler" onClick={togglerHandler}></div>
      </nav>
    </header>
  );
}

export default Header;
