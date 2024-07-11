import React from "react";
import { Bio } from "../../constants";
import { Link } from "react-router-dom";

const ResumeContact = () => {
  const handleMail = (e, mailTo) => {
    e.preventDefault();
    window.location.href = `mailto:${mailTo}`;
  };
  return (
    <section id="contact-section">
      <h2>CONTACT</h2>
      {/* <!--contact information including social media--> */}
      <div className="contacts-container w-1/2 mx-auto">
        <p className="text-left">
          <i class="fa-regular fa-envelope" aria-hidden="true"></i>
          <Link to="#" onClick={(e) => handleMail(e, Bio.mail)}>
            {Bio.mail}
          </Link>
          {/* <a href="mailto:your-email@example.com">{Bio.mail}</a> */}
        </p>
        <p className="text-left">
          <i class="fab fa-github" aria-hidden="true"></i>
          <a href={`https://github.com/${Bio.github}`} target="_blank" rel="noopener noreferrer">{Bio.github}</a>
        </p>
        <p className="text-left">
          <i class="fab fa-linkedin" aria-hidden="true"></i>
          <a href={`https://www.linkedin.com/in/${Bio.linkedin}`} target="_blank" rel="noopener noreferrer" >{Bio.linkedin}</a>
        </p>
      </div>
    </section>
  );
};

export default ResumeContact;
