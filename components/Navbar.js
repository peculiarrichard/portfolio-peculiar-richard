import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [menu, showMenu] = useState(false);
  const showcvMenu = () => {
    showMenu(!menu);
  };

  return (
    <nav className="flex items-center flex-wrap rounded-b-xl">
      <Link
        href="/"
        className="md:hidden lg:hidden sm:inline-flex sm:items-center sm:font-mono m-4 font-black capitalize">
        Peculiar
      </Link>
      <button
        className="inline-flex p-3 rounded md:hidden lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}>
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="purple"
            class="bi bi-x"
            viewBox="0 0 16 16">
            {" "}
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="purple"
            stroke="purple"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        } w-full md:inline-flex md:flex-grow md:w-auto lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className="w-full flex flex-row gap-7 justify-center items-center h-20 text-lg rounded-b-2xl p-2 font-bold sm:inline-flex sm:flex-col sm:fixed sm:h-64 sm:items-start sm:font-normal sm:gap-2 sm:text-sm sm:scroll-auto sm:animate-open-menu sm:bg-pink">
          <Link href="/">home</Link>
          <Link href="/marketer">marketing</Link>
          <Link href="/contact">say hello</Link>
          <div className="relative">
            <button onClick={showcvMenu}>download CV +</button>
            {menu ? (
              <div className="absolute shadow-2xl h-25 sm:h-full lg:bg-white md:bg-white flex flex-col items-start p-2 text-sm gap-4 border-gray-300 bg-slate-100 rounded-lg  w-60 ml-3.5 mt-2.5 sm:text-xs">
                <Link href="https://drive.google.com/file/d/1CwKbxWYN-MW5ZB4RPwtZJAZLSIlAWAm8/view?usp=sharing" target="_blank" className="">
                  for software dev
                </Link>
                <Link href="#" className="">
                  for marketing
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
