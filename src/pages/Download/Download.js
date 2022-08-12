import React, { Fragment, useState } from "react";
import DownloadBanner from "../../assets/Download.svg";
import iOS from "../../assets/ios.svg";
import Mac from "../../assets/Mac.svg";
import Linux from "../../assets/Linux.svg";
import Android from "../../assets/Android.svg";
import HeaderBlack from "../../components/HeaderBlack";
import Footer from "../../components/Footer";
function Download() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  const [show1, setShow1] = useState(true);
  const handleClick1 = () => {
    setShow1(!show1);
  };
  return (
    <Fragment>
      <HeaderBlack></HeaderBlack>
      <header className="bg-[#23272a] lg:py-40 px-2 lg:pt-52 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap flex-row lg:flex-row-reverse my-auto mx-auto">
          <div className="w-full text-black  lg:pl-40 lg:w-1/2">
            <img className="" src={DownloadBanner} alt="Gambar2" />
          </div>
          <div className="w-full lg:pl-4 lg:pt-6 lg:w-1/2 text-white">
            <h1 className="font-bold text-3xl lg:text-5xl pt-3 mb-5">
              GET DISCORD FOR ANY DEVICE
            </h1>
            <h2 className="mb-5">
              An adventure awaits. Hang out with your friends on our desktop app
              and keep the conversation going on mobile.
            </h2>
            <div className="cursor-pointer w-auto rounded-[28px] lg:inline-flex lg:mr-5  mt-6 inline-flex text-center bg-[#5865f2] px-8 font-medium leading-[24px] py-4 text-white box-border fill-white">
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
            <h2 className="lg:inline-flex lg:ml-5 text-center font-medium leading-[24px] mb-8">
              Windows 7 or higher
            </h2>
          </div>
        </div>
      </header>

      {/* <div className="py-[120px] w-full flex text-center items-center flex-col">
        <div className="w-full box-border grid grid-cols-4 gap-x-0 gap-y-[20px] p-[24px]">  
          <div className="col-span-12 grid grid-cols-[1] gap-x-[20px] gap-y-[20px] grid-rows-[156px] ">
            <div className="overflow-hidden h-[600px] box-border col-span-1 row-span-2 rounded-2xl p-[56px] bg-[#f6f6f6] text-black">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">iOS</h3>
                <a className="">
                  <button className="rounded-[28px] mt-[16px]  text-xl text-white bg-slate-800 py-[16px] px-[32px]">
                    Download
                  </button>
                </a>
                <img src={iOS} className="mt-6 w-auto"></img>
              </div>
            </div>

            <div className="col-start-2 col-end-auto row-start-2 row-end-[2] h-[600px] overflow-hidden box-border rounded-2xl p-[56px] bg-[#f6f6f6]">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">Android</h3>
                <a href="/Download">
                  <button className="rounded-[28px] mt-[16px]  text-white text-xl bg-slate-800 py-[16px] px-[32px]">
                    Download
                  </button>
                </a>
                <img src={Android} className="mt-6 w-auto"></img>
              </div>
            </div>

            <div className="col-start-1 col-end-auto row-start-2 row-end-auto h-[600px] overflow-hidden box-border rounded-2xl p-[56px] bg-[#f6f6f6]">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">Linux</h3>
                <a href="/Download">
                  <button className="rounded-[28px] mt-[16px]  text-white text-xl bg-slate-800 py-[16px] px-[32px]">
                    Download
                  </button>
                </a>
                <img src={Linux} className="mt-[64px] w-auto"></img>
              </div>
            </div>

            <div className="col-start-2 col-end-auto row-start-4 row-end-auto h-[600px] overflow-hidden box-border rounded-2xl p-[56px] bg-[#f6f6f6]">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">Mac</h3>
                <a href="/Download">
                  <button className="rounded-[28px] mt-[16px]  text-white text-xl bg-slate-800 py-[16px] px-[32px]">
                    Download
                  </button>
                </a>
                <img src={Mac} className="mt-6 w-auto"></img>
              </div>
            </div>

            <div className="col-start-1 col-end-auto row-start-5 row-end-auto h-[600px] overflow-hidden box-border rounded-2xl py-[48px] px-[40px] bg-[#f6f6f6]">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">Feeling experimental?</h3>
                <div className="my-4">Try our Public Test Build and test new features before they launch.</div>
                  <button className="rounded-[28px] mt-[16px] relative text-white text-xl bg-slate-800 py-[16px] px-[32px]">
                    Download Public Test Build
                  </button>
        
        
              </div>
            </div>

          </div>
        </div>
      </div> */}
      <div className="w-full px-[120px] flex flex-col items-center my-[50px] ">
        <div className="w-full box-border grid grid-cols-8 gap-5 py-0 px-[40px] container">
          <div className="grid-rows-[156px_auto_156px_auto_156px] grid-cols-[1fr_1fr] col-span-12 grid gap-5">
            <div className="h-[600px] rounded-2xl p-[56px] col-start-[span_1] col-end-auto row-start-[span_2] row-end-auto bg-[#f6f6f6] mx-auto overflow-hidden">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">iOS</h3>
                <a
                  href="/Download"
                  className="rounded-[28px] mt-[16px]  text-white text-xl bg-slate-800 py-[16px] px-[32px] inline-flex box-border leading-6"
                >
                  Download
                </a>
              </div>
              <div className=" mt-[64px] w-full">
                <img src={iOS} className="object-bottom " alt="GambarIOS"></img>
              </div>
            </div>

            <div className="h-[600px] rounded-2xl p-[56px] col-start-2 col-end-auto row-start-2 row-end-[span_2] bg-[#f6f6f6] mx-auto overflow-hidden">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">Android</h3>
                <a
                  href="/Download"
                  className="rounded-[28px] mt-[16px]  text-white text-xl bg-slate-800 py-[16px] px-[32px] inline-flex box-border leading-6"
                >
                  Download
                </a>
              </div>
              <img
                src={Android}
                className="object-contain mt-[64px] w-auto"
                alt="GambarAndroid"
              ></img>
            </div>

            <div className="h-[600px] rounded-2xl p-[56px] col-start-[span_1] col-end-auto row-start-[span_2] row-end-auto bg-[#f6f6f6] mx-auto">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">Linux</h3>
                <button
                  onClick={handleClick1}
                  className="rounded-[28px] mt-[16px]  text-white text-xl bg-slate-800 py-[16px] px-[32px] inline-flex box-border leading-6"
                >
                  Download
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    className="mr-2 "
                    fill="white"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </button>
              </div>
              <div
                className={` ${
                  !show1
                    ? "absolute text-left ml-24 p-4 mt-2 w-[190px] box-border rounded-xl drop-shadow-lg text-black bg-white"
                    : "hidden"
                }`}
              >
                <div className="block rounded-lg ">
                  <a
                    href="support.js"
                    className="block p-2 cursor-pointer hover:text-blue-700 hover:underline hover:bg-[#f5f5f5] "
                  >
                    deb
                  </a>
                </div>
                <div className="block rounded-lg  ">
                  <a
                    href="support.js"
                    className="block p-2 cursor-pointer hover:text-blue-700 hover:underline hover:bg-[#f5f5f5]  "
                  >
                    tar.gz
                  </a>
                </div>
              </div>
              <img src={Linux} className="object-cover mt-[64px] w-auto" alt="GambarLinux"></img>
            </div>

            <div className="h-[600px] rounded-2xl p-[56px] col-start-[span_1] col-end-auto row-start-[span_2] row-end-auto bg-[#f6f6f6] mx-auto overflow-hidden">
              <div className="flex flex-col items-center">
                <h3 className="font-medium text-3xl">Mac</h3>
                <a
                  href="/Download"
                  className="rounded-[28px] mt-[16px]  text-white text-xl bg-slate-800 py-[16px] px-[32px] inline-flex box-border leading-6"
                >
                  Download
                </a>
              </div>
              <img src={Mac} className="object-contain mt-[64px] w-auto" alt="GambarMac"></img>
            </div>

            <div className=" rounded-2xl py-[48px] px-[40px] col-start-[span_1] col-end-auto row-start-[span_2] row-end-auto bg-[#f6f6f6] mx-auto">
              <h3 className="font-medium text-[32px] leading-[120%]">
                Feeling experimental?
              </h3>
              <div className="my-[16px] text-[20px] leading-[1.625]">
                Try our Public Test Build and test new features before they
                launch.
              </div>
              <div className="relative">
                <button
                  onClick={handleClick}
                  className="cursor-pointer w-auto rounded-[28px] lg:inline-flex lg:mr-5  mt-6 inline-flex text-center bg-[#23272a] px-8 font-medium leading-[24px] py-4 text-white box-border fill-white"
                >
                  Download Public Test Build
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    className="mr-2 "
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </button>
                <div
                  className={` ${
                    !show
                      ? "absolute text-left p-4 mt-2 w-[300px] box-border rounded-xl drop-shadow-lg text-black bg-white"
                      : "hidden"
                  }`}
                >
                  <div className="block rounded-lg  ">
                    <a
                      href="support.js"
                      className="block p-2 cursor-pointer hover:text-blue-700 hover:underline hover:bg-[#f5f5f5] "
                    >
                      Windows
                    </a>
                  </div>
                  <div className="block rounded-lg ">
                    <a
                      href="support.js"
                      className="block p-2 cursor-pointer hover:text-blue-700 hover:underline hover:bg-[#f5f5f5] "
                    >
                      Linux deb
                    </a>
                  </div>
                  <div className="block rounded-lg  ">
                    <a
                      href="support.js"
                      className="block p-2 cursor-pointer hover:text-blue-700 hover:underline hover:bg-[#f5f5f5]  "
                    >
                      Linux tar.gz
                    </a>
                  </div>
                  <div className="block rounded-lg ">
                    <a
                      href="support.js"
                      className="block p-2 cursor-pointer hover:text-blue-700 hover:underline hover:bg-[#f5f5f5] "
                    >
                      Mac
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Download;
