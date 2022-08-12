import React, { Fragment, useState } from "react";
import Safetyz from "../../../assets/SafetyVerificationLevel.png";
import Safetyz2 from "../../../assets/Safety2FA.png";
import Safetyz3 from "../../../assets/SafetyExplicitMedia.png";

import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function ControllingExperience2() {
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
     <Header />
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
                    <li className="block rounded-lg text-[#00b0f4] hover:bg-gray-300">
                      <Link to={"/ControllingExperience2"}>
                        <div className="block p-2 cursor-pointer">
                          Four steps to a super safe server{" "}
                        </div>
                      </Link>
                    </li>

                    <li className="block rounded-lg hover:bg-gray-300 ">
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

          <div className=" lg:text-7xl text-5xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="uppercase font-extrabold  lg:font-bold"> Four steps to a super safe server</h1>
            <div className="mt-[40px] text-[20px] leading-[140%] block ">
              <p>
                Moderating a Discord server is an important responsibility, but
                it can take a little while to get used to. Whether you’re a new
                server owner or a veteran administrator, our tips below will
                help you make your server super safe.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="mt-[56px] mb-[96px] w-full max-w-[1260px] grid box-border grid-cols-12 gap-y-0 gap-x-5 py-0 px-[24px]">
          <div className="col-start-10 col-end-[span_3] block">
            <div className="sticky bg-[#f6f6f6] rounded-lg p-[24px] top-[20px] ">
              <div className="text-[12px] leading-[20px] font-bold uppercase text-[#23272a]">
                Content
              </div>
              <ol className="list-none">
               <li className="mt-[24px] hover:underline">
                  <a
                    href="#satu"
                    className="block text-[#00b0f4] text-[16px] leading-[26px]"
                  >
                    1. Set up roles and permissions
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    2. Set a verification level
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    3. Enable server-wide 2FA
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#empat"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    4. Turn on the age-restricted content filter
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div className="col-start-1 col-end-[span_9] mt-0 row-start-1 row-end-auto">
            <div className="text-[#4f5660] text-[16px] leading-[24px]">
              <h5
                className="text-[#23272a] mb-4 text-[24px] leading-[120%] font-bold"
                id="satu"
              >
                1. Set up roles and permissions
              </h5>
              <p className="mb-[16px]">
                Roles are one of the building blocks of managing a Discord
                server. They give your members a fancy color, but more
                importantly, each role comes with a set of permissions that
                control what your members can and cannot do on the server. With
                roles, you can give members and bots administrative permissions
                like kicking or banning members, adding or removing channels,
                and pinging @everyone.
              </p>
              <p className="my-[16px]">
                You can find these options by going into your{" "}
                <span className="font-bold font-style: italic">
                  Server Settings{" "}
                </span>
                and selecting{" "}
                <span className="font-bold font-style: italic"> Roles.</span>
              </p>
              <p className="my-[16px] font-bold">
                Assign permissions with care! Certain permissions allow members
                to make changes to your server and channels. These permissions
                are a great moderation tool, but be wary of who you grant this
                power. Changes made to your server can’t be undone.
              </p>
              <p className="my-[16px]">
                You can learn more about the technical side of implementing
                roles and permissions in{" "}
                <a href="/" className="text-blue-600 hover:underline">
                  Role Management 101{" "}
                </a>
                and our{" "}
                <a href="/" className="text-blue-600 hover:underline">
                  How Do I Set Up Permissions?
                </a>{" "}
                article.
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                2. Set a verification level
              </h5>

              <p className="mb-[16px]">
                Server verification levels allow you to control who can send
                messages in your server. Setting a high verification level is a
                great way to protect your server from spammers or raids. You can
                find this option by going into your <span className="font-style: italic font-bold"> Server Settings. </span>
                and selecting <span className="font-style: italic font-bold"> Moderation. </span>{" "}
              </p>
              
              <p className="my-[16px]">
                <img src={Safetyz} alt="Safety" />
              </p>
              <div className="mb-[12px] text-[20px] text-black">
                Verification levels
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  <span className="font-style: underline font-bold">
                    {" "}
                    None 
                  </span>{" "}
                  - All new members on the server can start chatting immediately with no restrictions.
                 
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                  Low </span> - Members on the server must have a verified email on their Discord account to begin chatting. We recommend this setting 
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                  Medium  </span> - Members on the server must have a verified email and their Discord account must be at least 5 minutes old to begin chatting.
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                  High </span>
                   - Users must meet all of the previous requirements and also must be a member of the server for at least 10 minutes to begin chatting. This is a good way to stall raids. Most raiders don’t have the patience to wait ten minutes before they spam the channel.
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                  Highest </span>
                   - Members must have a verified phone number on their Discord account. This is the highest level of requirement. 
                </li>
               
              </ul>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="tiga0"
              >
               3. Enable server-wide 2FA 
              </h5>
              <p className="mb-[16px]">
              When enabled, server-wide two-factor authentication (2FA) requires all of your moderators and administrators to have 2FA enabled on their accounts in order to take administrative actions, like deleting messages. You can read more about 2FA <a href="/" className="text-blue-600 hover:underline"> here</a>.
              </p>
              <p className="my-[16px]">
                <img src={Safetyz2} alt="Safety2" />
              </p>
              <p className="mb-[16px]">
              By requiring all admin accounts to have 2FA turned on, you protect your server from malicious users who might try to compromise one of your moderators or administrators accounts and then make unwanted changes to your server. You can find the Server 2FA button by going to one of your moderators' or administrators' accounts.
              </p>
              <p className="mb-[16px] font-bold">
              You must have 2FA enabled on your own account before you can enable this option!
              </p>

              
              
              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="empat"
              >
                4. Turn on the age-restricted content filter
              </h5>
              <p className="mb-[16px]">
              Turning on the Age-Restricted Content Filtering will automatically detect and delete images and uploads deemed inappropriate. This allows your members to share content like images and embeds, while reducing the risk of age-restricted material shown in Safe For Work (SFW) channels.
              </p>
              <p className="my-[16px]">
                <img src={Safetyz3} alt="Safety3" />
              </p>
              <p className="mb-[16px]">
              You can find this option by going to your <span className="font-bold font-style: italic">Server Settings </span> and selecting <span className="font-bold font-style: italic">Moderation.</span>
              </p>
             
              <div className="mb-[12px] text-[20px] text-black">
                Age-Restricted Content settings
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  <span className="font-style: underline font-bold">
                    {" "}
                    Don’t scan any media content  
                  </span>{" "}
                  - Discord will not proactively delete any media sent in your server that contains age-restricted content. Note that we still scan every media uploaded to Discord for child safety content.
                 
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                  Scan media content from members without a role  </span> - Discord will automatically scan and delete age-restricted content sent by users without roles. <span className="font-style: italic">This is the recommended option for servers that use roles for trusted members.</span>
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                  Scan media content from all members  </span> - Discord will automatically scan and delete age-restricted content from all members, regardless of roles.
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default ControllingExperience2;
