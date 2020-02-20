import React, { useState, useEffect } from "react";
import Intro from "../intro";
import Header from "../header";
import Content from "../content";
import Footer from "../footer/";
// import PortfolioService from "../../services/portfolio-service";
import WOW from "wowjs";
import "animate.css";
import "./app.scss";

function App() {
  const [fixed, setFixed] = useState(false);
  const [togglerStatus, setTogglerStatus] = useState(false);
  const [menu, setMenu] = useState([
    { title: "home", status: true },
    { title: "about", status: false },
    { title: "projects", status: false },
    { title: "contact", status: false }
  ]);

  // PortfolioService.getData('skills').then(res => {
  //   console.log(res);
  // });
  useEffect(() => {
    new WOW.WOW({ live: false }).init();

    function handlerScroll() {
      if (document.getElementById("root").clientWidth <= 480) {
        setFixed(0 < window.scrollY);
        if ((0 === window.scrollY)) {
          setTogglerStatus(false);
        }
      } else {
        setFixed(
          document.getElementById("home").offsetHeight <= window.scrollY
        );
      }

      setMenu(m =>
        m.map(e => {
          const offsetTop = document.getElementById(e.title).offsetTop;
          const offsetHeight = document.getElementById(e.title).offsetHeight;
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

    window.addEventListener("scroll", handlerScroll);
  }, []);

  const classes = ["navbar"];
  if (fixed) classes.push("fixed");
  if (togglerStatus) classes.push("show");

  function togglerHandler() {
    setTogglerStatus(!togglerStatus);
  }

  function linkClick() {
    setTogglerStatus(false);
  }

  return (
    <div className="app">
      <Intro />
      <Header
        menu={menu}
        fixed={fixed}
        togglerHandler={togglerHandler}
        classes={classes}
        linkClick={linkClick}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
