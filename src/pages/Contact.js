import React from "react";
import { links } from "../portfolio";
import { SocialIcon } from "react-social-icons";

import Fade from "react-reveal/Fade";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={400}>
          Contact me!
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link} target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
        <p id="emailPhone">
          <a href="tel:+918686373714">📞+91 86863 73714</a>{" "}
          <a
            href="mailto:chaitanya.m.1996@gmail.com"
            rel="noreferrer"
            target="_blank"
            id="email"
          >
            {" "}
            📧 chaitanya.m.1996@gmail.com.com
          </a>
        </p>
        <hr className="style-f" />
      </center>
      <p className="copyright">
        👨‍💻 with ❤️ by <b id="footName">Chaitanya Makala</b> using ⚛️
      </p>
    </div>
  );
};

export default Contact;
