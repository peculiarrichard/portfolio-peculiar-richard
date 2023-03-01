import React from "react";
import works from "./work";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex flex-col mx-12 mb-6">
      <h1 className="text-3xl font-black sm:text-2xl mb-9 mx-6 sm:mx-0 sm:mb-2 sm:mt-2">
        work experience...
      </h1>
      {works.map((work) => {
        console.log(work);
        return (
          <div
            key={work.id}
            className="mb-2 sm:mb-6 mt-2 flex gap-12 sm:gap-2 sm:flex-col m-6 sm:mx-0">
            <Image
              src={work.logo}
              className="self-start hover:scale-105 duration-300"
              style={{ width: "auto", height: "auto" }}
              width="50"
              height="50"
              alt="logo"></Image>
            <div className="flex flex-col gap-2 text-justify">
              <h2 className="font-black text-2xl text-purple">{work.title}</h2>
              <h3 className="text-base font-semibold capitalize">
                {work.name}: {work.jobstyle}
              </h3>
              <p className="animate-pulse">{work.date}</p>
              <h3 className="sm:text-sm">{work.respon}</h3>
              <p className="text-base">skills: {work.skills}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
