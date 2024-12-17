import React from 'react'

const ProjectCard = ({proj}) => {
  return (
    <div className="prj-item border-2 h-full border-sky-600 rounded-lg px-4 py-6 m-2"  data-aos="zoom-out" data-aos-duration="1000">
    <div className="prj-top mb-4 grid grid-cols-2 place-items-center justify-items-center gap-4">
      <h3 className="prj-name text-left  w-full text-xl font-bold">
        {proj.name}
      </h3>
      <p className="prj-duration text-right w-full font-semibold ">
        <span>{`${proj.duration.start} - ${proj.duration.end}`}</span>
      </p>
    </div>
    <p className="prj-desc text-justify text-slate-500 my-2">{proj.desc}</p>
    <p className="prj-skills flex text-slate-700  flex-wrap gap-2 mt-2">
      {proj.tags.map((tag) => (
        <span className="hover:text-sky-500 hover:-translate-y-1 hover:cursor-pointer transition-all duration-200 ">
          {tag}
        </span>
      ))}
    </p>
  </div>
  )
}

export default ProjectCard