import React, { useState } from "react";
import axios from "axios";
import upwork from "../../img/upwork.png";
import "./contact.scss"

const Contact = ({ t }) => {
  const [status, setStatus] = useState(null);
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("message-input").value;

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}nodemailer`,
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        setStatus(t("contact.7"));
        setShow(true);
        resetForm();

        setTimeout(() => {
          setStatus(null);
          setShow(false);
        }, 3000);
      } else if (response.data.msg === "fail") {
        setStatus(t("contact.8"));
        setShow(true);

        setTimeout(() => {
          setStatus(null);
          setShow(false);
        }, 3000);
      }
    });
  }

  function resetForm() {
    document.getElementById("feedback-form").reset();
  }

  return (
    <section className="contact" id="contact">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgbg-contact"
      >
        <path d="M0 0 L50 100 L100 0 Z"></path>
      </svg>

      <div className="container">
        <div className="contact__header">
          <h2 className="wow fadeInDown">{t("contact.1")}</h2>

          <hr className="hr wow fadeInDown" />

          <p className="wow zoomIn" data-wow-delay=".1s">
            {t("contact.2a")}
            <br />
            {t("contact.2b")}
            <br />
            <a
              href="https://www.upwork.com/o/profiles/users/~01eb2efd39e908c5f2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={upwork} alt="UpWork profile" />
            </a>
            <br />
            {t("contact.2c")}
          </p>
        </div>

        <div className="contact__form">
          <form id="feedback-form" method="POST" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="name"
              placeholder={t("contact.3")}
              id="name-input"
              className="wow zoomIn"
              data-wow-delay=".2s"
              data-wow-duration="1.5s"
              autoComplete="off"
            />

            <input
              required
              type="email"
              name="email"
              placeholder={t("contact.4")}
              id="email-input"
              className="wow zoomIn"
              data-wow-delay=".3s"
              data-wow-duration="1.5s"
              autoComplete="off"
            />

            <textarea
              required
              name="message"
              id="message-input"
              rows="6"
              placeholder={t("contact.5")}
              className="wow zoomIn"
              data-wow-delay=".4s"
              data-wow-duration="1.5s"
              autoComplete="off"
            ></textarea>

            <div className="contact__form-button">
              <input
                type="submit"
                className="button wow flipInY"
                data-wow-delay=".5s"
                data-wow-duration="1.5s"
                value={t("contact.6")}
              />
            </div>
          </form>

          <div className={`contact__popup ${show ? "show" : ""}`}>
            <h3>{status}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
