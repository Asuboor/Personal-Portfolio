import React from "react";
import { BiLogoReact } from "react-icons/bi";

const SkillsTech = (props) => {
  return (
    <div className=" flex text-center  border-white border-2 m-auto rounded-md	p-1  text-md hover:bg-[#FFF5EE] hover:text-black 	">
      {props.tech}
    </div>
  );
};

export default SkillsTech;
