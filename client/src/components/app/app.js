import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Intro from "../intro";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import projectsArr from "../../projectsArr";
import WOW from "wowjs";
import "animate.css";

function App() {
  const { t } = useTranslation();
  const [fixed, setFixed] = useState(false);
  const [togglerStatus, setTogglerStatus] = useState(false);
  const [menu, setMenu] = useState([
    { id: "home", status: true },
    { id: "about", status: false },
    { id: "projects", status: false },
    { id: "contact", status: false },
  ]);

  useEffect(() => {
    new WOW.WOW({ live: false }).init();

    function handlerScroll() {
      const idHome = document.getElementById("home");
      if (idHome) {
        if (document.getElementById("root").clientWidth <= 480) {
          setFixed(0 < window.scrollY);
          if (0 === window.scrollY) {
            setTogglerStatus(false);
          }
        } else {
          setFixed(idHome.offsetHeight <= window.scrollY);
        }

        setMenu((m) =>
          m.map((e) => {
            const offsetTop = document.getElementById(e.id).offsetTop;
            const offsetHeight = document.getElementById(e.id).offsetHeight;
            e.status = false;
            if (
              offsetTop <= window.scrollY &&
              offsetTop + offsetHeight > window.scrollY
            ) {
              e.status = !e.status;
            }
            return e;
          })
        );
      }
    }

    window.addEventListener("scroll", handlerScroll);
  }, []);

  const classes = ["navbar"];
  if (fixed) classes.push("fixed");
  if (togglerStatus) classes.push("show");

  function togglerHandler() {
    setTogglerStatus(!togglerStatus);
  }

  function linkClick(id) {
    setTogglerStatus(false);
    document.getElementById(id).scrollIntoView();
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Intro linkClick={linkClick} t={t} />
      <Header
        menu={menu}
        fixed={fixed}
        togglerHandler={togglerHandler}
        classes={classes}
        linkClick={linkClick}
        t={t}
      />
      <Content linkClick={linkClick} projectsArr={projectsArr} t={t} />
      <Footer scrollToTop={scrollToTop} t={t} />
    </>
  );
}

export default App;
