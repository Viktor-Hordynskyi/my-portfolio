import React from "react";
import rocket from "../../img/icons/rocket.svg";
import desktop from "../../img/icons/desktop-white.svg";
import lightBulb from "../../img/icons/lightbulb.svg";
import tachometer from "../../img/icons/tachometer.svg";
import Viktor from "../../img/my-photo.jpg";
import Viktor2 from "../../img/my-photo2.jpg";
import { useTranslation } from "react-i18next";
import "./about.scss";

function About({ linkClick }) {
  const { t } = useTranslation();
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <h2 className="wow fadeInDown">{t("about.1")}</h2>

          <hr className="hr wow fadeInDown" />
        </div>

        <div className="about__info">
          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".2s">
              <img src={tachometer} alt="tachometer" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".2s">
              <h3>{t("about.2")}</h3>
              <p>{t("about.6")}</p>
            </div>
          </div>

          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".4s">
              <img src={desktop} alt="desktop" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".4s">
              <h3>{t("about.3")}</h3>
              <p>{t("about.7")}</p>
            </div>
          </div>

          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".6s">
              <img src={lightBulb} alt="lightBulb" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".6s">
              <h3>{t("about.4")}</h3>
              <p>{t("about.8")}</p>
            </div>
          </div>

          <div className="about__info-item">
            <div className="about__info-image wow flipInY" data-wow-delay=".8s">
              <img src={rocket} alt="rocket" />
            </div>

            <div className="wow fadeIn" data-wow-delay=".8s">
              <h3>{t("about.5")}</h3>
              <p>{t("about.9")}</p>
            </div>
          </div>
        </div>

        <div className="about__footer">
          <div className="about__me">
            <div className="about__me-image wow flipInY" data-wow-delay=".2s">
              <picture>
                <source srcSet={Viktor2} media="(max-width: 767px)" />
                <img src={Viktor} alt="Viktor Hordynskyi" />
              </picture>
            </div>
            <div className="about__me-description">
              <h3 className="wow fadeInDown" data-wow-delay=".2s">
                {t("about.10")}
              </h3>

              <p className="wow fadeInUp" data-wow-delay=".4s">
                {t("about.11")}
                <br />
                <button onClick={() => linkClick("contact")}>
                  {t("about.12")}
                </button>
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
                <span>React</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "60%" }}
                ></div>
                <span>65%</span>
              </div>
            </div>

            <div className="about__skills-element">
              <div className="about__skills-title">
                <span>Redux</span>
              </div>

              <div className="about__skills-progress">
                <div
                  className="about__skills-indicator wow"
                  data-wow-duration="2s"
                  style={{ width: "50%" }}
                ></div>
                <span>60%</span>
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
