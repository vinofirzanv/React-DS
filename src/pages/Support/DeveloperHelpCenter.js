import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/bg support.png";
import sp1 from "../../assets/support1.svg";
import sp2 from "../../assets/support2.svg";
import sp3 from "../../assets/support3.svg";
import sp4 from "../../assets/support4.svg";
import sp5 from "../../assets/support5.svg";
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

function DeveloperHelpCenter() {
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
          Developer Help Center
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
          Welcome to Discord Developer Headquarters!
          </h1>
          <p className="text-[16px] font-normal mt-5 mb-[75px]">
          Find articles to help you make apps, bots and everything in between. Except pancakes, sorry.
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
                API
                </h2>
                <hr className="h-[1px] border-none-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                Learn about our API. It’s a fun API, we promise.
                </h3>
              </li>
            </Link>

            <Link to={"/DiscordInterface"} className="text-[#5865F2] bg-transparent">
              <li
                className="bg-white w-[240px] h-[260px] shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat2}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                App Development
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                It’s an App! (You have to develop it first but yeah.)
                </h3>
              </li>
            </Link>

            <Link to={"/AccountSettings"} className="text-[#5865F2] bg-transparent">
              <li
                className="  bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] "
                style={cat3}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                Application Ownership
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                App sharing is caring, but on Discord it’s also kinda sorta permanent.
                </h3>
              </li>
            </Link>

            <Link to={"/GettingStarted"} className="text-[#5865F2] bg-transparent">
              <li
                className=" bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat4}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                Developer Policy
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                The Discord developer rule book. More fun than a regular rule book.
                </h3>
              </li>
            </Link>

           
            <Link to={"/ServerSetup"} className="text-[#5865F2] bg-transparent">
              <li
                className="  bg-white shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat5}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                F.A.Q.s
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                Answers for all those questions you frequently ask
                </h3>
              </li>
            </Link>
          
          </ul>
        </section>

        <section className="text-center">
          <pre> </pre>
          <h2>Didn't find what you were looking for?</h2>
        </section>

        <section>
          <ul className="px-[5px] m-0 flex flex-row flex-wrap justify-center w-full">
            <a href="https://tailwindcss.com/docs/display">
              <li
                className="  bg-[#ccc] shadow-xl p-[5px] m-[10px] text-[#ccc] font-bold text-[3rem] text-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px]"
                style={cat11}
              >
                <h2 className="text-[22px] font-normal text-[#5865F2] mt-[116px]">
                GameSDK
                </h2>
                <hr className="h-[1px] border-none bg-[#99aab5] opacity-[0.5] w-[50px] mx-auto mt-[-6px] mb-[20px]"></hr>
                <h3 className="text-[14px] font-normal w-[200px] mt-[-10px] mr-auto mb-0 ml-auto text-[#68727e]">
                Legacy docs for our game store.
                </h3>
              </li>
            </a>

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
                Tweet us with quick questions, pancake recipes, whatever you want.
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

export default DeveloperHelpCenter;
