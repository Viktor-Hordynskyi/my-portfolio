import React from 'react';
import dSoSuite from '../../img/screenshots/SoSuite-desktop.jpg'
import mSoSuite from '../../img/screenshots/SoSuite-mobile.jpg'
import dBigBreak from '../../img/screenshots/bigbreak101-desktop.jpg'
import mBigBreak from '../../img/screenshots/bigbreak101-mobile.jpg'

import './projects.scss'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <h2 className="wow fadeInDown">
            Projects
					</h2>

          <hr className="hr wow fadeInDown" />

          <h5>
            Here, below, you can take a look at some of my works:
					</h5>
        </div>

        <div className="projects__grid">
          <div className="projects__info">
            <div className="projects__preview">
              <div className="projects__preview-desktop wow zoomIn" data-wow-delay=".2s">
                <div className="projects__preview-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src={dBigBreak} alt="SoSuite" className="" />
              </div>

              <div className="projects__preview-mobile wow zoomIn" data-wow-delay=".4s">
                <div className="projects__preview-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src={mBigBreak} alt="SoSuite" className="" />
              </div>
            </div>

            <div className="projects__description">
              <h4 className="wow fadeInRightBig" data-wow-delay=".1s">
                SoSuite
  						</h4>

              <div className="projects__buttons">
                <a href="https://gitlab.com/Morpi/projectSoSuite" className="wow zoomIn" data-wow-delay=".2s" target="blank">
                  View on GitLab
  							</a>

                <a href="example/preview.html" data-link="SoSuite/index.html" data-git="projectSoSuite" className="project__preview wow zoomIn" data-wow-delay=".4s">
                  Live Demo
  							</a>
              </div>
            </div>
          </div>

          <div className="projects__info">
            <div className="projects__preview">
              <div className="projects__preview-desktop wow zoomIn" data-wow-delay=".2s">
                <div className="projects__preview-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src={dSoSuite} alt="SoSuite" className="" />
              </div>

              <div className="projects__preview-mobile wow zoomIn" data-wow-delay=".4s">
                <div className="projects__preview-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <img src={mSoSuite} alt="SoSuite" className="" />
              </div>
            </div>

            <div className="projects__description">
              <h4 className="wow fadeInRightBig" data-wow-delay=".1s">
                SoSuite
  						</h4>

              <div className="projects__buttons">
                <a href="https://gitlab.com/Morpi/projectSoSuite" className="wow zoomIn" data-wow-delay=".2s" target="blank">
                  View on GitLab
  							</a>

                <a href="example/preview.html" data-link="SoSuite/index.html" data-git="projectSoSuite" className="project__preview wow zoomIn" data-wow-delay=".4s">
                  Live Demo
  							</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects