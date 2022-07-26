import React, { Fragment } from "react";
import Button from "./Button";
import Banner from "../assets/banner.svg";
import Banner2 from "../assets/banner-2.svg";
import Gambar1 from "../assets/Gambar-1.svg";
import Gambar2 from "../assets/Gambar-2.svg";
import Gambar3 from "../assets/Gambar-3.svg";
import Gambar4 from "../assets/Gambar-4.svg";
import Content from "./Content";

function ContentSalah() {
  return (
   
        <div className=" bg-[#5865F2] pt-32">
           <div className="container flex flex-wrap center self-center mx-auto ">
          <div className="= px-5 lg:mb-10 lg:px-80 text-white">
            <h1 className="font-bold lg:text-7xl text-4xl lg:text-center mb-10">
              IMAGINE A PLACE...{" "}
            </h1>
            <p className="lg:text-center mb-5 lg:text-lg">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <div className="inline-block">
            <div className="lg:text-center text-center mb-5 rounded-full bg-white text-black">
              <Button>
                <ion-icon name="download-outline"></ion-icon> Download for
                Windows
              </Button>
            </div>
            <div className="lg:text-center text-center mb-5 rounded-full bg-black text-white">
               <Button>Open Discord in you browser</Button>
            </div>
            </div>
            
            
            {/* <div className="">
            <img className="w-72 md:w-4/5 lg:w-4/6" src={Banner} alt="Banner" />
          </div> */}
            <span className="lg:absolute lg:-left-60 lg:scale-125 lg:bottom-9">
              <div className="w-96 md:w-4/5">
                <img className="object-left-bottom" src={Banner} alt="Banner" />
              </div>
            </span>
            {/* <span className="lg:absolute lg:-right-60 lg:scale-125 lg:bottom-9">
              <div className="md:w-4/5">
                <img
                  className="object-right-bottom "
                  src={Banner2}
                  alt="Banner"
                />
              </div>
            </span> */}
          </div>
        </div>

        <div className="flex flex-wrap  bg-white h-screen lg:px-24 px-5 pt-20">
          <div className="w-full text-black lg:w-2/3">
            <div className="">
              <img className="" src={Gambar1} alt="Gambar1" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-4 lg:pt-6">
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




        <div className="flex flex-row lg:flex-row-reverse flex-wrap bg-[#F6F6F6] h-screen lg:px-24 px-5 pt-20">
          <div className="w-full text-black lg:pl-40 lg:w-2/3">
            <div className="">
              <img className="lg:object-right" src={Gambar2} alt="Gambar2" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:pt-12">
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









        <div className="flex flex-wrap bg-white h-screen lg:px-24 px-5 pt-20">
          <div className="w-full text-black lg:w-2/3">
            <div className="">
              <img className="" src={Gambar3} alt="Gambar3" />
            </div>
          </div>
          <div className="w-full lg:w-1/3  lg:pt-12">
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

        <div className="flex flex-wrap bg-[#F6F6F6] h-auto lg:pb-20 lg:text-center lg:px-24 px-5 pt-20">
          <div className="w-full">
            <h2 className="font-bold lg:text-5xl text-2xl mt-5 mb-5">
              RELIABLE TECH FOR STAYING CLOSE
            </h2>
            <p className="lg:px-44">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
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

            <div>
              <h2 className="font-bold text-4xl mb-5">
                Ready to start your journey?
              </h2>
            </div>
            <div className="text-center">
              <Button>
                <ion-icon name="download-outline"></ion-icon> Download for
                Windows
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ContentSalah;
