import React from "react";
import Typing from "../components/Typing";
import { Button } from "@chakra-ui/react";
import ProfileImage from "../components/ProfileImage";

const About = () => {
  return (
    <div
      className=" p-3  flex flex-col-reverse lg:flex-row place-content-between font-mono mt-5 "
      id="about"
    >
      <div className="flex flex-col w-2/3 m-auto ">
        <div className="text-4xl font-bold text-center lg:text-left pt-2">
          Hi, I am <br />
          <p className="text-[#007FFF]">Abdul Suboor </p>
        </div>
        <div className="font-semibold text-xl mt-4 text-light  leading-normal ">
          <Typing />
        </div>
        <div className="text-xl mt-3">
          Currently working as a Technical Support Executive at PrimeRx.io,
          combining technical expertise with strong problem-solving skills to
          deliver reliable solutions and ensure smooth technical operations.
          Experienced across software development, cloud infrastructure, and
          DevOps practices, with a focus on maintaining performance, resolving
          issues, and supporting clients effectively. Proficient in C++, Java,
          Python, and modern web technologies including HTML, CSS, JavaScript,
          Node.js, React, and Express. Skilled with Docker, Jenkins, Kubernetes,
          AWS, and database management using MongoDB and MySQL. Passionate about
          continuous learning and innovation, dedicated to optimizing systems
          and contributing to efficient, scalable, and impactful technology
          solutions.
        </div>
        <div className="">
          {" "}
          <Button className="m-4 bg-light w-32 " variant="outline">
            <a
              href="https://drive.google.com/file/d/15nu2khDMjLj2qbE0fyQ-LCXZ9rPQsJ35/view?usp=sharing"
              className="w-full"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="w-auto flex justify-center   m-auto ">
        <ProfileImage />
      </div>
    </div>
  );
};

export default About;
