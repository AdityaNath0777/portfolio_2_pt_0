import React from "react";
import { skills } from "../../constants";

const ResumeSkills = () => {
  return (
    <section>
      <h2>SKILLS</h2>
      <ul className="skills-container w-3/4 mx-auto flex gap-1 items-center flex-wrap  ">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item cursor-pointer">
            {skill.name}
            {index < skills.length - 1 ? "," : ""}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResumeSkills;
