import React from "react";
import ExpCard from "../components/ExpCard";
import experience from "../ExperienceIndex";

const Experience = () => {
  return (
    <div className="mt-4" id="experience">
      <div className="text-center text-5xl mt-24 font-bold">Experience</div>
      <div className="mt-20 p-4">
        {experience.map((expItem) => (
          <ExpCard
            key={expItem.key}
            image={expItem.image}
            role={expItem.role}
            company={expItem.company}
            period={expItem.period}
            description={expItem.description}
            skills={expItem.skills.map((item, index) => (
              <>
              <div className="border-2  rounded-md px-2 ">
              <li key={index}>{item}</li>
              </div>
              </>
            ))}
          />
        )).reverse()}
      </div>
    </div>
  );
};

export default Experience;
