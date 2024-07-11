import React from "react";
import { experience } from "../../constants/index";

const ResumeWork = () => {
  return (
    <section id="work-section">
      <h2>WORK EXPERIENCE</h2>

      {experience.map((exp) => (
        <div className="work-exp mb-4">
          <div className="grid grid-cols-2 gap-1 m-0">
            <h3 className="text-left font-semibold">{exp.role}</h3>
            <p className="text-left grid grid-cols-2 gap-1">
              <span className="border-r pr-1 border-r-black text-right">{`${exp.company}`}</span>
              <span>{`${exp.duration.start} - ${exp.duration.end}`}</span>
            </p>
          </div>
          <p className="text-justify m-0">{exp.desc}</p>
          {/* <ul className="flex justify-center items-center gap-2">
            {exp.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </section>
  );
};

export default ResumeWork;
