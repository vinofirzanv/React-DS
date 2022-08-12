import React, { useState } from "react";
import Header from "./Header";
import careers1 from "../assets/careers1.jpg";
import item from "../datacareers";


function Careers() {
  const [menuItem, setMenuItem] = useState(item);
  const [buttons, setButtons] = useState([]);


  return (
    <div className="h-full overflow-hidden mx-auto">
      <div>
        <div className="bg-[#f6f6f6]">
          <div className="bg-[#5865f2]">
            <Header></Header>
            <div className="py-[120px] ">
              <div className="mx-auto w-full max-w-[1260px] gird box-border grid-cols-12 py-0 px-[40px] gap-5">
                <div className="grid-cols-12 w-full flex justify-center">
                  <a href="/" className="text-black text-center mb-8">
                    {" "}
                    <button className="rounded-[28px] py-[16px] px-[32px] bg-white">
                      {" "}
                      Notice on Recruitment Scams
                    </button>
                  </a>
                </div>
                <h1 className="grid-cols-12 text-white text-center text-[56px] font-extrabold uppercase">
                  Work at Discord
                </h1>
                <div className="col-span-4 mt-[40px] text-white text-center text-xl px-40">
                  Discord is home to passionate people who value our mission—giving you the power to create belonging in your life.
                </div>
              </div>

              <div className="mx-auto grid w-full max-w-[1260px] box-border grid-cols-12 py-0 px-[40px] gap-5">
                <div className="relative col-start-3 col-end-[span_8] pt-[120px] ">
                  <div className="relative z-50 rounded-2xl w-full block pb-[56.25%]">
                    <iframe
                    src="https://www.youtube.com/embed/hX9MOVIMYkg"
                    className="absolute top-0 left-0 w-full h-full will-change-[opacity]"
                  ></iframe>
                  </div>
                  <div className="contents relative w-full h-auto">
                    <div className="top-[10%] left-[-40%] absolute">
                      <img className="rounded-xl h-[220px] w-[380px]" src={careers1}></img>
                    </div>
                    <div className="top-[90%] left-[-10%] absolute">
                      <img className="rounded-xl w-[180px] h-[103px]" src={careers1}></img>
                    </div>
                    <div className="top-[15%] left-[80%] absolute h-[160px] w-[280px]">
                      <img className="rounded-xl w-full h-[160px]" src={careers1}></img>
                    </div>
                    <div className="top-[80%] left-[80%] h-[220px] w-[380px] absolute">
                      <img className="rounded-xl h-[220px] w-[380px]" src={careers1}></img>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center flex-col mx-auto">
            <div className="w-full max-w-[1240px] box-border  mx-auto grid gap-5 p-[40px]">
              <div className="mx-auto mt-[120px] mb-[80px] ">
                <h2 className="mb-6 mx-auto font-extrabold leading-[95%] uppercase text-5xl">
                  We'd love to work with someone like you.
                </h2>
                <div className="leading-[140%] mx-auto">
                  <p className="mx-auto">
                    {" "}
                    We care about creating a delightful experience: for people
                    who use Discord and for ourselves. We value a workplace
                    that's as diverse as our product. People here do work that
                    matters. We keep moving forward with a figure-it-out
                    mentality. And above all, we remember to work with empathy,
                    kindness, and compassion.
                  </p>
                  <p className="mx-auto mt-[34px]">
                    {" "}
                    All of our values help us make a better product, better
                    decisions, and foster a better work environment. As we
                    continue to grow, we stay dedicated to building a company
                    that is representative of the world we live and play in.
                    We'd love your help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mb-[120px] w-full flex items-center flex-col ">
            <div className="w-full box-border grid gap-5 p-[40px] grid-cols-12">
              <h4 className="font-semibold text-[32px] col-span-12 ">
                Filters{" "}
              </h4>
            </div>

            <div className="p-[40px] w-full max-w-[1260px] box-border grid grid-cols-12 gap-5">
              <div className="col-span-12 mt-[24px] box-border">
                <div className="p-0 whitespace-normal overflow-visible">
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-[#5865f2] text-white leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl">
                    Featured
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Administrative Business Partner
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    People, Talent, and Vibe
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Art School / Creative Studio
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Data Science
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Product{" "}
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Engineering
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Finance
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Trust & Safety
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Communications
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Legal
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Marketing{" "}
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Operations
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Design
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Data Engineering
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Business Development
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Customer Experience
                  </button>
                  <button className="mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] bg-white text-black leading-6 inline-flex cursor-pointer font-medium items-center box-border hover:shadow-2xl hover:text-[#5865f2]">
                    Administrative
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Administrative
              </h3>
            </div>

            <div className="w-full gap-y-1.5 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Staff Administrative Coordinator
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">San Francisco, CA</div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Administrative Business Partner
              </h3>
            </div>

            <div className="w-full gap-y-1.5 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Administrative Business Partner
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">San Francisco, CA</div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Art School / Creative Studio
              </h3>
            </div>

            <div className="w-full gap-y-1.5 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Creative Director
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Business Development
              </h3>
            </div>

            <div className="w-full gap-y-1.5 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Sales Associate, Communities
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M53.3337 20H70.0003C71.8437 20 73.3337 21.4933 73.3337 23.3333V40C73.3337 41.84 71.8437 43.3333 70.0003 43.3333H46.667V40H33.3337V43.3333H10.0003C8.16033 43.3333 6.66699 41.84 6.66699 40V23.3333C6.66699 21.4933 8.16033 20 10.0003 20H26.667V9.99999C26.667 8.15999 28.1603 6.66666 30.0003 6.66666H50.0003C51.8437 6.66666 53.3337 8.15999 53.3337 9.99999V20ZM33.3337 20H46.667V13.3333H33.3337V20ZM33.3333 53.3333H46.6667V46.6667H70V66.6667C70 70.3433 67.0133 73.3333 63.3333 73.3333H16.6667C12.9933 73.3333 10 70.3433 10 66.6667V46.6667H33.3333V53.3333Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Communications
              </h3>
            </div>

            <div className="w-full gap-y-1.5 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Head of Policy Communications
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M13.3327 23.3333H6.66602V49.9999H13.3327V23.3333Z"></path>
                    <path d="M66.666 10V13.99L16.666 25.1033V60C16.666 61.53 17.706 62.86 19.1927 63.2367L32.526 66.57C32.7927 66.6333 33.066 66.6667 33.3327 66.6667C34.3694 66.6667 35.3594 66.1833 35.9994 65.3333L44.2327 54.3567L66.666 59.3367V63.3333H73.3327V10H66.666ZM31.9927 59.5633L23.3327 57.3967V49.7067L37.0894 52.7667L31.9927 59.5633Z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Customer Experience
              </h3>
            </div>

            <div className="w-full gap-y-6 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-2xl leading-[1.625] mb-20">
                  Social Media Associate, Customer Experience
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M13.3268 6.66675C9.64682 6.66675 6.66016 9.65008 6.66016 13.3334V53.3334C6.66016 57.0134 9.64682 60.0001 13.3268 60.0001H23.3268V73.3334L36.6602 60.0001H66.6602C70.3435 60.0001 73.3268 57.0134 73.3268 53.3334V13.3334C73.3268 9.65008 70.3435 6.66675 66.6602 6.66675H13.3268Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-2xl leading-[1.625] ">
                  Customer Experience Associate (Bilingual - European Spanish) -
                  Netherlands
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">Netherlands</div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M13.3268 6.66675C9.64682 6.66675 6.66016 9.65008 6.66016 13.3334V53.3334C6.66016 57.0134 9.64682 60.0001 13.3268 60.0001H23.3268V73.3334L36.6602 60.0001H66.6602C70.3435 60.0001 73.3268 57.0134 73.3268 53.3334V13.3334C73.3268 9.65008 70.3435 6.66675 66.6602 6.66675H13.3268Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-2xl leading-[1.625] ">
                  Customer Experience Associate (Bilingual - French) -
                  Netherlands
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">Netherlands</div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M13.3268 6.66675C9.64682 6.66675 6.66016 9.65008 6.66016 13.3334V53.3334C6.66016 57.0134 9.64682 60.0001 13.3268 60.0001H23.3268V73.3334L36.6602 60.0001H66.6602C70.3435 60.0001 73.3268 57.0134 73.3268 53.3334V13.3334C73.3268 9.65008 70.3435 6.66675 66.6602 6.66675H13.3268Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-2xl leading-[1.625]">
                  Customer Experience Associate (Bilingual - Russian) -
                  Netherlands
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">Netherlands</div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M13.3268 6.66675C9.64682 6.66675 6.66016 9.65008 6.66016 13.3334V53.3334C6.66016 57.0134 9.64682 60.0001 13.3268 60.0001H23.3268V73.3334L36.6602 60.0001H66.6602C70.3435 60.0001 73.3268 57.0134 73.3268 53.3334V13.3334C73.3268 9.65008 70.3435 6.66675 66.6602 6.66675H13.3268Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Data Engineering
              </h3>
            </div>

            <div className="w-full gap-y-1.5 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Data Engineering
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Data Science
              </h3>
            </div>

            <div className="w-full gap-y-1.5 max-w-[1260px] box-border grid grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Data Science Manager
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Data Scientist, Analytics - Messaging Experience
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Data Scientist, Analytics - Safety
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Data Scientist, Machine Learning
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Data Scientist, Machine Learning - Ecosystems & Servers
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Data Scientist, Machine Learning - Marketing
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Design
              </h3>
            </div>

            <div className="w-full gap-y-20 lg:gap-y-1.5 max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Product Designer, Creator Revenue
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M20.0007 76.6667L26.6673 66.6667H13.334L20.0007 76.6667Z"></path>
                      <path d="M26.6673 30H13.334V63.3333H26.6673V30Z"></path>
                      <path d="M20.0007 16.6667C16.3207 16.6667 13.334 19.8834 13.334 23.8467V26.6667H26.6673V23.8467C26.6673 19.8834 23.6807 16.6667 20.0007 16.6667Z"></path>

                      <path d="M36.666 6.66675V13.3334H46.666V20.0001H36.666V30.0001H46.666V36.6667H36.666V46.6667H46.666V53.3334H36.666V63.3334H46.666V70.0001H36.666V76.6667H63.3327V6.66675H36.666Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Product Designer, Premium Products
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M20.0007 76.6667L26.6673 66.6667H13.334L20.0007 76.6667Z"></path>
                      <path d="M26.6673 30H13.334V63.3333H26.6673V30Z"></path>
                      <path d="M20.0007 16.6667C16.3207 16.6667 13.334 19.8834 13.334 23.8467V26.6667H26.6673V23.8467C26.6673 19.8834 23.6807 16.6667 20.0007 16.6667Z"></path>

                      <path d="M36.666 6.66675V13.3334H46.666V20.0001H36.666V30.0001H46.666V36.6667H36.666V46.6667H46.666V53.3334H36.666V63.3334H46.666V70.0001H36.666V76.6667H63.3327V6.66675H36.666Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Product Design Manager, Communities
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M20.0007 76.6667L26.6673 66.6667H13.334L20.0007 76.6667Z"></path>
                      <path d="M26.6673 30H13.334V63.3333H26.6673V30Z"></path>
                      <path d="M20.0007 16.6667C16.3207 16.6667 13.334 19.8834 13.334 23.8467V26.6667H26.6673V23.8467C26.6673 19.8834 23.6807 16.6667 20.0007 16.6667Z"></path>

                      <path d="M36.666 6.66675V13.3334H46.666V20.0001H36.666V30.0001H46.666V36.6667H36.666V46.6667H46.666V53.3334H36.666V63.3334H46.666V70.0001H36.666V76.6667H63.3327V6.66675H36.666Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Product Design Manager, Safety
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M20.0007 76.6667L26.6673 66.6667H13.334L20.0007 76.6667Z"></path>
                      <path d="M26.6673 30H13.334V63.3333H26.6673V30Z"></path>
                      <path d="M20.0007 16.6667C16.3207 16.6667 13.334 19.8834 13.334 23.8467V26.6667H26.6673V23.8467C26.6673 19.8834 23.6807 16.6667 20.0007 16.6667Z"></path>

                      <path d="M36.666 6.66675V13.3334H46.666V20.0001H36.666V30.0001H46.666V36.6667H36.666V46.6667H46.666V53.3334H36.666V63.3334H46.666V70.0001H36.666V76.6667H63.3327V6.66675H36.666Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Product Designer, Platform Ecosystems - Apps & API
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M20.0007 76.6667L26.6673 66.6667H13.334L20.0007 76.6667Z"></path>
                      <path d="M26.6673 30H13.334V63.3333H26.6673V30Z"></path>
                      <path d="M20.0007 16.6667C16.3207 16.6667 13.334 19.8834 13.334 23.8467V26.6667H26.6673V23.8467C26.6673 19.8834 23.6807 16.6667 20.0007 16.6667Z"></path>

                      <path d="M36.666 6.66675V13.3334H46.666V20.0001H36.666V30.0001H46.666V36.6667H36.666V46.6667H46.666V53.3334H36.666V63.3334H46.666V70.0001H36.666V76.6667H63.3327V6.66675H36.666Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Product Design Manager, Friends
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M20.0007 76.6667L26.6673 66.6667H13.334L20.0007 76.6667Z"></path>
                      <path d="M26.6673 30H13.334V63.3333H26.6673V30Z"></path>
                      <path d="M20.0007 16.6667C16.3207 16.6667 13.334 19.8834 13.334 23.8467V26.6667H26.6673V23.8467C26.6673 19.8834 23.6807 16.6667 20.0007 16.6667Z"></path>

                      <path d="M36.666 6.66675V13.3334H46.666V20.0001H36.666V30.0001H46.666V36.6667H36.666V46.6667H46.666V53.3334H36.666V63.3334H46.666V70.0001H36.666V76.6667H63.3327V6.66675H36.666Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Product Design Manager, Premium Products
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M20.0007 76.6667L26.6673 66.6667H13.334L20.0007 76.6667Z"></path>
                      <path d="M26.6673 30H13.334V63.3333H26.6673V30Z"></path>
                      <path d="M20.0007 16.6667C16.3207 16.6667 13.334 19.8834 13.334 23.8467V26.6667H26.6673V23.8467C26.6673 19.8834 23.6807 16.6667 20.0007 16.6667Z"></path>

                      <path d="M36.666 6.66675V13.3334H46.666V20.0001H36.666V30.0001H46.666V36.6667H36.666V46.6667H46.666V53.3334H36.666V63.3334H46.666V70.0001H36.666V76.6667H63.3327V6.66675H36.666Z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Engineering
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Engineering Manager - Game Studio
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer - Communities
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer - Desktop Framework
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">San Francisco, CA </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer (Full Stack)- Experimentation
                  Platform
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer - Full Stack (Safety)
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer - Growth
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer - Product/Full-Stack
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer - Revenue/Full-Stack
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Software Engineer - Safety Engineering
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Software Engineer - Communities
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Staff Detection and Response Engineer
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Staff Software Engineer - Communities
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Staff Software Engineer, Data Infrastructure
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Staff Technical Program Manager - Product Quality
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Staff Technical Program Manager - Strategy and Operational
                  Excellence
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M73.3327 23.34V16.6667C73.3327 12.99 70.346 10 66.666 10H13.3327C9.65602 10 6.66602 12.99 6.66602 16.6667V23.34H73.3327ZM26.666 13.3333C28.5093 13.3333 29.9993 14.8233 29.9993 16.6667C29.9993 18.51 28.5093 20 26.666 20C24.8227 20 23.3327 18.51 23.3327 16.6667C23.3327 14.8233 24.8227 13.3333 26.666 13.3333ZM16.666 13.3333C18.5093 13.3333 19.9993 14.8233 19.9993 16.6667C19.9993 18.51 18.5093 20 16.666 20C14.8227 20 13.3327 18.51 13.3327 16.6667C13.3327 14.8233 14.8227 13.3333 16.666 13.3333Z"></path>
                      <path d="M6.66602 26.6733V63.3333C6.66602 67.01 9.65602 70 13.3327 70H66.666C70.346 70 73.3327 67.01 73.3327 63.3333V26.6733H6.66602ZM25.6893 62.3667L20.976 57.6533L28.6194 50.01L20.976 42.3667L25.6893 37.6533L38.046 50.01L25.6893 62.3667ZM59.9994 60.01H43.3327V53.3433H59.9994V60.01Z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Finance
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Enterprise Business Analyst, Financial Systems
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M73.3327 23.3333V13.3333C73.3327 11.4933 71.8427 10 69.9994 10H9.99935C8.15602 10 6.66602 11.4933 6.66602 13.3333V23.3333C6.66602 25.1733 8.15602 26.6667 9.99935 26.6667V60H6.66602V66.6667H36.666V73.3333H43.3327V66.6667H73.3327V60H69.9994V26.6667C71.8427 26.6667 73.3327 25.1733 73.3327 23.3333ZM33.3327 38.89H25.5527C24.9394 38.89 24.4427 39.3867 24.4427 40C24.4427 40.6133 24.9394 41.11 25.5527 41.11H27.776C30.8394 41.11 33.3327 43.6067 33.3327 46.6667C33.3327 49.35 31.4194 51.59 28.886 52.11V54.4433H24.4427V52.2233H19.9993V47.7767H27.776C28.3894 47.7767 28.886 47.28 28.886 46.6667C28.886 46.0533 28.3894 45.5567 27.776 45.5567H25.5527C22.4893 45.5567 19.9993 43.0633 19.9993 40C19.9993 37.32 21.9094 35.0767 24.4427 34.5567V32.2233H28.886V34.4433H33.3327V38.89ZM49.9994 56.6667H43.3327V40H49.9994V56.6667ZM59.9994 56.6667H53.3327V33.3333H59.9994V56.6667ZM66.666 20H13.3327V16.6667H66.666V20Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Global Accounts Payable Manager
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M73.3327 23.3333V13.3333C73.3327 11.4933 71.8427 10 69.9994 10H9.99935C8.15602 10 6.66602 11.4933 6.66602 13.3333V23.3333C6.66602 25.1733 8.15602 26.6667 9.99935 26.6667V60H6.66602V66.6667H36.666V73.3333H43.3327V66.6667H73.3327V60H69.9994V26.6667C71.8427 26.6667 73.3327 25.1733 73.3327 23.3333ZM33.3327 38.89H25.5527C24.9394 38.89 24.4427 39.3867 24.4427 40C24.4427 40.6133 24.9394 41.11 25.5527 41.11H27.776C30.8394 41.11 33.3327 43.6067 33.3327 46.6667C33.3327 49.35 31.4194 51.59 28.886 52.11V54.4433H24.4427V52.2233H19.9993V47.7767H27.776C28.3894 47.7767 28.886 47.28 28.886 46.6667C28.886 46.0533 28.3894 45.5567 27.776 45.5567H25.5527C22.4893 45.5567 19.9993 43.0633 19.9993 40C19.9993 37.32 21.9094 35.0767 24.4427 34.5567V32.2233H28.886V34.4433H33.3327V38.89ZM49.9994 56.6667H43.3327V40H49.9994V56.6667ZM59.9994 56.6667H53.3327V33.3333H59.9994V56.6667ZM66.666 20H13.3327V16.6667H66.666V20Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Manager, Stategic Revenue Finance
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">San Francisco, CA </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M73.3327 23.3333V13.3333C73.3327 11.4933 71.8427 10 69.9994 10H9.99935C8.15602 10 6.66602 11.4933 6.66602 13.3333V23.3333C6.66602 25.1733 8.15602 26.6667 9.99935 26.6667V60H6.66602V66.6667H36.666V73.3333H43.3327V66.6667H73.3327V60H69.9994V26.6667C71.8427 26.6667 73.3327 25.1733 73.3327 23.3333ZM33.3327 38.89H25.5527C24.9394 38.89 24.4427 39.3867 24.4427 40C24.4427 40.6133 24.9394 41.11 25.5527 41.11H27.776C30.8394 41.11 33.3327 43.6067 33.3327 46.6667C33.3327 49.35 31.4194 51.59 28.886 52.11V54.4433H24.4427V52.2233H19.9993V47.7767H27.776C28.3894 47.7767 28.886 47.28 28.886 46.6667C28.886 46.0533 28.3894 45.5567 27.776 45.5567H25.5527C22.4893 45.5567 19.9993 43.0633 19.9993 40C19.9993 37.32 21.9094 35.0767 24.4427 34.5567V32.2233H28.886V34.4433H33.3327V38.89ZM49.9994 56.6667H43.3327V40H49.9994V56.6667ZM59.9994 56.6667H53.3327V33.3333H59.9994V56.6667ZM66.666 20H13.3327V16.6667H66.666V20Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Revenue Accounting Manager
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M73.3327 23.3333V13.3333C73.3327 11.4933 71.8427 10 69.9994 10H9.99935C8.15602 10 6.66602 11.4933 6.66602 13.3333V23.3333C6.66602 25.1733 8.15602 26.6667 9.99935 26.6667V60H6.66602V66.6667H36.666V73.3333H43.3327V66.6667H73.3327V60H69.9994V26.6667C71.8427 26.6667 73.3327 25.1733 73.3327 23.3333ZM33.3327 38.89H25.5527C24.9394 38.89 24.4427 39.3867 24.4427 40C24.4427 40.6133 24.9394 41.11 25.5527 41.11H27.776C30.8394 41.11 33.3327 43.6067 33.3327 46.6667C33.3327 49.35 31.4194 51.59 28.886 52.11V54.4433H24.4427V52.2233H19.9993V47.7767H27.776C28.3894 47.7767 28.886 47.28 28.886 46.6667C28.886 46.0533 28.3894 45.5567 27.776 45.5567H25.5527C22.4893 45.5567 19.9993 43.0633 19.9993 40C19.9993 37.32 21.9094 35.0767 24.4427 34.5567V32.2233H28.886V34.4433H33.3327V38.89ZM49.9994 56.6667H43.3327V40H49.9994V56.6667ZM59.9994 56.6667H53.3327V33.3333H59.9994V56.6667ZM66.666 20H13.3327V16.6667H66.666V20Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Tax Manager
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M73.3327 23.3333V13.3333C73.3327 11.4933 71.8427 10 69.9994 10H9.99935C8.15602 10 6.66602 11.4933 6.66602 13.3333V23.3333C6.66602 25.1733 8.15602 26.6667 9.99935 26.6667V60H6.66602V66.6667H36.666V73.3333H43.3327V66.6667H73.3327V60H69.9994V26.6667C71.8427 26.6667 73.3327 25.1733 73.3327 23.3333ZM33.3327 38.89H25.5527C24.9394 38.89 24.4427 39.3867 24.4427 40C24.4427 40.6133 24.9394 41.11 25.5527 41.11H27.776C30.8394 41.11 33.3327 43.6067 33.3327 46.6667C33.3327 49.35 31.4194 51.59 28.886 52.11V54.4433H24.4427V52.2233H19.9993V47.7767H27.776C28.3894 47.7767 28.886 47.28 28.886 46.6667C28.886 46.0533 28.3894 45.5567 27.776 45.5567H25.5527C22.4893 45.5567 19.9993 43.0633 19.9993 40C19.9993 37.32 21.9094 35.0767 24.4427 34.5567V32.2233H28.886V34.4433H33.3327V38.89ZM49.9994 56.6667H43.3327V40H49.9994V56.6667ZM59.9994 56.6667H53.3327V33.3333H59.9994V56.6667ZM66.666 20H13.3327V16.6667H66.666V20Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Legal
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Legal Operations Analyst
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M57.6435 32.3601C58.2935 33.0134 59.1468 33.3334 60.0002 33.3334C60.8535 33.3334 61.7068 33.0134 62.3568 32.3601L69.0235 25.6934C70.3269 24.3901 70.3269 22.2801 69.0235 20.9801L49.0235 0.980068C47.7202 -0.316598 45.6135 -0.316598 44.3102 0.980068L37.6435 7.64674C36.3402 8.94674 36.3402 11.0601 37.6435 12.3601L57.6435 32.3601ZM20.9772 24.3101C22.2805 23.0134 24.3872 23.0134 25.6905 24.3101L45.6905 44.3101C46.9938 45.6134 46.9938 47.7234 45.6905 49.0268L39.0238 55.6934C38.3738 56.3468 37.5205 56.6668 36.6672 56.6668C35.8138 56.6668 34.9605 56.3468 34.3105 55.6934L14.3105 35.6934C13.0072 34.3901 13.0072 32.2768 14.3105 30.9768L20.9772 24.3101ZM26.6667 63.3333C28.51 63.3333 30 64.8266 30 66.6666V73.3333H33.3333V80H0V73.3333H3.33333V66.6666C3.33333 64.8266 4.82333 63.3333 6.66667 63.3333H26.6667ZM52.9075 34.8634L79.0242 60.9767L74.3108 65.6934L48.1942 39.5767C47.7142 39.83 47.2008 40 46.6675 40C45.8142 40 44.9608 39.68 44.3108 39.0267L30.9775 25.6934C29.6742 24.3934 29.6742 22.28 30.9775 20.98L34.3108 17.6467C35.6142 16.35 37.7208 16.35 39.0242 17.6467L52.3575 30.98C53.4142 32.0367 53.5675 33.6134 52.9075 34.8634Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Managing Counsel, Commercial
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M57.6435 32.3601C58.2935 33.0134 59.1468 33.3334 60.0002 33.3334C60.8535 33.3334 61.7068 33.0134 62.3568 32.3601L69.0235 25.6934C70.3269 24.3901 70.3269 22.2801 69.0235 20.9801L49.0235 0.980068C47.7202 -0.316598 45.6135 -0.316598 44.3102 0.980068L37.6435 7.64674C36.3402 8.94674 36.3402 11.0601 37.6435 12.3601L57.6435 32.3601ZM20.9772 24.3101C22.2805 23.0134 24.3872 23.0134 25.6905 24.3101L45.6905 44.3101C46.9938 45.6134 46.9938 47.7234 45.6905 49.0268L39.0238 55.6934C38.3738 56.3468 37.5205 56.6668 36.6672 56.6668C35.8138 56.6668 34.9605 56.3468 34.3105 55.6934L14.3105 35.6934C13.0072 34.3901 13.0072 32.2768 14.3105 30.9768L20.9772 24.3101ZM26.6667 63.3333C28.51 63.3333 30 64.8266 30 66.6666V73.3333H33.3333V80H0V73.3333H3.33333V66.6666C3.33333 64.8266 4.82333 63.3333 6.66667 63.3333H26.6667ZM52.9075 34.8634L79.0242 60.9767L74.3108 65.6934L48.1942 39.5767C47.7142 39.83 47.2008 40 46.6675 40C45.8142 40 44.9608 39.68 44.3108 39.0267L30.9775 25.6934C29.6742 24.3934 29.6742 22.28 30.9775 20.98L34.3108 17.6467C35.6142 16.35 37.7208 16.35 39.0242 17.6467L52.3575 30.98C53.4142 32.0367 53.5675 33.6134 52.9075 34.8634Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Product Counsel
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M57.6435 32.3601C58.2935 33.0134 59.1468 33.3334 60.0002 33.3334C60.8535 33.3334 61.7068 33.0134 62.3568 32.3601L69.0235 25.6934C70.3269 24.3901 70.3269 22.2801 69.0235 20.9801L49.0235 0.980068C47.7202 -0.316598 45.6135 -0.316598 44.3102 0.980068L37.6435 7.64674C36.3402 8.94674 36.3402 11.0601 37.6435 12.3601L57.6435 32.3601ZM20.9772 24.3101C22.2805 23.0134 24.3872 23.0134 25.6905 24.3101L45.6905 44.3101C46.9938 45.6134 46.9938 47.7234 45.6905 49.0268L39.0238 55.6934C38.3738 56.3468 37.5205 56.6668 36.6672 56.6668C35.8138 56.6668 34.9605 56.3468 34.3105 55.6934L14.3105 35.6934C13.0072 34.3901 13.0072 32.2768 14.3105 30.9768L20.9772 24.3101ZM26.6667 63.3333C28.51 63.3333 30 64.8266 30 66.6666V73.3333H33.3333V80H0V73.3333H3.33333V66.6666C3.33333 64.8266 4.82333 63.3333 6.66667 63.3333H26.6667ZM52.9075 34.8634L79.0242 60.9767L74.3108 65.6934L48.1942 39.5767C47.7142 39.83 47.2008 40 46.6675 40C45.8142 40 44.9608 39.68 44.3108 39.0267L30.9775 25.6934C29.6742 24.3934 29.6742 22.28 30.9775 20.98L34.3108 17.6467C35.6142 16.35 37.7208 16.35 39.0242 17.6467L52.3575 30.98C53.4142 32.0367 53.5675 33.6134 52.9075 34.8634Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Manager, Legal Operations
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M57.6435 32.3601C58.2935 33.0134 59.1468 33.3334 60.0002 33.3334C60.8535 33.3334 61.7068 33.0134 62.3568 32.3601L69.0235 25.6934C70.3269 24.3901 70.3269 22.2801 69.0235 20.9801L49.0235 0.980068C47.7202 -0.316598 45.6135 -0.316598 44.3102 0.980068L37.6435 7.64674C36.3402 8.94674 36.3402 11.0601 37.6435 12.3601L57.6435 32.3601ZM20.9772 24.3101C22.2805 23.0134 24.3872 23.0134 25.6905 24.3101L45.6905 44.3101C46.9938 45.6134 46.9938 47.7234 45.6905 49.0268L39.0238 55.6934C38.3738 56.3468 37.5205 56.6668 36.6672 56.6668C35.8138 56.6668 34.9605 56.3468 34.3105 55.6934L14.3105 35.6934C13.0072 34.3901 13.0072 32.2768 14.3105 30.9768L20.9772 24.3101ZM26.6667 63.3333C28.51 63.3333 30 64.8266 30 66.6666V73.3333H33.3333V80H0V73.3333H3.33333V66.6666C3.33333 64.8266 4.82333 63.3333 6.66667 63.3333H26.6667ZM52.9075 34.8634L79.0242 60.9767L74.3108 65.6934L48.1942 39.5767C47.7142 39.83 47.2008 40 46.6675 40C45.8142 40 44.9608 39.68 44.3108 39.0267L30.9775 25.6934C29.6742 24.3934 29.6742 22.28 30.9775 20.98L34.3108 17.6467C35.6142 16.35 37.7208 16.35 39.0242 17.6467L52.3575 30.98C53.4142 32.0367 53.5675 33.6134 52.9075 34.8634Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Marketing
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Manager, Creator Programs
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Web & Editorial Manager
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Operations
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Manager, Payment and Fraud
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M64.5583 46.3607H75V33.6393H64.57C63.9983 31.4578 63.1467 29.4221 62.0558 27.4973L68.6475 20.9062L59.1042 11.3636L52.5067 17.9548C50.5992 16.8582 48.5517 16.0124 46.3642 15.4466V5H33.6417V15.4466C31.46 16.0124 29.4125 16.8582 27.505 17.9548L20.9075 11.3636L11.3583 20.9062L17.9558 27.4973C16.865 29.4221 16.0133 31.4636 15.4417 33.6393H5V46.3665H15.4417C16.0133 48.548 16.865 50.5895 17.9558 52.5085L11.3583 59.0997L20.8958 68.6364L27.4933 62.0452C29.4008 63.1418 31.4483 63.9934 33.63 64.5534V75H46.3525V64.5475C48.54 63.9876 50.5875 63.136 52.495 62.0394L59.0925 68.6305L68.6358 59.0938L62.0442 52.5027C63.135 50.5895 63.9866 48.5422 64.5583 46.3607ZM53.9988 40.0027C53.9988 47.7341 47.7308 54.0016 39.9988 54.0016C32.2668 54.0016 25.9988 47.7341 25.9988 40.0027C25.9988 32.2714 32.2668 26.0039 39.9988 26.0039C47.7308 26.0039 53.9988 32.2714 53.9988 40.0027Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                People, Talent, and Vibe
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Compensation Analyst
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Learning & Development Manager
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  People Operations Coordinator, People Services
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">San Francisco, CA</div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Benefits Manager
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Manager, People Partner
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior People Operations Partner
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior People Partner
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Senior Program Manager, Employee Experience
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Sr. Business Systems Analyst (Workday)
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <g>
                      <path d="M31.196 51.6666C31.196 56.2699 27.4626 59.9999 22.8626 59.9999C18.2593 59.9999 14.5293 56.2699 14.5293 51.6666C14.5293 47.0633 18.2593 43.3333 22.8626 43.3333C27.4626 43.3333 31.196 47.0633 31.196 51.6666Z"></path>
                      <path d="M39.0599 73.3333C37.5733 67.5933 32.4033 63.3333 26.1999 63.3333H19.5333C13.3266 63.3333 8.15659 67.5933 6.66992 73.3333H39.0599Z"></path>
                      <path d="M65.4772 51.6666C65.4772 56.2699 61.7439 59.9999 57.1439 59.9999C52.5405 59.9999 48.8105 56.2699 48.8105 51.6666C48.8105 47.0633 52.5405 43.3333 57.1439 43.3333C61.7405 43.3333 65.4772 47.0633 65.4772 51.6666Z"></path>
                      <path d="M73.3373 73.3333C71.8506 67.5933 66.6806 63.3333 60.4773 63.3333H53.8106C47.6039 63.3333 42.4339 67.5933 40.9473 73.3333H73.3373Z"></path>
                      <path d="M48.3366 15.0001C48.3366 19.6034 44.6033 23.3334 40.0033 23.3334C35.3999 23.3334 31.6699 19.6034 31.6699 15.0001C31.6699 10.3967 35.3999 6.66675 40.0033 6.66675C44.6033 6.66675 48.3366 10.3967 48.3366 15.0001Z"></path>
                      <path d="M56.1966 36.6667C54.71 30.9267 49.54 26.6667 43.3366 26.6667H36.67C30.4633 26.6667 25.2933 30.9267 23.8066 36.6667H56.1966Z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Product
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Director of Product, Friends
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Director of Product, Trust & Safety
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M16 0C7.16344 0 0 7.16344 0 16V64C0 72.8366 7.16344 80 16 80H64C72.8366 80 80 72.8366 80 64V16C80 7.16344 72.8366 0 64 0H16ZM52.237 57.8428C52.237 57.8428 50.7054 56.0134 49.429 54.4392C55.0025 52.865 57.1297 49.4188 57.1297 49.4188C55.3854 50.5675 53.7261 51.3759 52.237 51.929C50.1097 52.8224 48.0676 53.3755 46.0679 53.7585C41.9836 54.5243 38.2396 54.3115 35.0487 53.7159C32.6236 53.2479 30.5388 52.6097 28.7945 51.8864C27.8159 51.5035 26.7523 51.0355 25.6887 50.4399C25.6248 50.3974 25.561 50.3654 25.4972 50.3335C25.4334 50.3016 25.3696 50.2697 25.3057 50.2272C25.2732 50.2109 25.247 50.1947 25.2245 50.1808C25.1882 50.1583 25.1619 50.1421 25.1356 50.1421C24.3697 49.7166 23.9443 49.4188 23.9443 49.4188C23.9443 49.4188 25.9865 52.7799 31.3897 54.3966C30.1134 56.0134 28.5392 57.8854 28.5392 57.8854C19.1366 57.5875 15.5628 51.461 15.5628 51.461C15.5628 37.889 21.6894 26.8697 21.6894 26.8697C27.8159 22.3174 33.6021 22.445 33.6021 22.445L34.0276 22.9556C26.3694 25.1254 22.8807 28.4865 22.8807 28.4865C22.8807 28.4865 23.8167 27.9759 25.3908 27.2952C29.9432 25.2956 33.5596 24.785 35.0487 24.6148L35.1441 24.5987C35.3587 24.5622 35.5491 24.5297 35.7719 24.5297C38.3672 24.1894 41.3028 24.1043 44.3661 24.4446C48.4079 24.9126 52.7476 26.1039 57.1723 28.4865C57.1723 28.4865 53.8112 25.2956 46.5785 23.1257L47.1741 22.445C47.1741 22.445 53.0028 22.3174 59.0868 26.8697C59.0868 26.8697 65.2134 37.889 65.2134 51.461C65.2134 51.4588 65.2035 51.4736 65.1834 51.5037C64.8213 52.0468 61.145 57.5607 52.237 57.8428ZM47.9838 38.1444C45.5587 38.1444 43.6442 40.2291 43.6442 42.8244C43.6442 45.4197 45.6013 47.5044 47.9838 47.5044C50.4089 47.5044 52.3235 45.4197 52.3235 42.8244C52.3235 40.2291 50.3664 38.1444 47.9838 38.1444ZM32.4547 38.1444C30.0296 38.1444 28.1151 40.2291 28.1151 42.8244C28.1151 45.4197 30.0722 47.5044 32.4547 47.5044C34.8798 47.5044 36.7944 45.4197 36.7944 42.8244C36.8369 40.2291 34.8798 38.1444 32.4547 38.1444Z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="w-full max-w-[1260px] gap-y-6 box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                Trust & Safety
              </h3>
            </div>

            <div className="w-full max-w-[1260px] box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px]">
              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Exploitative Content Lead
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M63.3301 19.9933C51.8634 19.9933 42.7501 8.10999 42.6601 7.98999C41.4001 6.32332 38.5934 6.32332 37.3334 7.98999C37.2434 8.11332 28.1301 19.9933 16.6634 19.9933C14.8201 19.9933 13.3301 21.4867 13.3301 23.3267V46.66C13.3301 59.35 35.8734 71.5933 38.4401 72.9433C38.9301 73.1967 39.4634 73.3267 39.9967 73.3267C40.5301 73.3267 41.0634 73.1967 41.5534 72.9433C44.1234 71.5933 66.6634 59.35 66.6634 46.66V23.3267C66.6634 21.4833 65.1734 19.9933 63.3301 19.9933ZM39.9967 53.3267C39.9967 53.3267 29.9967 43.3267 29.9967 38.3267C29.9967 35.5667 32.2367 33.3267 34.9967 33.3267C37.7567 33.3267 39.9967 35.5667 39.9967 38.3267C39.9967 35.5667 42.2367 33.3267 44.9967 33.3267C47.7567 33.3267 49.9967 35.5667 49.9967 38.3267C49.9967 43.3267 39.9967 53.3267 39.9967 53.3267Z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="/"
                className="col-start-[span_4] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
              >
                <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
                  Specialized Program Leader
                </div>

                <div className="flex justify-end content-between">
                  <div className="text-base ">
                    San Francisco, CA or Remote (U.S.)
                  </div>
                  <svg
                    fill="#5865f2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="40px"
                    height="40px"
                    viewBox="0 0 80 80"
                  >
                    <path d="M63.3301 19.9933C51.8634 19.9933 42.7501 8.10999 42.6601 7.98999C41.4001 6.32332 38.5934 6.32332 37.3334 7.98999C37.2434 8.11332 28.1301 19.9933 16.6634 19.9933C14.8201 19.9933 13.3301 21.4867 13.3301 23.3267V46.66C13.3301 59.35 35.8734 71.5933 38.4401 72.9433C38.9301 73.1967 39.4634 73.3267 39.9967 73.3267C40.5301 73.3267 41.0634 73.1967 41.5534 72.9433C44.1234 71.5933 66.6634 59.35 66.6634 46.66V23.3267C66.6634 21.4833 65.1734 19.9933 63.3301 19.9933ZM39.9967 53.3267C39.9967 53.3267 29.9967 43.3267 29.9967 38.3267C29.9967 35.5667 32.2367 33.3267 34.9967 33.3267C37.7567 33.3267 39.9967 35.5667 39.9967 38.3267C39.9967 35.5667 42.2367 33.3267 44.9967 33.3267C47.7567 33.3267 49.9967 35.5667 49.9967 38.3267C49.9967 43.3267 39.9967 53.3267 39.9967 53.3267Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div> */}

          <div className="bg-[#5865f2] py-[120px] w-full flex items-center flex-col text-white ">
            <div className="w-full box-border grid gap-5 grid-cols-12 py-0 px-[24px] ">
              <h2 className="text-5xl text-black col-span-12 mb-[120px]  ">
                Top Tier Perks and Benefits:
              </h2>
            </div>
            <div className="gap-y-10 w-full max-w-[1260px] box-border grid grid-cols-12 p-[40px]">
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <path d="M32.8463 10.4883L26.1796 3.82159C25.8663 3.50992 25.4446 3.33325 25.0013 3.33325H8.33464C7.41297 3.33325 6.66797 4.07992 6.66797 4.99992V34.9999C6.66797 35.9199 7.41297 36.6666 8.33464 36.6666H31.668C32.5896 36.6666 33.3346 35.9199 33.3346 34.9999V11.6666C33.3346 11.2249 33.1596 10.8016 32.8463 10.4883ZM15.0013 14.9999H18.3346V11.6666H21.668V14.9999H25.0013V18.3333H21.668V21.6666H18.3346V18.3333H15.0013V14.9999ZM28.3346 31.6666H11.668V29.9999H28.3346V31.6666ZM28.3346 26.6666H11.668V24.9999H28.3346V26.6666ZM25.0013 11.6666V4.99992L31.668 11.6666H25.0013Z"></path>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Stay healthy
                </div>
                <div className="text-[20px] leading-[1.625]">
                  We take care of our team with comprehensive Medical, Dental,
                  and Vision plans.
                </div>
              </div>

              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M21.6667 6.66667V0H18.3333V6.66667H0V10H5V16.6667H8.33333V10H18.3333V21.6667H21.6667V10H31.6667V18.3333H35V10H40V6.66667H21.6667Z"></path>
                      <path d="M28.334 30H38.334L33.334 20L28.334 30Z"></path>
                      <path d="M6.66602 28.3333C9.42744 28.3333 11.666 26.0947 11.666 23.3333C11.666 20.5718 9.42744 18.3333 6.66602 18.3333C3.90459 18.3333 1.66602 20.5718 1.66602 23.3333C1.66602 26.0947 3.90459 28.3333 6.66602 28.3333Z"></path>
                      <path d="M15 31.6666C15 38.3332 20.3983 39.9999 25 39.9999C25 39.9999 21.6667 36.6666 21.6667 31.6666C21.6667 26.6666 25 23.3333 25 23.3333C20.3983 23.3333 15 24.9999 15 31.6666Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Parental perks
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Spend some quality time with the next generation with parental
                  leave, fertility, adoption, and surrogacy benefits.
                </div>
              </div>

              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M28.4054 8.73234C31.4187 7.92734 34.5587 8.339 37.2587 9.899L38.9254 7.01067C32.5004 3.304 24.4537 4.91567 19.8787 10.4523C15.302 4.914 7.2537 3.30234 0.832031 7.01067L2.4987 9.899C5.1987 8.339 8.34203 7.92567 11.352 8.73234C13.4704 9.299 15.3337 10.434 16.8004 11.989C10.002 13.4123 4.8787 19.454 4.8787 26.6673H8.21203C8.21203 20.489 13.0437 15.429 19.127 15.039L14.7587 38.3323H24.7587L24.1337 34.999H19.7587V33.3323H23.822L23.197 29.999H19.7604V28.3323H22.8854L22.2604 24.999H19.7604V23.3323H21.947L20.3904 15.0273C26.5854 15.2973 31.547 20.4057 31.547 26.6673H34.8804C34.8804 19.4523 29.757 13.4123 22.9587 11.989C24.4254 10.434 26.2887 9.299 28.4054 8.73234Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">Kick back</div>
                <div className="text-[20px] leading-[1.625]">
                  Stay refreshed with over 19 paid holidays, use-what-you-need
                  sick days, and four weeks of PTO.
                </div>
              </div>

              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M30.0013 5.00342H10.0013C8.1613 5.00342 6.66797 6.49508 6.66797 8.33675V35.0034C6.66797 36.8434 8.1613 38.3368 10.0013 38.3368C11.8413 38.3368 13.3346 36.8434 13.3346 35.0034H26.668C26.668 36.8434 28.1613 38.3368 30.0013 38.3368C31.8413 38.3368 33.3346 36.8434 33.3346 35.0034V8.33675C33.3346 6.49508 31.8413 5.00342 30.0013 5.00342ZM10.0013 11.6701H30.0013V23.3368H10.0013V11.6701ZM12.5013 31.6701C11.1213 31.6701 10.0013 30.5501 10.0013 29.1701C10.0013 27.7901 11.1213 26.6701 12.5013 26.6701C13.8813 26.6701 15.0013 27.7901 15.0013 29.1701C15.0013 30.5501 13.8813 31.6701 12.5013 31.6701ZM25.0013 29.1701C25.0013 27.7901 26.1213 26.6701 27.5013 26.6701C28.8813 26.6701 30.0013 27.7901 30.0013 29.1701C30.0013 30.5501 28.8813 31.6701 27.5013 31.6701C26.1213 31.6701 25.0013 30.5501 25.0013 29.1701Z"></path>
                      <path d="M38.3353 13.3367H35.002V20.0033H38.3353V13.3367Z"></path>
                      <path d="M5.0013 13.3367H1.66797V20.0033H5.0013V13.3367Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Commute easy
                </div>
                <div className="text-[20px] leading-[1.625]">
                  In a non-COVID world, get up to $270 per month for your
                  commuting and parking needs.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M18.334 8.33325V9.99992H21.6673V8.33325C21.6673 5.57659 19.424 3.33325 16.6673 3.33325H13.334V6.66659H16.6673C17.5857 6.66659 18.334 7.41492 18.334 8.33325Z"></path>
                      <path d="M30.0007 3.33325C30.0007 3.33325 26.6673 3.33325 25.0007 4.99992C23.334 6.66659 23.334 9.99992 23.334 9.99992C23.334 9.99992 26.6673 9.99992 28.334 8.33325C30.0007 6.66659 30.0007 3.33325 30.0007 3.33325Z"></path>
                      <path d="M28.3007 20.9451C27.984 16.5201 25.6673 11.6667 20.0007 11.6667C14.3373 11.6667 12.019 16.5201 11.7023 20.9451C10.099 22.5767 8.33398 24.6617 8.33398 28.3334C8.33398 32.3467 11.984 36.6667 20.0007 36.6667C28.0173 36.6667 31.6673 32.3467 31.6673 28.3334C31.6673 24.6617 29.9023 22.5767 28.3007 20.9451Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  The loadout
                </div>
                <div className="text-[20px] leading-[1.625]">
                  When we’re back in the office, enjoy daily catered lunches and
                  snacks, a desk fund to make your space yours, and whatever you
                  need for your computer setup, including a headphone allowance.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <path d="M34.9613 34.2583L33.2313 22.7217C33.0996 21.8483 32.6279 21.0617 31.9163 20.535C31.4796 20.215 30.9729 20.02 30.4479 19.94L27.7946 8.00333C27.6146 3.56333 23.9763 0 19.4946 0C15.0146 0 11.3746 3.56333 11.1963 8.00167L8.54294 19.9383C8.01627 20.02 7.50961 20.2133 7.07461 20.5333C6.36294 21.06 5.89128 21.8467 5.75794 22.72L4.02961 34.2567C3.75628 36.08 5.00961 37.7733 6.83127 38.0483L8.47961 38.2933C10.2996 38.5667 11.9963 37.3133 12.2696 35.4917L13.9996 23.955C14.2379 22.3667 13.3129 20.875 11.8663 20.3367L13.3063 13.86C14.8346 15.57 17.0296 16.6667 19.4946 16.6667C21.9596 16.6667 24.1546 15.57 25.6829 13.8633L27.1229 20.34C25.6746 20.8783 24.7513 22.37 24.9896 23.9583L26.7213 35.495C26.9946 37.315 28.6929 38.5683 30.5113 38.2967L32.1596 38.0517C33.9813 37.775 35.2346 36.08 34.9613 34.2583ZM19.4946 13.3333C16.7379 13.3333 14.4946 11.09 14.4946 8.33333C14.4946 5.57667 16.7379 3.33333 19.4946 3.33333C22.2513 3.33333 24.4946 5.57667 24.4946 8.33333C24.4946 11.09 22.2513 13.3333 19.4946 13.3333Z"></path>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Wellness on us
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Take advantage of a quarterly wellness allowance for your gym
                  membership or other wellness activities. Virtual yoga every
                  week!
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <path d="M34.2696 18.3649C32.578 10.9766 30.8313 3.33325 20.0013 3.33325C12.6496 3.33325 6.66797 9.31492 6.66797 16.6666V36.6666H26.668V31.6666H28.3346C30.173 31.6666 31.668 30.1716 31.668 28.3333V23.3333H35.4696C35.4696 23.3333 34.4863 19.3199 34.2696 18.3649ZM20.0013 23.3133C20.0013 23.3133 13.3346 18.4666 13.3346 14.8733C13.3346 11.4616 18.5196 9.97825 20.0013 14.4599C21.483 9.97992 26.668 11.4616 26.668 14.8733C26.668 18.4666 20.0013 23.3133 20.0013 23.3133Z"></path>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Transgender benefits
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Discord will reimburse up to $20,000 for any procedure related
                  to transition.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M6.25 33L5 38H15L13.75 33H6.25Z"></path>
                      <path d="M26.25 33L25 38H35L33.75 33H26.25Z"></path>
                      <path d="M40 18.4167V15.9167C36.06 15.9167 32.7583 13.2817 31.6667 9.695V3H28.3333V9.695C27.2417 13.2817 23.94 15.9167 20 15.9167C16.06 15.9167 12.7583 13.2817 11.6667 9.695V3H8.33333V9.695C7.24167 13.2817 3.94 15.9167 0 15.9167V18.4167C3.305 18.4167 6.27333 16.975 8.33333 14.6983V23H0V26.3333H8.33333V31.3333H11.6667V26.3333H28.3333V31.3333H31.6667V26.3333H40V23H31.6667V14.6983C33.7267 16.975 36.695 18.4167 40 18.4167ZM28.3333 23H11.6667V14.6983C13.7267 16.975 16.695 18.4167 20 18.4167C23.305 18.4167 26.2733 16.975 28.3333 14.6983V23Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Discord HQ
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Our office is located in Potrero Hill, a little neighborhood
                  in San Francisco near awesome coffee and food.
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12 px-[30px]">
                <div className="mb-4">
                  <svg
                    fill="#64f391"
                    width="40px"
                    height="40px"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path d="M11.6858 6.87329L5.17578 9.76662L20.0008 16.5033L25.7324 13.9L11.6858 6.87329Z"></path>
                      <path d="M29.6359 12.1233L34.8242 9.76658L20.6775 3.47825C20.2459 3.28492 19.7542 3.28492 19.3242 3.47825L15.6309 5.12159L29.6359 12.1233Z"></path>
                      <path d="M21.666 19.4068V36.0834L35.676 29.8568C36.2793 29.5918 36.666 28.9934 36.666 28.3351V12.5901L21.666 19.4068Z"></path>
                      <path d="M18.334 19.4068L3.33398 12.5901V28.3351C3.33398 28.9951 3.72065 29.5918 4.32398 29.8584L18.334 36.0834V19.4068ZM6.66732 23.3351V18.3351L15.0007 21.6684V26.6684L6.66732 23.3351Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="mb-4 text-[20px] leading-[140%]">
                  Relocation
                </div>
                <div className="text-[20px] leading-[1.625]">
                  Excellent relocation bonuses for new hires moving to San
                  Francisco (once it’s safe to return).
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#2c2f33] py-[120px] w-full flex items-center flex-col text-white ">
              <div className="w-full max-w-[1260px] gird grid-cols-12 box-border gap-5 py-0 px-[40px] ">
                      <div className="text-white col-span-12 mb-[120px] text-[24px] leading-[140%]">
                        <p>If you're wanting to work with a motivated team on something that gives millions of users a space to find belonging, check out the four values of working at Discord <a href="/" className="text-blue-800">on our blog </a>. For all roles, we're hiring people to join us in our beautiful San Francisco office (when it reopens), and for select, indicated positions, we're currently open to having people join our team remotely in these states:</p>
                        <p className="mt-[34px] text-center">Alabama - Arizona - California - Colorado - District of Columbia - Florida - Georgia - Illinois - Iowa - Massachusetts - Maryland - Michigan - Minnesota - Montana - Kansas - Nevada - New Jersey - New York - North Carolina - Oklahoma - Oregon - Pennsylvania - Texas - Virginia - Washington</p>
                      </div>
              </div>

              <div className="w-full">
                  <div className="mb-[10px] w-full overflow-hidden relative">
                    <div className="flex translate-x-1/4">
                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className=" w-full h-0 pb-[56.25%]">
                              <img className="rounded-2xl w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className=" w-full h-0 pb-[56.25%]">
                              <img className=" rounded-2xl w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                      <div className=" w-[640px] flex-shrink-0 ">
                        <div className="py-0 px-[20px]">
                          <div className="rounded-2xl w-full h-0 pb-[56.25%]">
                              <img className="w-full h-auto" src={careers1}></img>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="absolute top-0 bottom-0 right-0 left-0 select-none">
                        <div className="flex items-center w-full h-full justify-between"> 
                          <div className="m-[8px] w-[40px] h-[40px] cursor-pointer rounded-[50%] bg-[#292c30] justify-center flex items-center">
                            <svg 
                            className="arrowLeft-1uowgb"
                            width="32px"
                            height="32px"
                            viewBox="0 0 32 32">
                            <path d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z"></path>
                            </svg>
                          </div>

                          <div className="m-[8px] w-[40px] h-[40px] cursor-pointer rounded-[50%] bg-[#292c30] justify-center flex items-center">
                            <svg 
                            className="arrowLeft-1uowgb"
                            width="32px"
                            height="32px"
                            viewBox="0 0 32 32">
                            <path d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z"></path>
                            </svg>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Careers;
