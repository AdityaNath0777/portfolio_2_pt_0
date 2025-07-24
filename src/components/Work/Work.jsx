import React from "react";
import { experience } from "../../constants";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section id="work" className="w-full px-4">
      <h2 className="text-4xl uppercase text-slate-900 font-bold m-2 py-10">
        WORK Experience
      </h2>
      <div className="work-container grid grid-cols-2 gap-4 ">
        {experience?.work?.length > 0 && experience.work.map((exp) => (
          <WorkCard key={`work-${exp.role}`} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Work;
