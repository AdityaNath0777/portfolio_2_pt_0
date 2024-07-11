import React from "react";
import { education } from "../../constants";

const ResumeEducation = () => {
  return (
    <section id="edu-section">
      <h2>EDUCATION</h2>
      <div className="edu-container flex flex-col gap-2 my-1 items-start w-4/5 mx-auto">
        {education.map((edu) => (
          <div className="exp-item w-fit">
            <h3 className="text-left">
              {`${edu.courseName} - ${edu.branchAbbr ? edu.branchAbbr : edu.branch}`} 
            </h3>
            {/* <p></p> */}
            <p className="text-left">{`${edu.duration.start} - ${edu.duration.end} ${
              edu.duration.expectedEnd ? "(expected)" : ""
            }`}</p>
            <p className="text-left">{edu.institute} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeEducation;
