import React from "react";
import rocket from "../../img/icons/rocket.svg";
import desktop from "../../img/icons/desktop-white.svg";
import lightBulb from "../../img/icons/lightbulb.svg";
import tachometer from "../../img/icons/tachometer.svg";
import Viktor from "../../img/my-photo1.webp";
import "./about.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <h2 className="wow fadeInDown">About</h2>

          <hr className="hr wow fadeInDown" />
        </div>

        <div className="about__info">
          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".2s">
              <img src={tachometer} alt="tachometer" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".2s">
              <h3>Fast</h3>
              <p>
                Fast load times and lag-free interaction, my highest priority.
              </p>
            </div>
          </div>

          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".4s">
              <img src={desktop} alt="desktop" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".4s">
              <h3>Responsive</h3>
              <p>My layouts will work on any device, big or small.</p>
            </div>
          </div>

          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".6s">
              <img src={lightBulb} alt="lightBulb" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".6s">
              <h3>Intuitive</h3>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
          </div>

          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".8s">
              <img src={rocket} alt="rocket" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".8s">
              <h3>Dynamic</h3>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
          </div>
        </div>

        <div className="about__footer">
          <div className="about__me">
            <div className="about__me-image wow flipInY" data-wow-delay=".2s">
              <img src={Viktor} alt="Viktor Hordynskyi" />
            </div>
            <div className="about__me-description">
              <h3 className="wow fadeInDown" data-wow-delay=".2s">
                Who's this guy?
              </h3>

              <p className="wow fadeInUp" data-wow-delay=".4s">
                I'm the Front-End Developer in Rivne, Ukraine.
                <br />
                I have a serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences.
                <br />
                I build bespoke websites to help my clients push their
                businesses further online.
                <br />
                <span>Let's make something special.</span>
              </p>
            </div>
          </div>

          <div className="about__skills">
            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>CSS</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "80%" }}
                ></div>
                <span>80%</span>
              </div>
            </div>

            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>HTML</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "90%" }}
                ></div>
                <span>90%</span>
              </div>
            </div>

            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>React</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "60%" }}
                ></div>
                <span>60%</span>
              </div>
            </div>

            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>JavaScript</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "70%" }}
                ></div>
                <span>70%</span>
              </div>
            </div>

            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>JQuery</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "75%" }}
                ></div>
                <span>75%</span>
              </div>
            </div>

            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>Node.js</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "50%" }}
                ></div>
                <span>50%</span>
              </div>
            </div>

            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>Photoshop</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "60%" }}
                ></div>
                <span>60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
