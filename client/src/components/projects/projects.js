import React from "react";
import "./projects.scss";

const Projects = ({ projectsArr, t }) => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <h2 className="wow fadeInDown">{t("projects.1")}</h2>

          <hr className="hr wow fadeInDown" />

          <h5>{t("projects.2")}</h5>
        </div>

        <div className="projects__grid">
          {projectsArr.map((project) => {
            return (
              <div className="projects__info" key={project.id}>
                <div className="projects__preview">
                  <div
                    className="projects__preview-desktop wow zoomIn"
                    data-wow-delay=".2s"
                  >
                    <div className="projects__preview-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <picture>
                      <source
                        srcSet={project.desktopImg2}
                        media="(max-width: 767px)"
                      />
                      <img src={project.desktopImg} alt={project.name} />
                    </picture>
                  </div>

                  <div
                    className="projects__preview-mobile wow zoomIn"
                    data-wow-delay=".4s"
                  >
                    <div className="projects__preview-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <picture>
                      <source
                        srcSet={project.mobileImg2}
                        media="(max-width: 767px)"
                      />
                      <img src={project.mobileImg} alt={project.name} />
                    </picture>
                  </div>
                </div>

                <div className="projects__description">
                  <h4 className="wow fadeInRightBig" data-wow-delay=".1s">
                    {project.name}
                  </h4>

                  <h5 className="wow fadeInRightBig" data-wow-delay=".2s">
                    {project.technology}
                  </h5>

                  <div className="projects__buttons">
                    <a
                      href={project.gitUrl}
                      className="wow fadeInRightBig"
                      data-wow-delay=".3s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.3")}
                    </a>

                    <a
                      href={`projects/${project.folderName}`}
                      className={
                        project.disabled
                          ? "wow fadeInRightBig disabled"
                          : "wow fadeInRightBig"
                      }
                      data-wow-delay=".4s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.4")}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects__footer">
          <h4>
            {t("projects.5")}
            <a
              href="https://gitlab.com/users/Morpi/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Projects;
