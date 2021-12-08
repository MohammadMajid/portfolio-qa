import React from "react";
import Separator from "../../Common/Separator/Separator";
import "./Contact.css";
import SocialContact from "../../Common/SocialContact/SocialContact";

function Contact(props) {
  return (
    <div className="contact">
      <Separator></Separator>
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact></SocialContact>
        </div>
        <div className="download">
          <a className="download-link" href="https://mohammadmajid.github.io/portfolio-qa/">
            See My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
