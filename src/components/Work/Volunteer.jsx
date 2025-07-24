import React from "react";
import { experience } from "../../constants";
import VolunteerCard from "./WorkCard";

const Volunteer = () => {
  return (
    <section id="work" className="min-h-screen w-full px-4">
      <h2 className="text-4xl uppercase text-slate-900 font-bold m-2 py-10">
        Position of Responsibilities
      </h2>
      <div className="work-container grid grid-cols-2 gap-4 ">
        {experience?.volunteer?.length > 0 && experience.volunteer.map((exp) => (
          <VolunteerCard key={`volunteer-${exp.role}-${exp.duration.start}`} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Volunteer;
