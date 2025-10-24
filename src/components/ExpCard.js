import React from "react";
import { Image } from "@chakra-ui/react";


const ExpCard = (props) => {
  return ( 
    <div className="w-auto  m-auto  mb-11 p-2  border-light border-2  rounded-2xl  lg:w-1/2">
      <div className="flex mt-3 ml-4 ">
        <Image
          className="rounded-2xl"
          boxSize="75px"
          objectFit="cover"
          src={props.image}
          alt="Dan Abramov"
        />

        <div className="ml-4 p-3">
          <div className="text-xl text-gray-400 font-bold">{props.role}</div>
          <div className="text-lg text-gray-500">{props.company}</div>
          <div className="text-sm text-gray-600">{props.period}</div>
        </div>
      </div>
      <div className="text-lg text-gray-400 ml-4">{props.description}</div>
      <div className="flex flex-wrap p-3 gap-5 text-lg text-gray-400 ml-4">
        Skills :
        {props.skills}
      </div>
    </div>
  );
};

export default ExpCard;
