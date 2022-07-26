import React, { Fragment } from "react";
import Button from "./Button";
import MidBanner from "../assets/MidBanner.svg";
import Banner from "../assets/banner.svg";
import Banner2 from "../assets/banner-2.svg";
import Gambar1 from "../assets/Gambar-1.svg";
import Gambar2 from "../assets/Gambar-2.svg";
import Gambar3 from "../assets/Gambar-3.svg";
import Gambar4 from "../assets/Gambar-4.svg";
import Gambar5 from "../assets/content-bottom.svg";
import Header from "./Header";
import Footer from "./Footer";

function Content() {
  const bgImage1 = {
    backgroundImage: `url("${MidBanner}")`,
    backgroundSize: "cover",
  };

  return (
    <div className="bg-[#404eed]">
      {/* <header className="bg-[#5865F2] lg:py-5 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap mx-auto lg:text-center">
          <div>
            <div className="font-bold text-white lg:font-bold lg:text-7xl lg:text-center text-4xl my-5">
              <h1 className="lg:text-center">IMAGINE A PLACE...</h1>
            </div>

            <div className="lg:mb-5 text-white lg:text-xl lg:px-60 ">
              <p>
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of friends
                can spend time together. A place that makes it easy to talk
                every day and hang out more often.
              </p>
            </div>

            <div>
              <div className="lg:text-center px-5 py-2 lg:px-5 lg:py-4 lg:mr-2 text-center lg:inline-block mb-5 rounded-full bg-white text-black">
                <Button>
                  <ion-icon name="download-outline"></ion-icon> Download for
                  Windows
                </Button>
              </div>
              <div className="lg:text-center lg:ml-2 text-center lg:inline-block  px-5 py-2 lg:px-5 lg:py-4 mb-5 rounded-full bg-black text-white">
                <Button>Open Discord in you browser</Button>
              </div>
            </div>

            <div className=" top-16 left-0  lg:object-cover ">
              <img className="" src={MidBanner} alt="Banner" />
              <img className="lg:absolute lg:bottom-0 lg:left-52 lg:block lg:h-auto lg:w-auto lg:-ml-96" src={Banner} alt="Banner" />
              <img className="lg:block lg:bottom-0 lg:left-96 lg:ml-96" src={Banner2} alt="Banner" />
            </div>
          </div>
        </div>
      </header> */}
      <Header></Header>

      <div className="relative bg-[#404eed] overflow-hidden flex flex-col center min-h-[626px] pb-0 w-full grid-cols-12 ">
        <div className=" mx-auto w-full max-w-[1260px] px-40 pt-[60px] pb-[120px]  box-border grid grid-cols-12 gap-x-[20px] gap-y-0 p-10">
          <div className="col-start-2 col-end-[col-span-8] text-center text-white z-10">
            <div className="mb-2">
              <h1 className="text-6xl font-extrabold uppercase">
                IMAGINE A PLACE...
              </h1>
              <div className="mt-10">
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of friends
                can spend time together. A place that makes it easy to talk
                every day and hang out more often.
              </div>
            </div>

            <div className="flex flex-wrap text-center justify-center">
              <div className="cursor-pointer rounded-[28px] mr-6 mt-6 inline-flex text-center bg-white px-8 font-medium leading-[24px] py-4 text-black box-border hover:text-blue-600 hover:fill-blue-600 fill-black">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="mr-2 "
                >
                  <g>
                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                    <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                  </g>
                </svg>
                Download for Windows
              </div>
              <div className="cursor-pointer rounded-full mt-6 inline-flex text-center bg-[#23272a] px-5 py-4 text-white box-border">
                <Button>Open Discord in your browser</Button>
              </div>
            </div>
          </div>

          <div className="md:absolute md:top-0 md:left-0 z-0 md:w-full md:h-full">
            <div className=" md:top-auto md:bottom-0 block w-auto absolute ml-[-1280px] left-1/2">
              <img src={MidBanner} alt="banner" />
            </div>

            <div className="absolute bottom-0 left-1/2 block h-auto w-auto max-w-none ml-[-1030px] transform-none">
              <img src={Banner} alt="banner" />
            </div>

            <div className="absolute w-full bottom-0 left-1/2 block ml-[370px] ">
              <img src={Banner2} alt="banner" />
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white px-2 lg:py-40 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container  flex flex-wrap mx-auto">
          <div className="w-full text-black lg:-mr-20 lg:w-2/3">
            <img className="" src={Gambar1} alt="Gambar1" />
          </div>

          <div className="w-full lg:pl-4 lg:pt-6 lg:w-1/3 md:text-blue-600  text-green-500 sm:text-yellow-200">
            <h2 className="font-bold lg:text-5xl text-xl mb-5">
              Create an invite-only place where you belong{" "}
            </h2>
            <p className="mb-5">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </header>

      <header className="bg-[#F6F6F6] lg:py-40 px-2 lg:pt-52 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap flex-row lg:flex-row-reverse my-auto mx-auto">
          <div className="w-full text-black  lg:pl-40 lg:w-2/3">
            <img className="" src={Gambar2} alt="Gambar2" />
          </div>

          <div className="w-full lg:pl-4 lg:pt-6 lg:w-1/3 ">
            <h2 className="font-bold lg:text-5xl text-xl mb-5">
              Where hanging out is easy
            </h2>
            <p className="mb-5">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
        </div>
      </header>

      <header className="bg-white px-2 lg:py-40 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container  flex flex-wrap mx-auto">
          <div className="w-full text-black lg:-mr-20 lg:w-2/3">
            <img className="" src={Gambar3} alt="Gambar3" />
          </div>

          <div className="w-full lg:pl-4 lg:pt-6 lg:w-1/3 ">
            <h2 className="font-bold lg:text-5xl text-xl mb-5">
              From few to a fandom
            </h2>
            <p className="mb-5">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </div>
      </header>

      <header className="bg-[#F6F6F6] px-2 lg:py-40 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap mx-auto ">
          <div className="w-full text-center lg:pl-4 lg:pt-6 ">
            <h2 className="font-bold lg:text-5xl text-2xl mt-5 mb-5">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p className="mb-5 lg:px-44">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share
            </p>
          </div>

          <div className="w-full text-black">
            <div className="">
              <img
                className="lg:ml-auto lg:mr-auto"
                src={Gambar4}
                alt="Gambar4"
              />
            </div>
          </div>
        </div>

        <div className="pt-[80px] w-full flex flex-col">
          <div className="mb-[120px] flex justify-center flex-col items-center flex-wrap">
            <div className="relative z-0 w-full flex justify-center">
              <img src={Gambar5}></img>
            </div>
            <h2 className="text-center font-bold text-[32px] leading-[120%] lg:text-4xl mb-5 z-10">
              Ready to start your journey?
            </h2>
            <div className="cursor-pointer w-auto rounded-[28px] mr-6 mt-6 inline-flex text-center bg-[#5865f2] px-8 font-medium leading-[24px] py-4 text-white box-border fill-white">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="mr-2 "
                >
                  <g>
                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                    <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                  </g>
                </svg>
                Download for Windows
              </div>
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
}

export default Content;
