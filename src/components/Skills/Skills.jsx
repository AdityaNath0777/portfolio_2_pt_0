import React from "react";
import { skills } from "../../constants";
import 'aos/dist/aos.css'

const Skills = () => {
  return (
    <section id="skills" className="">
      <div className="skills-container px-6">
        <h2 className="text-4xl  text-slate-900 font-bold m-2 py-5">Skills</h2>
        <ul className="skills-list flex justify-evenly flex-wrap gap-4 my-8 items-center">
          {skills.map((skill) => (
            <li data-aos="flip-left" data-aos-duration="1000" className="skill-item px-5 text-sky-500  font-semibold backdrop-blur-xl shadow-lg  bg-sky-100    py-3 text-xl border-2 my-4 rounded border-sky-500 ">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
