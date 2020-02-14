import React, { useState } from "react";
import axios from "axios";
import "./contact.scss";

const Contact = () => {
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
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        setStatus("Your message has been sent, we will contact you shortly.");
        setShow(true);
        resetForm();

        setTimeout(() => {
          setStatus(null);
          setShow(false);
        }, 3000);
      } else if (response.data.msg === "fail") {
        setStatus("Message failed to send.");
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
          <h2 className="wow fadeInDown">Contact</h2>

          <hr className="hr wow fadeInDown" />

          <p className="wow zoomIn" data-wow-delay=".1s">
            Have a question or want to work together?
          </p>
        </div>

        <div className="contact__form">
          <form id="feedback-form" method="POST" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              id="name-input"
              className="wow zoomIn"
              data-wow-delay=".2s"
              autoComplete="off"
            />

            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              id="email-input"
              className="wow zoomIn"
              data-wow-delay=".3s"
              autoComplete="off"
            />

            <textarea
              required
              name="message"
              id="message-input"
              rows="5"
              placeholder="Your Message"
              className="wow zoomIn"
              data-wow-delay=".4s"
              autoComplete="off"
            ></textarea>

            <div className="contact__form-button">
              <input
                type="submit"
                className="button wow flipInY"
                data-wow-delay=".5s"
                value="submit"
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
