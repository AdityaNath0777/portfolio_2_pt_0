import React from "react";
import { top3WebDevProjects } from "../../constants/index";

const ResumeProjects = () => {
  return (
    <section id="projects-section">
      <h2>PROJECTS</h2>
      <div className="projects-container flex flex-col gap-3">
        {top3WebDevProjects.map((proj) => (
          <div className="project">
          <div className="grid grid-cols-2 gap-1">
            <h3 className="text-left font-semibold">{proj.name}</h3>
            <p className="text-left">{`${proj.duration.start} - ${proj.duration.end}`}</p>
          </div>
            <p className="text-justify">{proj.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ResumeProjects;
