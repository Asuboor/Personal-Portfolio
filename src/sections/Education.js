import React from "react";
import EduCard from "../components/EduCard";
import education from "../EducationIndex";

const Education = () => {
  return (
    <div id="education">
      <div className='text-center text-5xl mt-24 font-bold '>Education</div>
      <div>
        {education.map((eduIndex) => (
          <EduCard key={eduIndex.key} image={eduIndex.image} name={eduIndex.name} course={eduIndex.course} duration={eduIndex.duration} description={eduIndex.desciption} />
        )).reverse()}
      </div>
    </div>
  );
};

export default Education;
