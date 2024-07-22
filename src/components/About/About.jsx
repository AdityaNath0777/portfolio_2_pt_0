import React, { useEffect } from "react";
import { Button, SocialLinks } from "../index";
import { Link } from "react-router-dom";
import { Bio } from "../../constants";
import { myPic } from "../../assets";
import { NavHashLink } from "react-router-hash-link";
import "./about.css";
import 'aos/dist/aos.css';

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="about-container w-full grid grid-cols-2 gap-2 place-items-center justify-items-center p-4">
        <div className="about-left w-full"   data-aos='fade-right' data-aos-duration='1000' >
          <h1
            className="about-heading pt-20 text-wrap font-extrabold text-slate-100"
          >
            NAMASTE,
            <br />
            I'M {`${Bio.firstName.toUpperCase()} ${Bio.lastName.toUpperCase()}`}
          </h1>
          <h2 className="about-role text-sky-500 font-bold my-3">
            {Bio.roles[0]}
          </h2>
          <p className="about-desc mt-8 text-slate-500 text-base font-semibold">
            {Bio.description}
          </p>

          <div className="btn-container mt-14 grid grid-cols-2 gap-4">
            <Link to={"resume"} className="">
              <Button
                className="about-resume-btn w-full font-semibold border-4 border-transparent rounded-tl-3xl rounded-br-3xl h-20"
                bgColor="bg-sky-500 "
              >
                My Resum&eacute;
              </Button>
            </Link>
            <NavHashLink
              to={"#contact"}
              className=""
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <Button
                className="about-contact-btn w-full border-4 font-semibold border-sky-500 rounded-tl-3xl rounded-br-3xl h-20"
                bgColor="bg-slate-100"
                textColor="text-sky-500 "
              >
                Say Hello!
              </Button>
            </NavHashLink>
          </div>

          <div className="mt-10 px-6">
            <SocialLinks prop = {Bio} />
          </div>


        </div>

        <div className="about-right w-full" data-aos='fade-left' data-aos-duration='1000'>
          <img
            src={myPic}
            alt="my picture"
            className="pr-4"
            style={{ width: "70%", marginLeft: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
