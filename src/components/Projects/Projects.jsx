import React from "react";
import { myProjects } from "../../constants";
import "./project.css"

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full px-4 mb-20">
      <h2 className="projects-heading text-4xl font-bold m-2 py-10">PROJECTS</h2>
      <div className="prj-container">
        {myProjects.map((prj) => (
          <div className="prj-item border-2 h-full border-sky-600 rounded-lg px-4 py-6 m-2">
            <div className="prj-top mb-4 grid grid-cols-2 place-items-center justify-items-center gap-4">
              <h3 className="prj-name text-left  w-full text-xl font-bold">
                {prj.name}
              </h3>
              <p className="prj-duration text-right w-full font-semibold ">
                <span>{`${prj.duration.start} - ${prj.duration.end}`}</span>
              </p>
            </div>
            <p className="prj-desc text-justify text-slate-500 my-2">{prj.desc}</p>
            <p className="prj-skills flex text-slate-700  flex-wrap gap-2 mt-2">
              {prj.tags.map((tag) => (
                <span className="hover:text-sky-500 hover:-translate-y-1 hover:cursor-pointer transition-all duration-200 ">
                  {tag}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
