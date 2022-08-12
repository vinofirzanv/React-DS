import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/footer.png";
import ft2 from "../../assets/ft2.png";
import android from "../../assets/android2.png";
import windows from "../../assets/windows.png";
import osx from "../../assets/osx.png";
import apple from "../../assets/apple.png";

import logonav from "../../assets/logo-support.svg";
import logofooter from "../../assets/Logo-White.png";

function Feedback() {
  const ft = {
    backgroundImage: `url("${footer}")`,
    backgroundSize: "814px 145px",
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [show2, setShow2] = useState(false);
  const handleClick2 = () => {
    setShow2(!show2);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Fragment>
      <header className="w-[90%] p-0 max-w-[1160px] mx-auto my-0 relative items-center flex justify-between h-[71px] box-border">
        <div className="logo">
          <Link to="/Content" className="px-[10px]">
            <img src={logonav} className="max-h-[37px]" alt="Gambar1"></img>
          </Link>
        </div>

        <div className="nav-wrapper">
          <nav className="hidden lg:relative lg:inline-block lg:whitespace-nowrap lg:py-0 lg:pl-0 lg:pr-[15px] text-blue-600">
            <Link
              to={"/Feedback"}
              className="w-auto py-0 px-[20px] hover:underline"
            >
              {" "}
              Feedback
            </Link>

            <div className="dropdown relative inline-block hover:underline">
              <button onClick={handleClick} className="hover:underline">
                English (US)
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>

              {show && (
                <span className=" absolute dropdown-menu min-w-[170px] left-auto right-0 bg-[#fff] mt-[40px] py-[10px] border border-slate-500 rounded px-0  text-left z-[1000] text-black">
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Dansk
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Deutsch
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Español
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Français
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    हिन्दी (भारत)
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Italiano
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    日本語
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    한국어
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Nederlands
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Polski
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Português do Brasil
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Русский
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    svenska
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    ไทยไทย
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Türkçe
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    Tiếng Việt
                  </a>
                  <a
                    href="support.js"
                    className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block hover:bg-[#f5f5f5]"
                  >
                    繁體中文
                  </a>
                </span>
              )}
            </div>
            <Link
              to={"/SubmitaRequest"}
              className="w-auto py-0 px-[20px] hover:underline"
            >
              {" "}
              Submit a request
            </Link>
          </nav>

          <button
            className=" text-blue-600  cursor-pointer text-xl px-3  py-0 lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
            // onClick={setNavbarOpen}
          >
            <ion-icon name={navbarOpen ? "close" : "menu"}></ion-icon>
          </button>

          <a
            href="feedback.js"
            className="text-blue-600  w-auto py-0 px-[20px] hover:underline"
          >
            Sign in
          </a>
        </div>
      </header>

      <div
        className={
          !navbarOpen
            ? "hidden absolute dropdown-menu w-full bg-[#fff]  py-[10px]  px-0  text-center z-[1000] text-black"
            : "lg:hidden"
        }
      >
        <Link
          to={"/Feedback"}
          className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent text-center block"
        >
          {" "}
          Feedback
        </Link>

        <div className="dropdown cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block text-center">
          <button onClick={handleClick}>
            English (US)
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>

          {show && (
            <span className=" absolute dropdown-menu min-w-[170px]  bg-[#fff] mt-[40px] py-[10px]  px-0 text-left z-[1000] text-black">
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Dansk
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Deutsch
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Español
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Français
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                हिन्दी (भारत)
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Italiano
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                日本語
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                한국어
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Nederlands
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Polski
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Português do Brasil
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Русский
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                svenska
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                ไทยไทย
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Türkçe
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                Tiếng Việt
              </a>
              <a
                href="support.js"
                className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
              >
                繁體中文
              </a>
            </span>
          )}
        </div>
        <Link to={"/SubmitaRequest"}
          className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block text-center"
        >
          {" "}
          Submit a request
        </Link>
      </div>

      <main className="block box-border">
        <div className="border-t-2 border-solid border-[#ddd]"></div>
        <div className="max-w-[1160px] my-0 mx-auto py-0">
          <nav className="items-baseline flex-row flex justify-between mt-[30px] mb-[30px] min-h-[50px] pb-[15px]">
            <ol>
              <li className="text-[#666] inline font-light text-[15px] overflow-hidden text-ellipsis">
                <Link to={"/Support"} className="text-blue-600 hover:underline">
                  Discord
                </Link>
              </li>
              {" > "}
              <li className="text-[#666] inline font-light text-[15px] overflow-hidden text-ellipsis">
                <Link
                  to={"/Feedback"}
                  className="text-blue-600 text-style: underline"
                >
                  Feedback
                </Link>
              </li>
            </ol>

            <div className="relative ">
              <svg
                className="top-1/2 translate-y-[-50%] absolute left-[15px] z-10"
                width="18px"
                height="18px"
                viewBox="0 0 12 12"
              >
                <g>
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4"
                    fill="none"
                    stroke="#777"
                  ></circle>
                  <path d="M11 11L7.5 7.5" stroke="#777"></path>
                </g>
              </svg>

              <form className="relative">
                <input
                  className="min-w-[300px] border-solid rounded-[30px] border-[1px] border-[#666] h-[40px] pl-[40px] pr-[20px] w-full"
                  placeholder="Search"
                />
              </form>
            </div>
          </nav>

          <header className="mb-[30px] items-baseline flex-row m-0 flex flex-wrap content-between">
            <span className="relative inline-block">
              <button
                className="border-none p-0 text-blue-600 whitespace-pre m-[20px]"
                onClick={handleClick2}
              >
                <h2 className="inline-block">Community Topics </h2>

                <svg
                  className="inline-block align-middle "
                  width="12px"
                  height="12px"
                  viewBox="0 0 12 12"
                  strokeLinecap="round"
                >
                  <path
                    d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"
                    stroke="#777"
                  ></path>
                </svg>
              </button>
              {/* menu dropdownnya */}
              {show2 && (
                <span className="block bg-[#fff] border-[1px] border-solid border-[#d8d8d8] text-[14px] rounded left-0 mt-[1px] min-w-[170px] py-[10px] px-0 absolute text-left z-50">
                  <Link
                    to={"/Feedback"}
                    className=" cursor-pointer block text-[#333] py-[7px] px-[15px] hover:bg-slate-100"
                  >
                    <p className="inline-block">Show topics</p>
                    <svg
                      className="inline-block ml-[10px]"
                      width="12px"
                      height="12px"
                      viewBox="0 0 20 20"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <path
                        d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z"
                        stroke="#777"
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    to={"/CommunityPost"}
                    className=" cursor-pointer block text-[#333] py-[7px] px-[15px] hover:bg-slate-100"
                  >
                    Show all posts
                  </Link>
                </span>
              )}
            </span>
          </header>

          <div className="w-full max-w-none">
            <ul className="my-0 mx-[-15px] flex flex-wrap content-start list-none p-0">
              <li className="mt-0 mx-[15px] mb-[30px] border-[1px] border-solid border-[#5865F2] box-border flex-shrink-0 flex-grow basis-[340px] flex flex-col justify-center max-w-full text-center">
                <Link
                  to={"/API"}
                  className="text-[#5865F2] py-[20px] px-[30px] bg-transparent text-center"
                >
                  <span className="mb-0 py-5 text-center "> API </span>
                  <span className="m-0 text-center"></span>
                  <ul className="mt-[20px] mx-0 mb-0 block list-none p-0 text-center">
                    <li className="contents-[\uB7] my-0 mx-[5px] inline text-[#666] text-[13px] font-light text-center">
                      2906 posts
                    </li>
                    <li className="inline text-[#666] text-[13px] font-light text-center">
                      781 followers
                    </li>
                  </ul>
                </Link>
              </li>

              <li className="mt-0 mx-[15px] mb-[30px] border-[1px] border-solid border-[#5865F2] box-border flex-shrink-0 flex-grow basis-[340px] flex flex-col justify-center max-w-full text-center">
                <Link
                  to={"/API"}
                  className="text-[#5865F2] py-[20px] px-[30px] bg-transparent text-center"
                >
                  <span className="mb-0 py-5 text-center "> API </span>
                  <span className="m-0 text-center"></span>
                  <ul className="mt-[20px] mx-0 mb-0 block list-none p-0 text-center">
                    <li className="contents-[\uB7] my-0 mx-[5px] inline text-[#666] text-[13px] font-light text-center">
                      2906 posts
                    </li>
                    <li className="inline text-[#666] text-[13px] font-light text-center">
                      781 followers
                    </li>
                  </ul>
                </Link>
              </li>

              <li className="mt-0 mx-[15px] mb-[30px] border-[1px] border-solid border-[#5865F2] box-border flex-shrink-0 flex-grow basis-[340px] flex flex-col justify-center max-w-full text-center">
                <Link
                  to={"/API"}
                  className="text-[#5865F2] py-[20px] px-[30px] bg-transparent text-center"
                >
                  <span className="mb-0 py-5 text-center "> API </span>
                  <span className="m-0 text-center"></span>
                  <ul className="mt-[20px] mx-0 mb-0 block list-none p-0 text-center">
                    <li className="contents-[\uB7] my-0 mx-[5px] inline text-[#666] text-[13px] font-light text-center">
                      2906 posts
                    </li>
                    <li className="inline text-[#666] text-[13px] font-light text-center">
                      781 followers
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </div>

          <section className="pt-[50px] text-center max-w-[1160px] my-0 mx-auto pb-0 px-[5%] ">
            <h2 className="text-[16px] mb-[20px] mt-0 font-normal text-[#4f545c] leading-[1.5]">
              Didn't find what you were looking for?
            </h2>
            <Link
              to={"/"}
              className="w-auto cursor-pointer bg-[#5865F2] hover:bg-blue-800 border-0 rounded-[4px] text-[#ffff] leading-[2.72] font-normal text-[14px] min-w-[190px] py-0 px-[20px] inline-block"
            >
              New post
            </Link>
          </section>
        </div>
      </main>

      <footer className="bg-[#23272A] overflow-hidden m-0 p-0 mt-[70px] w-full box-border">
        <div className="w-full mx-auto max-w-[1100px] relative my-0 box-border">
          <div className="text-center flex-col flex items-center">
            <a href="/">
              <button
                className="bg-[#3BA55C] whitespace-nowrap rounded-3xl 
                    text-center items-center cursor-pointer text-white mx-0 my-[50px] 
                    w-[250px] h-[42px] p-0"
              >
                {" "}
                Learn More
              </button>
            </a>

            <div className="w-[814px] h-[145px] relative" style={ft}>
              <a
                href="/Login"
                className="left-[87px] absolute top-[61px] opacity[.5]"
              >
                <img src={ft2} alt="Gambar2"></img>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.discord"
                className="left-[378px] absolute top-[61px] opacity-[.5]"
              >
                <img src={android} alt="Gambar3"></img>
              </a>
              <a
                href="https://apps.apple.com/us/app/discord-chat-for-games/id985746746"
                className="left-[470px] absolute top-[61px] opacity-[.5]"
              >
                <img src={apple} alt="Gambar4"></img>
              </a>
              <a
                href="/"
                className="left-[622px] absolute top-[61px] opacity-[.5]"
              >
                <img src={windows} alt="Gambar4"></img>
              </a>
              <a
                href="/"
                className="left-[694px] absolute top-[61px] opacity-[.5]"
              >
                <img src={osx} alt="Gambar5"></img>
              </a>
            </div>
          </div>

          <nav className="border-t-[white] border-t-[1px] border-t-solid items-center flex px-[30px] pb-[50px] mx-autopt-0">
            <div className=" flex flex-row h-[75px] mt-[20px]">
              <a href="/" className="h-[38px] block">
                <img
                  src={logofooter}
                  className="w-[130px] h-[36px]"
                  alt="GambarFooter"
                ></img>
              </a>
            </div>
            <div className="flex-grow-[1] h-full basis-[250px]"></div>

            <div className="flex h-full mt-30 mb-0 mx-0 w-full">
              <div className="flex flex-col flex-wrap justify-between items-start w-full">
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Download
                  </a>
                </div>
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Help & Support
                  </a>
                </div>
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Feedback
                  </a>
                </div>
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Status
                  </a>
                </div>
              </div>
              <div className="flex flex-col flex-wrap justify-between items-start w-full">
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Company
                  </a>
                </div>
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Jobs —
                  </a>{" "}
                  <span className="text-green-500">we're hiring</span>
                </div>
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Blog
                  </a>
                </div>
                <div className="py-[8px] px-0 text-left">
                  <a href="/" className="opacity-[.3] text-white">
                    Term & Privacy
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </Fragment>
  );
}

export default Feedback;
