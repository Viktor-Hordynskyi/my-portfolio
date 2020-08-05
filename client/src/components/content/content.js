import React from "react";
import About from "../about";
import Projects from "../projects";
import Contact from "../contact";
import "./content.scss"

const Container = ({ linkClick, projectsArr, t }) => {
  return (
    <div className="content">
      <About linkClick={linkClick} t={t} />
      <Projects projectsArr={projectsArr} t={t} />
      <Contact t={t} />
    </div>
  );
};

export default Container;
