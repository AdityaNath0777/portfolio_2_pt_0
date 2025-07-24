import React from "react";
import {
  ResumeAbout,
  ResumeContact,
  ResumeEducation,
  ResumeHeader,
  ResumeProjects,
  ResumeSkills,
  ResumeWork,
} from "./components";
import "./resume.css";

const Resume = () => {
  return (
    <div id="resume" className=" min-h-screen shadow-md ring-1 ring-gray-300/20">
      <ResumeHeader />
      <main>
        <article id="main-left">
          <ResumeContact />
          <ResumeSkills />
          <ResumeEducation />
        </article>
        <article id="main-right">
          <ResumeAbout />
          <ResumeWork />
          <ResumeProjects />
        </article>
      </main>
    </div>
  );
};

export default Resume;
