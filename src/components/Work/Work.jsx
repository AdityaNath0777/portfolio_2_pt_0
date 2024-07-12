import React from "react";
import { experience } from "../../constants";

const Work = () => {
  return (
    <section id="work" className="min-h-screen w-full px-4">
      <h2 className="text-4xl  text-slate-900 font-bold m-2 py-10">WORK</h2>
      <div className="work-container grid grid-cols-2 gap-4 ">
        {experience.map((exp) => (
          <div data-aos="fade-up" dos-aos-duration="1000" className="work-item border-2 border-sky-600 rounded-lg px-4 py-6 m-2">
            <div className="work-top mb-4">
              <h3 className="text-center text-xl text-slate-800 font-bold">
                {exp.role}
              </h3>
              <p className="text-center text-slate-700 font-semibold mt-4 grid grid-cols-2 gap-2">
                <span className="border-r pr-1 border-r-black">{`${exp.company}`}</span>
                <span>{`${exp.duration.start} - ${exp.duration.end}`}</span>
              </p>
            </div>
            <p className="text-justify text-slate-500 my-2">{exp.desc}</p>
            <p className="exp-skills flex text-slate-700  flex-wrap gap-2 mt-2">
              {exp.skills.map((skill) => (
                <span className="hover:text-sky-500 hover:-translate-y-1 hover:cursor-pointer transition-all duration-200 " >{skill}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
