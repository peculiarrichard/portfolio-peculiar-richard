import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import grid from "../public/assests/grid.png";
import imgg from "../public/assests/imgg.png";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import projects from "@/data/projects";

function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Peculiar Richard | Portfolio</title>
          <link rel="icon" href=""></link>
        </Head>
      </div>
      {/* navbar */}

      <Navbar />
      <div className="bg-hero sm:rounded-b-xl rounded-b-2xl bg-cover bg-no-repeat md:h-full h-128 lg:h-130 w-full bg-local sm:h-full mb-20">
        <div className="w-[90%] my-2 flex sm:flex-col m-auto justify-between">
          <div className="flex flex-col w-1/2 sm:w-full sm:justify-center sm:items-center mt-8">
            <h3 className="font-sofia text-2xl pb-5 text-white capitalize">
              Peculiar Richard
            </h3>
            <h1
              data-aos="zoom-in-up"
              className="text-5xl sm:text-3xl mb-8 font-black sm:text-center md:text-3xl text-white capitalize">
              Software Engineer && Technical Writer...
            </h1>
            <p className="mb-5 text-ellipsis sm:text-center sm:font-normal text-white md:text-sm">
              I build frontend and decentralized apps. When I am not writing
              codes, I am writing articles about software development and web3.
              I promise you, I am not a workerholic, I also love to travel and
              play board games. But who cares if I am? as long as I get things
              done 😉
            </p>
            <p className="mb-5 font-extrabold text-xl sm:text-center text-white md:text-sm capitalize">
              Frontend engineer || Web3 developer
            </p>
            <div className="flex gap-4 mt-5">
              <button className="p-3 rounded-xl bg-purple animate-pulse">
                <Link
                  href="/contact"
                  className="p-3 text-white font-bold sm:font-normal sm:text-sm">
                  Contact me
                </Link>
              </button>
              <button className="p-3 rounded-xl bg-white animate-pulse">
                <Link
                  href="https://open.spotify.com/playlist/37i9dQZF1DXbqtyDNQsEFL?si=00f1bfaa6a334d30"
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
            alt="homeimg"
            className="w-2/5 mt-8 h-2/6 rounded-lg sm:self-center sm:justify-self-center sm:w-80 md:w-80"></Image>
        </div>
        <div className="w-[90%] m-auto flex gap-6 justify-end mt-6 sm:mt-2 sm:justify-center sm:m-2 md:justify-start md:mb-2 ">
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
      <Skills></Skills>

      {/* projects  */}
      <div className="flex flex-col mt-12 sm:mt-4 w-[90%] m-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black sm:text-2xl">Projects...</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 justify-start gap-5">
          {projects.map((repo) => {
            return (
              <div
                key={repo.id}
                className="flex flex-col hover:scale-105 duration-100 justify-center items-center p-2 h-[30rem] shadow-xl mb-6 sm:mt-1 bg-pink w-129 lg:w-[27rem] md:w-[20rem] sm:w-full sm:h-[95%] gap-2">
                <p className="-mt-6 bg-purple p-2 text-white text-[0.5rem] self-start rounded-3xl">
                  {repo.staus}
                </p>
                <h3 className="font-bold text-lg lg:text-xl text-center capitalize">
                  {repo.name}
                </h3>
                <Image
                  src={repo.img}
                  alt="img"
                  className="w-[90%] sm:w-[80%] sm:h-[8rem] "></Image>
                <p className="text-[0.8rem] text-justify w-[90%]">
                  {repo.description}
                </p>
                <h3 className="text-[0.8rem] capitalize font-semibold w-[90%]">
                  tools: {repo.tools}
                </h3>

                <div className="flex gap-2">
                  <a href={repo.github} target="_blank" rel="noreferrer">
                    <button className="bg-purple text-white p-2 rounded-lg text-[0.8rem] hover:bg-moove">
                      Source code
                    </button>
                  </a>
                  <a href={repo.website} target="_blank" rel="noreferrer">
                    <button className="bg-white p-2 rounded-lg text-[0.8rem] border border-purple hover:bg-slate hover:text-white">
                      View site
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 mt-8 w-[90%] font-extrabold m-auto">
        <Link
          href="https://github.com/peculiarrichard"
          className="text-center md:text-xl lg:text-xl animate-pulse">
          view more on github
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.3 17.275q-.3-.3-.288-.725t.313-.725L16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.3-.713t.3-.712q.3-.3.713-.3t.712.3L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.275t-.713-.3Z"
            className=""
          />
        </svg>
      </div>
      {/* about me session */}

      <div className="flex flex-col mt-12 sm:mt-10 h-full w-[90%] m-auto">
        <div className="mb-5">
          <h1 className="text-3xl font-black sm:text-2xl capitalize">
            about me...
          </h1>
        </div>
        <div className="flex sm:flex-col justify-center items-center gap-4 mt-2 sm:mb-2 mb-8">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold m-1">
              I can work with, and for you...
            </h2>
            <p className="text-justify sm:text-sm m-1 text-lg">
              I enjoy converting ideas into real life products. As a frontend
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
              ensure that your vision is reflected in the final product, and I
              am always willing to make adjustments and changes as needed. I am
              also highly organized and detail-oriented, which means that I will
              ensure that every element of your product is pixel-perfect and
              optimized for performance.
            </p>
            <h3 className="mt-4 font-black text-sm">want to know more?</h3>
          </div>
        </div>
        <div>
          <Link href="/contact" className="flex mt-4">
            <button className="bg-purple p-4 text-white rounded-2xl w-48 mb-2  m-auto sm:text-sm animate-bounce hover:bg-slate">
              contact me
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
