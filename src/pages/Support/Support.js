import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/bg support.png";
import sp1 from "../../assets/support1.svg";
import sp2 from "../../assets/support2.svg";
import sp3 from "../../assets/support3.svg";
import sp4 from "../../assets/support4.svg";
import sp5 from "../../assets/support5.svg";
import sp6 from "../../assets/support6.svg";
import sp7 from "../../assets/support7.svg";
import sp8 from "../../assets/support8.svg";
import sp9 from "../../assets/support9.svg";
import sp10 from "../../assets/support10.svg";
import sp11 from "../../assets/support11.svg";
import sp12 from "../../assets/support12.svg";
import footer from "../../assets/footer.png";
import ft2 from "../../assets/ft2.png";
import android from "../../assets/android2.png";
import windows from "../../assets/windows.png";
import osx from "../../assets/osx.png";
import apple from "../../assets/apple.png";

import logonav from "../../assets/logo-support.svg";
import logofooter from "../../assets/Logo-White.png";

function Support() {
  const bgf = {
    backgroundImage: `url("${bg}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const ft = {
    backgroundImage: `url("${footer}")`,
    backgroundSize: "814px 145px",
  };
  const cat1 = {
    backgroundImage: `url("${sp1}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat2 = {
    backgroundImage: `url("${sp2}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat3 = {
    backgroundImage: `url("${sp3}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat4 = {
    backgroundImage: `url("${sp4}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat5 = {
    backgroundImage: `url("${sp5}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat6 = {
    backgroundImage: `url("${sp6}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat7 = {
    backgroundImage: `url("${sp7}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat8 = {
    backgroundImage: `url("${sp8}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat9 = {
    backgroundImage: `url("${sp9}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat10 = {
    backgroundImage: `url("${sp10}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat11 = {
    backgroundImage: `url("${sp11}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };
  const cat12 = {
    backgroundImage: `url("${sp12}")`,
    backgroundSize: "106px",
    width: "240px",
    height: "260px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "14px",
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  // const handleClickNav = () => {
  //   setNavbarOpen(!navbarOpen);
  // };

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

      <navsecond
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
      </navsecond>

      <header
        className=" mb-[60px] bg-center w-full h-[300px] px-[20px] py-0 text-center box-border"
        style={bgf}
      >
        <div className="relative top-1/2 translate-y-[-50%] mx-auto mt-0 max-w-[610px]">
          <h5 className="text-white text-[36px] font-bold pt-9 mb-[20px] text-center">
            Help Center
          </h5>
          <div className="top-[86%] translate-y-[-50%] z-[10] left-[15px] w-[18px] h-0 text-[#777]">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <form className="relative z-0">
            <input
              className="box-border rounded-[30px] z-0 h-[40px] pl-[40px] pr-[20px] w-full "
              placeholder="Search"
            ></input>
          </form>
        </div>
      </header>

      <main className="block">
        <section className="text-center">
          <h1 className="mt-[104px] text-[26px] font-normal mb-0">
            Need help? We've got your back.
          </h1>
          <p className="text-[16px] font-normal mt-5 mb-[75px]">
            From account settings to permissions, find help for everything
            Discord
            <br></br>If you're new to Discord and looking for tips, check out
            our{" "}
            <a href="//support.discord.com/hc/articles/360045138571" className="text-stlye: underline text-blue-600">
              Beginner's Guide
            </a>{" "}
          </p>
        </section>

        <section>
          <ul className="px-[5px] m-0 list-none flex flex-row flex-wrap justify-center w-full">
            <Link to={"/Announcement"}  className="text-[#5865F2] bg-transparent">
              <li
                className="bg-white w-[240px] h-[260px] shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat1}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Announcements
                </h2>
                <hr className="h-[1px] border-none-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  We've got our ear to the ground. Here's what you need to know.
                </h3>
              </li>
            </Link>

            <Link to={"/DiscordInterface"} className="text-[#5865F2] bg-transparent">
              <li
                className="bg-white w-[240px] h-[260px] shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat2}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Discord's Interface
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  WHAT DOES THIS BUTTON DO!?!11
                </h3>
              </li>
            </Link>
            <Link to={"/AccountSettings"} className="text-[#5865F2] bg-transparent">
              <li
                className="  bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] "
                style={cat3}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Account Settings
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  You're a special snowflake and so is your account.
                </h3>
              </li>
            </Link>
            <Link to={"/GettingStarted"} className="text-[#5865F2] bg-transparent">
              <li
                className=" bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat4}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Getting Started
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  Start off on the right foot! Not the left one!
                </h3>
              </li>
            </Link>

           
            <Link to={"/ServerSetup"} className="text-[#5865F2] bg-transparent">
              <li
                className="  bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat5}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Server Setup
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  Almost as exciting as interior decorating.
                </h3>
              </li>
            </Link>
          
            <Link to={"/CommunityPrograms"} className="text-[#5865F2] bg-transparent">
              <li
                className="   bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat6}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Community Programs
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  Bringing people together from all around the globe (and
                  occasionally Mars)
                </h3>
              </li>
            </Link>
            

           
            <Link to={"/PerksandSubscriptions"} className="text-[#5865F2] bg-transparent">
              <li
                className="   bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat7}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Perks and Subcriptions
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  Please don't shop until you drop. Let us help
                </h3>
              </li>
            </Link>


            <Link to={"/Billing"} className="text-[#5865F2] bg-transparent">
              <li
                className=" bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat8}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Billing
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  That feel when you look at your bank account.
                </h3>
              </li>
            </Link>

            <Link to={"/TrustySafety"} className="text-[#5865F2] bg-transparent">
              <li
                className="  bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat9}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Trust & Safety
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  Keep things safe & sound for you and your buddies.
                </h3>
              </li>
            </Link>

            <Link to={"/FAQ"} className="text-[#5865F2] bg-transparent">
              <li
                className=" bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat10}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  F.A.Q.s
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  All you can eat self-serve problem solving.
                </h3>
              </li>
            </Link>
          </ul>
        </section>

        <section className="text-center">
          <pre> </pre>
          <h2>Other ways to find help.</h2>
        </section>

        <section>
          <ul className="px-[5px] m-0 flex flex-row flex-wrap justify-center w-full">
          <Link to={"/DeveloperHelpCenter"}>
              <li
                className="  bg-[#ccc] shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat11}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Developer Support
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  Your home for support with developing bots, apps, & games
                  using our API and SDK!
                </h3>
              </li>
              </Link>

            <a href="https://twitter.com/discord">
              <li
                className="  bg-[#ccc] shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat12}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                  Twitter
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                  Have a quick question? hit us up on Twitter!
                </h3>
              </li>
            </a>
          </ul>
        </section>

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
      </main>
    </Fragment>
  );
}

export default Support;
