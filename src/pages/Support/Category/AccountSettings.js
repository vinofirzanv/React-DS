import React, { Fragment, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import footer from "../../../assets/footer.png";
import ft2 from "../../../assets/ft2.png";
import android from "../../../assets/android2.png";
import windows from "../../../assets/windows.png";
import osx from "../../../assets/osx.png";
import apple from "../../../assets/apple.png";

import logonav from "../../../assets/logo-support.svg";
import logofooter from "../../../assets/Logo-White.png";

function DiscordInterface() {
  const ft = {
    backgroundImage: `url("${footer}")`,
    backgroundSize: "814px 145px",
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const navigate = useNavigate();
  function handleChange(e){
    navigate(`/${e.target.value}`)
  }

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
        <div className="max-w-[1160px] my-0 mx-auto py-0 ">
          <nav className="items-baseline flex-row flex justify-between mt-[30px] mb-[30px] min-h-[50px] pb-[15px]">
            <ol>
              <li className="text-[#666] inline font-light text-[15px] overflow-hidden text-ellipsis">
                <Link to={"/Support"} className="text-blue-600 hover:underline">
                  Discord
                </Link>
              </li>
              {" > "}
              <li className="text-[#666] inline font-light text-[15px] overflow-hidden text-ellipsis">
              Account Settings
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

          <header>
          <h1 className="text-[32px]">Account Settings</h1>         
          </header>
         
          <header className="mt-2">
            <div className="flex flex-wrap flex-row  my-auto mx-auto">
                <div className="w-full text-black lg:w-1/2 text-[15px]">
                    <ul>
                        <li className="py-[15px] hover:underline font-medium">
                            <Link to={"/RecentIssues"}>Login and Verification</Link>
                        </li>
                        <li className="py-[15px] hover:underline">
                            <Link to={"/AMDGPU"}>AMD GPU/CPU RTC_CONNECTING Troubleshooting</Link>
                        </li>
                        <li className="py-[15px] hover:underline">
                            <Link to={"/AMDGPU"}>[Known Issue] Voice Connection Interruption (December 3rd, 2021)</Link>
                        </li>
                        <li className="py-[15px] hover:underline">
                            <Link to={"/AMDGPU"}>Update on Premium Services in Russia</Link>
                        </li>
                       
                    </ul>

                    <Link to={"/RecentIssues"} className="hover: underline text-blue-600">See all 9 article</Link>
                </div>

              
                <div className="w-full text-black lg:w-1/2">
                    <ul>
                        <li className="py-[15px] text-[16px] hover:underline font-medium">
                            <Link to={"/RecentIssues"}>Account Connections</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Know What I Meme FAQ</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Summer 2022 Nitro BOGO FAQ</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Why was my message not delivered?</Link>
                        </li>
                    </ul>

                    <Link to={"/RecentIssues"} className="hover: underline text-blue-600">See all 78 article</Link>
                </div>
                

                
            </div>

            <div className="flex flex-wrap flex-row  mt-10 mx-auto">
                <div className="w-full text-black lg:w-1/2 text-[15px]">
                    <ul>
                        <li className="py-[15px] hover:underline font-medium">
                            <Link to={"/RecentIssues"}>Account Troubleshooting</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Know What I Meme FAQ</Link>
                        </li>
                       
                    </ul>

                    <Link to={"/RecentIssues"} className="hover: underline text-blue-600">See all 9 article</Link>
                </div>

              
                <div className="w-full text-black lg:w-1/2">
                    <ul>
                        <li className="py-[15px] text-[16px] hover:underline font-medium">
                            <Link to={"/RecentIssues"}>Account Customization</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Know What I Meme FAQ</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Summer 2022 Nitro BOGO FAQ</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Why was my message not delivered?</Link>
                        </li>
                    </ul>

                    <Link to={"/RecentIssues"} className="hover: underline text-blue-600">See all 78 article</Link>
                </div>

                
                
            </div>

            <div className="flex flex-wrap flex-row  mt-10 mx-auto">
                <div className="w-full text-black lg:w-1/2 text-[15px]">
                    <ul>
                        <li className="py-[15px] hover:underline font-medium">
                            <Link to={"/RecentIssues"}>Account Notifications</Link>
                        </li>
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Know What I Meme FAQ</Link>
                        </li> 
                        <li className="py-[15px] text-[16px] hover:underline">
                            <Link to={"/AMDGPU"}>Know What I Meme FAQ</Link>
                        </li>
                       
                    </ul>

                    <Link to={"/RecentIssues"} className="hover: underline text-blue-600">See all 9 article</Link>
                </div>

            
                
                
            </div>
        </header>
          
         
          
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

export default DiscordInterface;
