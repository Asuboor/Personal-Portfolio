import React from "react";
import ProjectCard from "../components/ProjectCard";
import project from "../ProjectIndex";

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center text-5xl mt-24 font-bold">Projects</div>
      <div className="text-center text-2xl  m-8 font-lg">
        Here are some Projects done during my Undergrad
      </div>
      <div className="flex flex-wrap place-content-evenly gap-4 ">
        {project.map((projectItem) => (
          <ProjectCard
            key={projectItem.key}
            image={projectItem.image}
            title={projectItem.title}
            description={projectItem.description}
            link={projectItem.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
