import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
function Roleofadministrators() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setIsHovering(false);
    } else {
      setIsHovering(true);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setIsHovering2(false);
    } else {
      setIsHovering2(true);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setIsHovering3(false);
    } else {
      setIsHovering3(true);
    }
  };

  const onMouseExit = () => {
    if (window.innerWidth < 960) {
      setIsHovering(false);
    } else {
      setIsHovering(false);
    }
  };
  const onMouseExit2 = () => {
    if (window.innerWidth < 960) {
      setIsHovering2(false);
    } else {
      setIsHovering2(false);
    }
  };
  const onMouseExit3 = () => {
    if (window.innerWidth < 960) {
      setIsHovering3(false);
    } else {
      setIsHovering3(false);
    }
  };

  return (
    <Fragment>
      <Header></Header>
      <header className="bg-white lg:py-5 px-2 sm:px-4 py-2.5 mt-[120px]">
        <div className="container grid mx-auto">
          <div className="lg:grid box-border hidden mb-[40px] w-full grid-cols-12 gap-y-0 gap-x-5 py-0 px-[40px]">
            <ul className="flex border-b-[2px] border-gray-300 col-span-12 ">
              <li className="relative mb-[-2px]  border-b-[2px]">
                <Link to={"/Safety"}>
                  <div className="cursor-pointer text-[#747f8d]">
                    <span className="flex pt-0 pb-[10px] px-[16px] items-center">
                      <span className="leading-[1.625] text-[20px]">
                        Safety Center
                      </span>
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#5865F2] border-[#5865F2] border-b-[2px]">
                  <span className=" leading-[1.625] text-[20px]">
                    Controlling Your Experince
                  </span>
                  <svg
                    fill="#5865F2"
                    width="24px"
                    height="24px"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>

                <div>
                  <ul
                    className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg  w-[356px] bg-white ${
                      isHovering ? "" : "hidden"
                    }`}
                  >
                    <li className="block rounded-lg hover:bg-gray-300 ">
                      <Link to={"/ControllingExperience1"}>
                        <div className="block p-2  cursor-pointer hover:bg-gray-400">
                          Four steps to a super safe account{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg  hover:bg-gray-300">
                      <Link to={"/ControllingExperience2"}>
                        <div className="block p-2 cursor-pointer">
                          Four steps to a super safe server{" "}
                        </div>
                      </Link>
                    </li>

                    <li className="block rounded-lg text-[#00b0f4] hover:bg-gray-300 ">
                      <Link to={"/Roleofadministrators"}>
                        <div className="block p-2 cursor-pointer">
                          Role of administrators and moderators on Discord
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/Reportingproblems"}>
                        <div className="block p-2 cursor-pointer">
                          Reporting problems to Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/Mentalhealth"}>
                        <div className="block p-2 cursor-pointer">
                          Mental health on Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/AgeRestricted"}>
                        <div className="block p-2 cursor-pointer">
                          Age-Restricted Content on Discord{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <Link to={"/Tipsagainst"}>
                        <div className="block p-2 cursor-pointer">
                          Tips against spam and hacking{" "}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseExit2}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#747f8d]">
                  <span className=" leading-[1.625] text-[20px]">
                    Parents & Educators
                  </span>
                  <svg
                    fill="#747f8d"
                    width="24px"
                    height="24px"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <ul
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg  w-[356px] bg-white ${
                    isHovering2 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/WhatisDiscord"}>
                      <div className="block p-2 cursor-pointer">
                        What is Discord?{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/DiscordCommitment"}>
                      <div className="block p-2 cursor-pointer">
                        Discord's commitment to a safe and trusted experience{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/HelpingYourTeen"}>
                      <div className="block p-2 cursor-pointer">
                        Helping your teen stay safe on Discord
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/TalkingAboutOnline"}>
                      <div className="block p-2 cursor-pointer">
                        Talking about online safety with your teen
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/AnsweringParents"}>
                      <div className="block p-2 cursor-pointer">
                        Answering parents' and educators' top questions{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/EncountersanIssue"}>
                      <div className="block p-2 cursor-pointer">
                        If your teen encounters an issue{" "}
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/WorkingwithCARU"}>
                      <div className="block p-2 cursor-pointer">
                        Working with CARU to protect users on Discord
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter3}
                onMouseLeave={onMouseExit3}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#747f8d]">
                  <span className="leading-[1.625] text-[20px]">
                    How We Enforce Rules{" "}
                  </span>
                  <svg
                    fill="#747f8d"
                    width="24px"
                    height="24px"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <ul
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg w-[356px] bg-white ${
                    isHovering3 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300 ">
                  <Link to={"/OurPolicies"}>
                    <div className="block p-2 cursor-pointer">Our policies </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                  <Link to={"/EnforcingourRules"}>
                    <div className="block p-2 cursor-pointer">
                      Enforcing our rules{" "}
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                  <Link to={"/HowweInvestigate"}>
                    <div className="block p-2 cursor-pointer">
                      How we investigate
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                  <Link to={"/WhatActionweTake"}>
                    <div className="block p-2 cursor-pointer">
                      What actions we take
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                  <Link to={"/HowyouCanAppeal"}>
                    <div className="block p-2 cursor-pointer">
                      How you can appeal our actions{" "}
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                  <Link to={"/DiscordTransparencyReport"}>
                    <div className="block p-2 cursor-pointer">
                      Discord's Transparency Report
                    </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <Link to={"/WorkingwithLawEnforcement"}>
                    <div className="block p-2 cursor-pointer">
                      Working with law enforcement
                    </div>
                    </Link>
                    
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="font-extrabold  lg:font-bold lg:text-7xl text-5xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="uppercase"> Role of administrators and moderators on Discord</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="mt-[56px] mb-[96px] w-full max-w-[1260px] grid box-border grid-cols-12 gap-y-0 gap-x-5 py-0 px-[24px]">
          
          <div className="col-start-1 col-end-[span_9] mt-0 row-start-1 row-end-auto">
            <div className="text-[#4f5660] text-[16px] leading-[24px]">
              
              <p className="mb-[16px]">
              Administrators are the people who create Discord servers around specific interests. They establish the rules for participating, can invite people to join, and oversee the health and well-being of their community. They have broad administrative control, and can bring in moderators to manage community members. They can also ban or remove members and, if necessary, remove and replace moderators. 
              </p>
              <p className="my-[16px]">
              Administrators also choose moderators to play a vital role in Discord communities. Their responsibilities might vary, but the overall role is to ensure that their Discord server is a safe, healthy environment for everyone. They can do things like moderate or delete messages, as well as invite, ban, or suspend people who violate the server’s rules. The best moderators typically are seasoned and enthusiastic participants in one or more communities.             
               </p>
              <p className="my-[16px]">
              Admins and moderators are your first go-to when you encounter an issue in a server. They may be able to respond immediately and help resolve your concerns. 
              </p>
              <p className="my-[16px]">
              Each Discord server should have written rules for behavior to alleviate confusion or misunderstanding about what goes on for that particular community. These rules, which supplement our Community Guidelines, are your tools to moderate efficiently and transparently. As communities grow, moderators can add more mods to keep a server a fun and welcoming place to be. 
              </p>
           
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default Roleofadministrators;
