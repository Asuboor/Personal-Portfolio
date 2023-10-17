import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <div id="skills">
      <div className="text-center font-mono text-5xl mt-5 font-bold  ">SKILLS</div>
      <div className= "   justify-center gap-6 mt-6 sm:flex lg:flex-wrap ">
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
