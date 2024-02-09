import React from "react";
import SkillsTech from "./SkillsTech";
import frontend from "../FrontendIndex";
import backend from "../BackendIndex";
import devops from "../DevopsIndex";
import others from "../OtherIndex";

const SkillCard = (props) => {
  return (
    <>
      <div className="flex flex-col  border-light border-2  rounded-2xl bg-black lg:w-1/3 w-auto m-auto ">
        <div className="m-auto p-3 text-3xl	text-center ">Frontend</div>

        <div className="m-auto flex flex-wrap-reverse gap-4 p-6 text-xl ">
          {frontend.map((frontendItem) => (
            <SkillsTech key={frontendItem.key} tech={frontendItem.tech} />
          ))}
        </div>
      </div>
      <div className="flex flex-col border-light border-2 rounded-2xl bg-black lg:w-1/3 w-auto m-auto mt-6">
        <div className="m-auto p-3 text-3xl	text-center ">Backend</div>

        <div className=" flex flex-wrap-reverse gap-4 p-6 text-xl">
          {backend.map((backendItem) => (
            <SkillsTech key={backendItem.key} tech={backendItem.tech} />
          ))}
        </div>
      </div>
      <div className="flex flex-col  border-light border-2  rounded-2xl bg-black lg:w-1/3 w-auto m-auto mt-6">
        <div className="m-auto p-3 text-3xl	text-center ">Devops</div>

        <div className="m-auto flex flex-wrap-reverse gap-4 p-6 text-xl">
          {devops.map((otherItem) => (
            <SkillsTech key={otherItem.key} tech={otherItem.tech} />
          ))}
        </div>
      </div>
      <div className="flex flex-col  border-light border-2  rounded-2xl bg-black lg:w-1/3 w-auto m-auto mt-6">
        <div className="m-auto p-3 text-3xl	text-center ">Others</div>

        <div className="m-auto flex flex-wrap-reverse gap-4 p-6 text-xl">
          {others.map((otherItem) => (
            <SkillsTech key={otherItem.key} tech={otherItem.tech} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillCard;
