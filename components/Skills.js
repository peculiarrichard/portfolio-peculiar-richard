import React from 'react'

const Skills = () => {
  return (
    


<div className="flex flex-col m-12 sm:m-4 p-4">
        <h1 className="text-3xl sm:text-2xl font-black mb-2 sm:mb-4 sm:mt-0 capitalize">
          Skills...
        </h1>
        <div className="flex sm:flex-col md:flex-col gap-6 justify-around items-center">
          <div
            data-aos="zoom-in"
            className="grid grid-cols-3 gap-4 w-8/12 sm:grid-cols-2 md:grid-cols-2 md:w-full sm:w-full justify-start sm:justify-center text-sm">
            <table className="w-60 bg-purple rounded-2xl sm:w-32 m-6 sm:m-0 text-white shadow-xl h-[10rem] items-center justify-center">
              <thead>
                <tr className="">
                  <th className="border-b-2 text-start  px-4">languages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-0 px-4 py-2 leading-6 ">
                    javascript <br></br> solidity <br></br>
                    typescript
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-60 sm:w-32 shadow-2xl rounded-2xl m-6 sm:m-0 h-[10rem]">
              <thead>
                <tr>
                  <th className="border-b-2 text-start px-4">frameworks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" border-t-0 px-4 py-2 leading-6 ">
                    react <br></br> next <br></br>vue <br></br>truffle suite{" "}
                    <br></br>web3.js
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-60 sm:w-32 rounded-2xl shadow-2xl bg-purple text-white m-6 sm:m-0 h-[10rem]">
              <thead>
                <tr>
                  <th className="border-b-2 text-start  px-4">stylesheets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" border-t-0 px-4 py-2 leading-6 ">
                    css <br></br> sass <br></br>tailwind <br></br>bootstrap
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-60 shadow-2xl rounded-2xl sm:w-32 m-6 sm:m-0 h-[10rem] ">
              <thead>
                <tr>
                  <th className="border-b-2 text-start  px-4">tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" border-t-0 px-4 py-2 leading-6  ">
                    git <br></br> firebase <br></br> vercel <br></br>figma{" "}
                    <br></br>netlify
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-60 rounded-2xl shadow-2xl bg-purple text-white sm:w-32 m-6 sm:m-0 h-[10rem]">
              <thead>
                <tr>
                  <th className="border-b-2 text-start  px-4">markup</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-0 px-4 py-2 leading-6">
                    html <br></br> xml <br></br>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-60 rounded-2xl shadow-2xl  sm:w-32 m-6 sm:m-0 h-[10rem]">
              <thead>
                <tr>
                  <th className="border-b-2  text-start  px-4">others</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-0 px-4 py-2 leading-6  ">
                    tech writing <br></br> testing <br></br> debugging <br></br>
                    web dev-process
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-60 h-40 bg-pink rounded-3xl justify-self-end animate-open-skills"></div>
        </div>
      </div>
        )
}

export default Skills