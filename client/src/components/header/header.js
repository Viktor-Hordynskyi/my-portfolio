import React from "react";
import "./header.scss";
import eng from "../../img/icons/eng.svg";
import ru from "../../img/icons/ru.svg";

function Header({ menu, togglerHandler, classes, linkClick }) {
  return (
    <header id="navbar">
      <nav className={classes.join(" ")}>
        <div className="navbar-language animated zoomIn" data-wow-delay=".5s">
          <a href="/ru.html">
            <img src={ru} alt="ru" />
          </a>

          <a href="/">
            <img src={eng} alt="eng" />
          </a>
        </div>

        <ul className="container">
          {menu.map((e, idx) => {
            return (
              <li key={idx} className="wow zoomIn" data-wow-delay={`${((idx+1)/4)}s`}>
                <a
                  href={`#${e.title}`}
                  className={e.status ? "active" : ""}
                  onClick={linkClick}
                >
                  {e.title}
                </a>
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
