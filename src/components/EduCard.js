import React from "react";
import { Image } from "@chakra-ui/react";

const EduCard = (props) => {
  return (
    <div className="w-3/4  m-auto   mt-12  border-light border-2  rounded-2xl bg-black lg:w-1/2">
      <div className="flex mt-3 ml-4 ">
        <Image
          className="rounded-2xl"
          boxSize="75px"
          objectFit="cover"
          src={props.image}
          alt="Dan Abramov"
        />

        <div className="ml-2 p-3">
          <div className="text-xl text-gray-400 font-bold">{props.name}</div>
          <div className="text-lg text-gray-500">{props.course}</div>
          <div className="text-sm text-gray-600">{props.duration}</div>
        </div>
      </div>
      <div className="text-lg text-gray-400 ml-4 p-4">{props.description}</div>
    </div>
  );
};

export default EduCard;
