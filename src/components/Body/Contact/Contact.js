import React from "react";
import Separator from "../../Common/Separator/Separator";
import "./Contact.css";
import SocialContact from "../../Common/SocialContact/SocialContact";

function Contact(props) {
  return (
    <div className="contact">
      <Separator></Separator>
      <label className="section-title">Contact Me <img src="https://img.icons8.com/ios/40/000000/apple-mail.png"/> </label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Discuss a project or just want to say hi? My Inbox is open for all.</p>
          <p>mohammadnafiulmajid@gmail.com</p>
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
