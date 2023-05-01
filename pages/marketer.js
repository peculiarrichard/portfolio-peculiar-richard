import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import img from "../public/assests/imgg.png";
import Link from "next/link";
import meeting from "../public/assests/meeting.jpg";
import picture from "../public/assests/picture.jpg";
import good from "../public/assests/good.jpg";
import contents from "@/components/content";

export default function Marketer() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-12 min-h-screen grow">
        <div className="flex sm:flex-col justify-between items-center p-2 mb-6">
          <div className="flex flex-col gap-4 justify-start mb-4 w-1/2 sm:w-full m-6">
            <h1 className="text-2xl font-sofia font-black sm:text-center capitalize">
              more than full-stack marketing
            </h1>
            <h1 className="text-3xl font-bold sm:text-2xl sm:text-center sm:w-full">
              creating data driven strategies that sytematically and
              consistently <br></br>advance startups towards their strategic
              objectives
            </h1>
          </div>
          <Image src={img} className="w-128 m-auto" alt="image"></Image>
        </div>
        <Link href="/contact" className="flex">
          <button className="bg-purple p-4 text-white rounded-2xl w-40 mb-2  m-auto sm:text-sm animate-bounce hover:bg-slate">
            say hello
          </button>
        </Link>
        <div className="flex flex-col justify-center items-start sm:my-0">
          <h1 className="text-3xl font-bold mb-10 mt-4 sm:text-2xl m-6 sm:ml-0 capitalize sm:text-center">
            How i can help you with growth for your startup
          </h1>
          <div className="flex justify-evenly w-full my-6 sm:my-2 sm:flex-col">
            <div className="flex flex-col items-center p-2">
              <Image
                src={meeting}
                className="w-72 h-60 sm:h-48 rounded-t-xl sm:w-full md:w-60"
                alt="meeting"></Image>
              <div className="flex flex-col w-72 sm:w-full md:w-60 bg-purple sm:text-sm text-white p-2 items-center rounded-b-lg">
                <h2 className="text-xl sm:text-base font-bold capitalize">
                  join your growth team
                </h2>
                <p className="text-sm text-justify p-2">
                  i can work with your team on a full-time basis and together we
                  would explore and enhance the entire end-to-end user journey.
                  How would sitting back and watching qualified leads roll in or
                  placing your startup in front of the right audience make you
                  feel?
                </p>
                <Link href="/contact" className="m-auto my-4">
                  <button className=" bg-pink p-3 rounded-3xl text-black animate-pulse">
                    i want this
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center p-2">
              <Image
                src={picture}
                className="w-72 h-60 sm:h-48 rounded-t-xl md:w-60 sm:w-full"
                alt="meeting"></Image>
              <div className="flex flex-col w-72 sm:w-full md:w-60 bg-purple sm:text-sm text-white p-2 items-center rounded-b-lg">
                <h2 className="text-xl sm:text-base font-bold capitalize">
                  independent consultations
                </h2>
                <p className="text-sm text-justify p-2 ">
                  i can help you make better growth decisions, shape new
                  strategies, inform potential changes, and identify ineffective
                  marketing processes and procedures your company should ditch.
                  i will be hands-on, using my expertise to actively complete
                  tasks on behalf on your startup.
                </p>
                <Link href="/contact" className="m-auto my-4">
                  <button className=" bg-pink p-3 rounded-3xl text-black animate-pulse">
                    i want this
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center p-2">
              <Image
                src={good}
                className="w-72 h-60 sm:h-48 rounded-t-xl md:w-60 sm:w-full"
                alt="meeting"></Image>
              <div className="flex flex-col w-72 sm:w-full md:w-60 bg-purple sm:text-sm text-white p-2 items-center rounded-b-lg">
                <h2 className="text-xl sm:text-base font-bold capitalize">
                  coach your growth team
                </h2>
                <p className="text-sm text-justify p-2">
                  if you already have a team, that is totally fine. I can train
                  and guide them on top-notch growth practices to take your
                  startup to the next level and achieve your set targets. the
                  goal is to increase their awareness of the best tools and
                  strategies while ensuring efficient implementation.
                </p>
                <Link href="/contact" className="m-auto my-4">
                  <button className=" bg-pink p-3 rounded-3xl text-black animate-pulse">
                    i want this
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-10 mt-4 sm:text-2xl m-6 sm:ml-0">
          experience so far...
        </h1>
        {contents.map((content) => {
          console.log(content);
          return (
            <div
              key={content.id}
              className="mb-2 sm:mb-6 mt-2 flex gap-12 sm:gap-2 sm:flex-col m-6 sm:ml-0 sm:mr-0">
              <Image
                src={content.logo}
                className="self-start hover:scale-105 duration-300"
                style={{ width: "auto", height: "auto" }}
                width="40"
                height="50"
                alt="logo"></Image>
              <div className="flex flex-col gap-2 text-justify">
                <h2 className="font-black text-2xl text-purple capitalize">
                  {content.title}
                </h2>
                <h3 className="text-base font-semibold capitalize">
                  {content.name}: {content.jobstyle}
                </h3>
                <p className="animate-pulse">{content.date}</p>
                <h3 className="sm:text-sm">{content.respon}</h3>
                <p className="text-base">skills: {content.skills}</p>
              </div>
            </div>
          );
        })}
        <Link href="/contact" className="flex">
          <button className="bg-purple p-4 text-white rounded-2xl w-40 mb-2 mt-4 m-auto sm:text-sm animate-bounce hover:bg-slate">
            say hello
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
