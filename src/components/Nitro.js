import React, { Fragment } from "react";
import Button from "./Button";
import iOS from "../assets/ios.svg";
import Card1 from "../assets/Card 1.svg";
import Card2 from "../assets/Card 2.svg";
import Card3 from "../assets/Card 3.svg";
import Card4 from "../assets/Card 4.svg";
import Card5 from "../assets/Card 5.png";
import Card6 from "../assets/Card 6.png";
import Linux from "../assets/Linux.svg";
import Android from "../assets/Android.svg";
import Nitros from "../assets/Nitro.svg";
import NitrosClassic from "../assets/Nitro Classic.svg";
import Card from "./Card";
import Header from "./Header";
function Nitro() {
  return (
    <Fragment>
      <Header></Header>
      <div className="relative">
        <div className=" bg-gradient-to-r from-[#00a295] via-[#26e8f4] to-[#3dcda7] w-full flex items-center flex-col">
          <nav></nav>
          <div className="container mt-[120px] mb-[176px] z-10 box-border grid grid-cols-12 p-[40px] gap-y-0 gap-x-[20px]">
            <div className="col-start-1 col-end-[span_6] relative">
              <img
                className="mx-0 mt-0 block w-[300px] "
                src={Nitros}
                alt="Gambar1"
              />
            </div>

            <div className="col-start-1 col-end-[_span_6] relative text-left text-white mt-[40px] text-[24px] leading-[140%]">
              Get a enhanced Discord experience for one low monthly cost.
              Upgrade your emoji, enjoy bigger file uploads, stand out in your
              favorite Discords, and more.
            </div>

            <div className="col-start-1 col-end-[span_6] flex flex-wrap mt-[40px]">
            <button className="mr-[42px] w-auto mb-[24px] inline-flex py-[16px] px-[32px] rounded-[28px] items-center justify-center shadow-slate-700 hover:shadow-2xl  bg-black text-white text-[20px] leading-6 font-medium cursor-pointer">
                $99.99 per year <div className="bg-[#5865f2] rounded-3xl py-0 px-2 ml-[10px] text-[12px] leading-6">16% off</div>
              </button>
              <button className=" w-auto mb-[24px] inline-flex py-[16px] px-[32px] rounded-[28px] items-center shadow-slate-700 hover:shadow-2xl justify-center bg-black text-white text-[20px] leading-6 font-medium cursor-pointer">
                $9.99 per month
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-full flex flex-col mx-auto items-center ">
        <div className=" pt-[120px] w-full grid box-border py-0 px-[40px] gap-x-20 gap-y-0 text-black grid-cols-12">
          <h2 className="col-span-12 text-center text-[40px] font-extrabold leading-[95%] uppercase">
            DISCORD NITRO ENHANCES YOUR ALL-IN-ONE DISCORD VOICE, VIDEO, AND
            TEXT CHAT.
          </h2>
          <div className="col-span-12 text-center text-[24px] leading-[140%] mt-[24px]">
            Check out the perks you'll get.
          </div>
        </div>

        <div className=" mt-[120px] gap-x-5 gap-y-5 w-full box-border grid grid-cols-12 p-[40px]">
        
          <Card  
            src={Card1}
            title="Better Emoji"
            text="Collect or make your own custom and animated emojis."
            color="bg-gradient-to-r from-[#00a295] via-[#26e8f4] to-[#3dcda7]"
          ></Card>

          <Card
            src={Card2}
            title="Personal Profile"
            text="Use an animated avatar and claim a custom tag."
            color="bg-gradient-to-r from-[#7196ff] via-[#4181ff] to-[#21f2ff]"
          ></Card>

          <Card
            src={Card3}
            title="Support a Server"
            text="Get 2 Server Boosts and 30% off extra Boosts."
            color="bg-gradient-to-r from-[#3e70ff] to-[#9a98ff]"
          ></Card>

          <Card
            src={Card4}
            title="Rep Your Support"
            text="Profile badge shows how long you've supported Discord."
            color="bg-gradient-to-r from-[#7e7bff] to-[#ff73fa]"
          ></Card>

          <Card
            src={Card5}
            title="Bigger Uploads"
            text="100MB upload size for high-quality file sharing."
            color="bg-gradient-to-r from-[#f837ee] to-[#ffcd4b]"
          ></Card>

          <Card
            src={Card6}
            title="HD Video"
            text="Hi-res video, screenshare, and Go Live streaming."
            color="bg-gradient-to-r from-[#ee6315] to-[#ffcd4b]"
          ></Card>
        </div>

        <div className="py-[120px] w-full grid grid-cols-12 gap-x-5 gap-y-0 px-[40px]">
          <h3 className="text-center text-black col-span-12 leading-[120%] font-medium text-[32px]">
            Doitdoitdoitdoitdoitdoit
          </h3>
          <button className="col-start-3 col-end-[span_4] inline-flex mt-[40px] py-[16px] px-[32px] rounded-[28px] justify-center bg-black shadow-slate-700 hover:shadow-2xl text-white text-[20px] leading-6 font-medium cursor-pointer">
            $99.99 per year <div className="bg-[#5865f2] rounded-3xl py-0 px-2 ml-[10px] text-[12px] leading-6">16% off</div>
          </button>
          <button className="col-span-4 col-end-auto mt-[40px] py-[16px] px-[32px] rounded-[28px] justify-center bg-black text-white text-[20px]  shadow-slate-700 hover:shadow-2xl leading-6 font-medium cursor-pointer">
            $9.99 per month
          </button>
      
        </div>
      </div>

      <div className="flex flex-col bg-[#7289da] relative text-white text-center pt-[120px] pb-[150px] w-full ">
        <div className="w-full containter grid grid-cols-12 gap-y-0 gap-x-5 py-0 px-[40px] ">
          <div className="col-start-7 col-end-[span_6]">
            <img
              className="w-[200px] "
              src={NitrosClassic}
              alt="Nitro Classic"
            />
            <div className="mt-[24px] text-white text-[20px] leading-[1.625]">
              Keep it simple — get the base chat perks without a Server Boost.
            </div>
            <div className="flex flex-wrap mt-[32px]">
            <button className="mr-[42px] w-auto mb-[24px] inline-flex py-[16px] px-[32px] rounded-[28px] items-center justify-center shadow-slate-700 hover:shadow-2xl  bg-black text-white text-[20px] leading-6 font-medium cursor-pointer">
                $99.99 per year <div className="bg-[#5865f2] rounded-3xl py-0 px-2 ml-[10px] text-[12px] leading-6">16% off</div>
              </button>
              <button className=" w-auto mb-[24px] inline-flex py-[16px] px-[32px] rounded-[28px] items-center shadow-slate-700 hover:shadow-2xl justify-center bg-black text-white text-[20px] leading-6 font-medium cursor-pointer">
                $9.99 per month
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Nitro;
