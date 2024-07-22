import React from "react";
import "./socialLink.css";

const SocialLinks = ({ prop }) => {
  return (
    <div className="w-full flex justify-between items-center">
      {prop.linkedin && (<div className="linkedin-icon">
        <a href={`https://linkedin.com/in/${prop.linkedin}`} target="_blank" rel="noopener noreferrer">
          <i
            className="fa-brands fa-linkedin-in my-social-icon"
            aria-hidden="true"
          ></i>
        </a>
      </div>)}
      {prop.mail && (<div className="mail-icon">
        <a
          href={`mailto:${prop.mail}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-regular fa-envelope my-social-icon" aria-hidden="true"></i>
        </a>
      </div>)}
      {prop.github && (<div className="github-icon">
        <a href={`https://github.com/${prop.github}`} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github my-social-icon" aria-hidden="true"></i>
        </a>
      </div>)}
      {prop.insta && (<div className="insta-icon">
        <a href={`https://instagram.com/${prop.insta}`} target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram my-social-icon" aria-hidden="true"></i>
        </a>
      </div>)}
      {prop.twitter && (<div className="x-icon">
        <a href={`https://x.com/${prop.twitter}`} target="_blank" rel="noopener noreferrer">
          <span className="[&>svg]:h-5 [&>svg]:w-5 my-social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              {" "}
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </span>
        </a>
      </div>)}
    </div>
  );
};

export default SocialLinks;
