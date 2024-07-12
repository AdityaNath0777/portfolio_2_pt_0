import React from "react";
import { Button } from "../index";
import { Link } from "react-router-dom";
import { Bio } from "../../constants";
import { myPic } from "../../assets";
import { NavHashLink } from "react-router-hash-link";

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="about-container w-full grid grid-cols-2 gap-2 place-items-center justify-items-center px-4">
        <div className="about-left w-full">
          <h1
            className="pt-20 text-wrap"
            style={{ fontSize: "3rem", fontWeight: "800" }}
          >
            NAMASTE,
            <br />
            I'M {`${Bio.firstName.toUpperCase()} ${Bio.lastName.toUpperCase()}`}
          </h1>
          <h2 className="text-xl text-sky-600 font-bold">{Bio.roles[0]}</h2>
          <p className="about-desc text-slate-600 text-md font-semibold">
            {Bio.description}
          </p>

          <div className="btn-container mt-14 grid grid-cols-2 gap-4">
            <Link to={"resume"} className="">
              <Button
                className="w-full font-semibold rounded-tl-3xl rounded-br-3xl h-20 "
                bgColor="bg-sky-500 "
              >
                My Resum&eacute;
              </Button>
            </Link>
            <NavHashLink to={"#contact"} className="">
              <Button
                className="w-full border-4 font-semibold border-sky-500 rounded-tl-3xl rounded-br-3xl h-20 "
                bgColor="bg-slate-100"
                textColor="text-sky-500 "
              >
                Say Hello!
              </Button>
            </NavHashLink>
          </div>
        </div>

        <div className="about-right w-full">
          <img
            src={myPic}
            alt="my picture"
            style={{ width: "70%", marginLeft: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
