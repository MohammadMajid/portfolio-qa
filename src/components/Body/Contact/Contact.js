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
          <a download href={require("../../../Icons/bitbucket.png").default}>
            {/* <img src="https://img.icons8.com/fluency/48/000000/download.png" /> */}
            <i class="fas fa-file-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
