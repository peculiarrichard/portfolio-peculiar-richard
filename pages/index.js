import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import grid from "../public/assests/grid.png";
import Pagination from "../components/Pagination";
import { useState } from "react";
import { paginate } from "@/components/paginate";
import imgg from "../public/assests/imgg.png";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

function Home({ repository }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const paginatedPosts = paginate(repository, currentPage, pageSize);
  console.log(paginatedPosts);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div>
        <Head>
          <title>Peculiar Richard</title>
          <link rel="icon" href=""></link>
        </Head>
      </div>
      {/* navbar */}

      <Navbar />
      <div className="  border bg-hero sm:rounded-b-xl rounded-b-2xl bg-cover bg-no-repeat md:h-full h-128 lg:h-130 w-full bg-local sm:h-full bg-blend-darken">
        <div className="mx-12 my-2 p-4 mb-0 pb-0 flex sm:flex-col sm:m-4 md:mb-0">
          <div className="flex flex-col w-1/2 sm:w-full sm:justify-center sm:items-center mr-6 pr-6 pl-2">
            <h3 className="font-sofia text-2xl pb-5 text-white capitalize">
              Peculiar Richard
            </h3>
            <h1
              data-aos="zoom-in-up"
              className="text-5xl sm:text-3xl pb-6 font-black sm:text-center md:text-3xl text-white">
              Software Engineer && Marketer...
            </h1>
            <p className="pb-5 text-ellipsis sm:text-center sm:font-normal text-white md:text-sm md:w-80">
              i build frontend and decentralized apps. when I am not writing
              codes, I am doing growth and marketing. i promise you, I am not a
              workerholic, I also love to travel, read novels, and play board
              games. but who cares if I am? as long as I get things done 😉
            </p>
            <p className="pb-5 font-extrabold text-xl sm:text-center text-white md:text-sm">
              frontend engineer || web3 developer
            </p>
            <div className="flex gap-4 pt-5">
              <button className="w-32 sm:w-28 h-10 rounded-xl bg-purple animate-pulse">
                <Link
                  href="/contact"
                  className="text-white font-bold sm:font-normal sm:text-sm">
                  contact me
                </Link>
              </button>
              <button className="w-36 sm:w-30 h-10 rounded-xl bg-white animate-pulse">
                <Link
                  href="https://open.spotify.com/playlist/1kLrmMEkUkmQRhuq4C00wb?si=c393805af49d43c9"
                  target="_blank"
                  className="font-bold sm:font-normal sm:text-sm">
                  {" "}
                  fav playlist 🎵
                </Link>
              </button>
            </div>
          </div>
          <Image
            data-aos="fade-up"
            src={grid}
            alt=""
            className="w-2/5 m-10 mb-0 mt-8 h-2/6 rounded-lg sm:self-center sm:justify-self-center sm:w-80 md:w-80"></Image>
        </div>
        <div className=" flex gap-6 justify-end mr-36 mt-2 sm:justify-center sm:m-2 md:justify-start md:mb-2 md:ml-20">
          <Link href="https://github.com/peculiarrichard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-5 md:w-5 mb-2"
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link href="https://twitter.com/peculiarichard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-5 md:w-5 mb-2"
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/peculiar-richard-b82062b1/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 md:h-5 md:w-5 mb-2 "
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* skills section */}
      <div className="flex flex-col m-12 sm:m-4 p-4">
        <h1 className="text-3xl sm:text-2xl font-black mb-2 sm:mb-4 sm:mt-0">
          Skills...
        </h1>
        <div className="flex sm:flex-col md:flex-col gap-6 justify-around items-center">
          <div
            data-aos="zoom-in"
            className="grid grid-cols-3 gap-4 w-8/12 sm:grid-cols-2 md:grid-cols-2 md:w-full sm:w-full justify-start sm:justify-center text-sm">
            <table className="w-60 bg-purple rounded-2xl sm:w-32 m-6 sm:m-0 text-white shadow-xl">
              <thead>
                <tr className="">
                  <th className="border-b-2 text-start  px-4">languages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-0 px-4 py-2 leading-6 ">
                    javascript <br></br> solidity <br></br>python <br></br>
                    typescript
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-60 sm:w-32 shadow-2xl rounded-2xl m-6 sm:m-0">
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
            <table className="w-60 sm:w-32 rounded-2xl shadow-2xl bg-purple text-white m-6 sm:m-0">
              <thead>
                <tr>
                  <th className="border-b-2 text-start  px-4">stylesheets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" border-t-0 px-4 py-2 leading-6 ">
                    css <br></br> sass <br></br>tailwind <br></br>styled-
                    components <br></br>bootstrap
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-60 shadow-2xl rounded-2xl sm:w-32 m-6 sm:m-0 ">
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
            <table className="w-60 rounded-2xl shadow-2xl bg-purple text-white sm:w-32 m-6 sm:m-0">
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
            <table className="w-60 rounded-2xl shadow-2xl  sm:w-32 m-6 sm:m-0">
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

      {/* projects  */}
      <div className="flex flex-col m-12 p-4 sm:m-4">
        <div className="mb-5">
          <h1 className="text-3xl font-black sm:text-2xl">I have worked on...</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 content-center m-auto">
          {paginatedPosts.map((repo) => {
            return (
              <div
                key={repo.id}
                className="flex flex-col hover:translate-y-1 hover:scale-105 duration-300 justify-center items-center gap-3 p-6 h-96 rounded-xl shadow-xl sm:mb-6 sm:mt-1 md:m-4 lg:m-4 bg-pink w-129 md:w-125 sm:w-full sm:h-80">
                <h3 className="font-bold text-xl text-center">
                  project name: {repo.name}
                </h3>
                <p className="text-sm text-justify">{repo.description}</p>
                {repo.language !== null ? (
                  <h3 className="">tool used: {repo.language}</h3>
                ) : (
                  <div></div>
                )}

                <div className="flex gap-2">
                  <a href={repo.svn_url} target="_blank" rel="noreferrer">
                    <button className="bg-purple text-white p-2 rounded-lg text-sm hover:bg-moove">
                      source code
                    </button>
                  </a>
                  {repo.homepage !== null && repo.homepage !== "" ? (
                    <a
                      href={`https://${repo.homepage}`}
                      target="_blank"
                      rel="noreferrer">
                      <button className="bg-white p-2 rounded-lg text-sm border border-purple hover:bg-slate hover:text-white">
                        view site
                      </button>
                    </a>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        repos={repository.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}></Pagination>

      {/* about me session */}

      <div className="flex flex-col m-12 p-4 sm:m-4 h-full">
        <div className="mb-5">
          <h1 className="text-3xl font-black sm:text-2xl">about me...</h1>
        </div>
        <div className="flex sm:flex-col justify-center items-center gap-4 mt-2 sm:mb-2 mb-8">
          <Image
            src={imgg}
            alt="about-me"
            className="rounded-full sm:w-60 w-1/4 md:self-start lg:self-start"></Image>
          <div className="flex flex-col lg:w-3/4 md:w-3/4">
            <h2 className="text-lg font-bold m-1">
              I can work with, and for you...
            </h2>
            <p className="text-justify sm:text-sm m-1 text-lg lowercase">
              i enjoy converting ideas into real life products. As a frontend
              developer, I have the skills and expertise to create responsive,
              user-friendly applications that not only look great but also
              function flawlessly. I specialize in CSS, JavaScript, React, and
              Next, and I have a strong understanding of design principles,
              including typography, color theory, and layout.
              <br></br> <br></br>I am also a solidity developer and is able to
              create secure and efficient smart contracts that can power your
              decentralized applications. I specialize in Solidity, Ethereum,
              and other blockchain technologies, and I have a strong
              understanding of web3 best practices. <br></br>
              <br></br> In addition to my technical skills, I am a great
              communicator and collaborator. I can work closely with you to
              ensure that your vision is reflected in the final product, and I am
              always willing to make adjustments and changes as needed. I am also
              highly organized and detail-oriented, which means that I will ensure
              that every element of your product is pixel-perfect and optimized
              for performance.
            </p>
            <h3 className="m-1 font-black text-sm">want to know more?</h3>
            {/* <p className="m-1 italic sm:text-sm">i'm just a dm away</p> */}
          </div>
        </div>
        <div>
          <Link href="/contact" className="flex">
            <button className="bg-purple p-4 text-white rounded-2xl w-48 mb-2  m-auto sm:text-sm animate-bounce hover:bg-slate">
              contact me
            </button>
          </Link>
        </div>
      </div>
      <Experience></Experience>
      <Footer></Footer>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const response = await fetch(
    "https://api.github.com/users/peculiarrichard/repos"
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      repository: data,
    },
    revalidate: 10,
  };
}
