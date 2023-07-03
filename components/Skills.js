import React from "react";

const Skills = () => {
  return (
    <div className="w-[90%] flex flex-col mt-12 sm:mt-4 m-auto mb-20">
      <h1 className="text-3xl sm:text-2xl font-black mb-2 sm:mb-4 sm:mt-0 capitalize">
        Skills...
      </h1>
      <div className="flex sm:flex-col md:flex-col gap-6 justify-between items-center">
        <div className="grid grid-cols-3 gap-4 w-8/12 sm:grid-cols-2 md:grid-cols-2 md:w-full sm:w-full justify-start sm:justify-center text-[1rem]">
          <table
            className="w-60 bg-purple rounded-2xl sm:w-32 mt-6 sm:mt-0 text-white shadow-xl h-[10rem] items-center justify-center"
            data-aos="fade-right">
            <thead>
              <tr className="">
                <th className="border-b-2 text-start  px-4">Languages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t-0 px-4 py-2 leading-6 ">
                  Javascript <br></br> Solidity <br></br>
                  Typescript
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-60 sm:w-32 shadow-2xl rounded-2xl mt-6 sm:mt-0 h-[10rem]">
            <thead>
              <tr>
                <th className="border-b-2 text-start px-4">Frameworks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" border-t-0 px-4 py-2 leading-6 ">
                  React <br></br> NextJS <br></br>VueJS <br></br>Ethers JS{" "}
                  <br></br>Web3.js
                </td>
              </tr>
            </tbody>
          </table>
          <table
            className="w-60 sm:w-32 rounded-2xl shadow-2xl bg-purple text-white mt-6 sm:mt-0 h-[10rem]"
            data-aos="fade-up-right">
            <thead>
              <tr>
                <th className="border-b-2 text-start  px-4">Stylesheets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" border-t-0 px-4 py-2 leading-6 ">
                  Css <br></br> Sass <br></br>Tailwind <br></br>Bootstrap
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-60 shadow-2xl rounded-2xl sm:w-32 mt-6 sm:mt-0 h-[10rem] ">
            <thead>
              <tr>
                <th className="border-b-2 text-start  px-4">BAAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" border-t-0 px-4 py-2 leading-6  ">
                  AWS <br></br> Firebase <br></br> Supabase <br></br>Hasura{" "}
                  <br></br>Node Js
                </td>
              </tr>
            </tbody>
          </table>
          <table
            className="w-60 rounded-2xl shadow-2xl bg-purple text-white sm:w-32 mt-6 sm:mt-0 h-[10rem]"
            data-aos="fade-in">
            <thead>
              <tr>
                <th className="border-b-2 text-start px-4">Markup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t-0 px-4 py-2 leading-6">
                  HTML <br></br> XML <br></br>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-60 rounded-2xl shadow-2xl sm:w-32 mt-6 sm:mt-0 h-[10rem]">
            <thead>
              <tr>
                <th className="border-b-2 text-start px-4">Others</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t-0 px-4 py-2 leading-6  ">
                  Tech writing <br></br> GitHub <br></br> Debugging
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-60 h-40 bg-pink rounded-3xl justify-self-end animate-open-skills"></div>
      </div>
    </div>
  );
};

export default Skills;
