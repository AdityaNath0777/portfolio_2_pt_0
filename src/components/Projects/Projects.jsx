import React from "react";
import { myProjects } from "../../constants";
import "./project.css";
import "aos/dist/aos.css";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full px-6 mb-20">
      <h2 className="projects-heading text-4xl font-bold  py-10">PROJECTS</h2>
      <div className="prj-container">
        {myProjects.map((proj) => (
          <ProjectCard key={proj.name} proj={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
