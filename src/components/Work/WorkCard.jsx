import React from "react";
import ReactMarkdown from "react-markdown";
import "./work.css";
const WorkCard = ({ exp }) => {
  return (
    <div
      data-aos="fade-up"
      dos-aos-duration="1000"
      className="work-item border-2 border-sky-600 rounded-lg px-4 py-6 m-2"
    >
      <div className="work-top mb-4">
        <h3 className="text-center text-xl text-slate-800 font-bold">
          {exp.role}
        </h3>
        <p className="text-center text-slate-700 font-semibold mt-4 grid grid-cols-2 gap-2">
          <span className="border-r pr-1 border-r-black">{`${exp.company}`}</span>
          <span>{`${exp.duration.start} - ${exp.duration.end}`}</span>
        </p>
      </div>
      <div className="work-desc text-justify text-slate-500 my-2">
        <ReactMarkdown
          components={{
            h1: (props) => (
              <h1 className="text-2xl font-extrabold" {...props} />
            ),
            h2: (props) => <h2 className="text-xl font-extrabold" {...props} />,
            h3: (props) => <h3 className="text-lg font-bold" {...props} />,
          }}
        >
          {exp.desc}
          {/* {exp.fullDescription || exp.desc} */}
        </ReactMarkdown>
      </div>
      {/* <div className="work-desc text-justify text-slate-500 my-2">
        <ReactMarkdown
          components={{
            h1: (props) => (
              <h1 className="text-2xl font-extrabold" {...props} />
            ),
            h2: (props) => <h2 className="text-xl font-extrabold" {...props} />,
            h3: (props) => <h3 className="text-lg font-bold" {...props} />,
          }}
        >
          {exp.fullDescription}
        </ReactMarkdown>
      </div> */}
      <p className="exp-skills flex text-slate-700  flex-wrap gap-2 mt-2">
        {exp.skills.map((skill) => (
          <span className="exp-skll-item hover:text-sky-500 hover:-translate-y-1 hover:cursor-pointer transition-all duration-200 ">
            {skill}
          </span>
        ))}
      </p>
    </div>
  );
};

export default WorkCard;
