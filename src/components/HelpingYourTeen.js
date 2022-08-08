import React, { Fragment, useState } from "react";
import Safetyz1 from "../assets/SafetyDs2.png";
import Safetyz2 from "../assets/SafetyDs3.png";
import Safetyz3 from "../assets/SafetyDs4.png";

import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function HelpingYourTeen() {
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
                <span className="flex pt-0 px-[16px] pb-[10px] center   text-[#747f8d] border-b-[2px]">
                  <span className=" leading-[1.625] text-[20px]">
                    Controlling Your Experince
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
                <span className="flex pt-0 px-[16px] pb-[10px] center text-[#5865F2] border-[#5865F2] border-b-[2px]">
                  <span className=" leading-[1.625] text-[20px]">
                    Parents & Educators
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
                <ul
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg  w-[356px] bg-white ${
                    isHovering2 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300  ">
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
                  <li className="block rounded-lg hover:bg-gray-300 text-[#00b0f4]">
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
                      <div className="block p-2 cursor-pointer">
                        Our policies{" "}
                      </div>
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

          <div className="  lg:text-7xl text-4xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="uppercase font-bold lg:font-bold">
              Helping your teen stay safe on Discord
            </h1>
            <div className="mt-[40px] text-[20px] leading-[140%] block ">
              <p className="mb-6">
                Over the years, Discord has designed tools to protect our users
                from inappropriate content or unwanted contact. Knowing how to
                use these tools will give you full control of your Discord
                experience and will help you avoid unwanted experiences.
              </p>

              <p className="mb-6">
                As a parent, we encourage you to spend some time reviewing and
                discussing your teen’s settings so that you can customize their
                Discord experience. More details on all our privacy and security
                tools can be found{" "}
                <a href="/" className="text-[#00b0f4] hover:underline">
                  here.
                </a>
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
                    Explicit media content settings
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Direct message (DM) settings
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Friend request settings
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#empat"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Blocking
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#lima"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Deleting an account
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
                Explicit media content settings
              </h5>
              <p className="mb-[16px]">
                From this menu, users can decide whether they want Discord to
                automatically scan and delete direct messages that contain
                explicit media content. You can access this setting by going
                into{" "}
                <span className="text-style: italic font-bold">
                  User Settings
                </span>{" "}
                and selecting{" "}
                <span className="text-style: italic font-bold">
                  Privacy & Safety{" "}
                </span>{" "}
                and{" "}
                <span className="text-style: italic font-bold">
                  Safe Direct Messaging.{" "}
                </span>
              </p>
              <p className="mb-[16px]">
                By default, this is set to “my friends are nice”, which means
                only DMs your teen receives from non-friends are scanned for
                explicit media. Choose ‘Keep me safe’ to have all DMs you
                receive scanned for explicit media.
              </p>
              <p className="my-[16px]">
                <img src={Safetyz1} alt="Gambar1" />
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                Direct message (DM) settings
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  This menu lets users determine who can contact them in a DM.
                  You can access this setting by going into{" "}
                  <span className="text-style: italic font-bold">
                    User Settings
                  </span>{" "}
                  and selecting{" "}
                  <span className="text-style: italic font-bold">
                    Privacy & Safety{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-style: italic font-bold">
                    Safe Direct Messaging.{" "}
                  </span>
                </li>
                <li>
                  By default, whenever your teen is in a server, anyone in that
                  server can send them a DM.
                </li>
                <li>
                  You can disable the ability for anyone in a server with your
                  teen to send your teen a DM by toggling “Allow direct messages
                  from server members” to off. This will only affect new servers
                  your teen joins. You will need to adjust the DM settings
                  individually for each server that they have previously joined
                  (in Server Settings on the server’s dropdown list).
                </li>
              </ul>
              <p className="my-[16px]">
                You can also control these settings on a server-by-server basis.
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="tiga"
              >
                Friend request settings
              </h5>

              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  This menu lets you determine who can send your teen a friend
                  request on Discord. You can access this setting by going into{" "}
                  <span className="text-style: italic font-bold">
                    User Settings
                  </span>{" "}
                  and selecting{" "}
                  <span className="text-style: italic font-bold">
                    Privacy & Safety{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-style: italic font-bold">
                    Safe Direct Messaging.{" "}
                  </span>
                </li>
                <li>
                  Users should only accept friend requests from users that you
                  know and trust. If your teen isn’t sure, there’s no harm in
                  rejecting the friend request. They can always add them later
                  if it’s a mistake.
                </li>
              </ul>
              <p className="my-[16px]">
                <img src={Safetyz2} alt="Gambar2" />
              </p>
              <p className="mb-[16px]">
                You can choose from the following options when deciding who can
                send you a friend request.
              </p>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  <span className="font-style: underline font-bold">
                    {" "}
                    Everyone{" "}
                  </span>{" "}
                  - Selecting this means that anyone who knows your Discord Tag
                  or is in a mutual server with you can send you a friend
                  request. This is handy if you don’t share servers with someone
                  and you want to let them friend you with just your Discord
                  Tag.
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                    {" "}
                    Friends of Friends{" "}
                  </span>{" "}
                  - Selecting this means that for anyone to send you a friend
                  request, they must have at least one mutual friend with you.
                  You can view this in their user profile by clicking the{" "}
                  <span className="font-style: italic ">
                    Mutual Friends
                  </span>{" "}
                  tab next to the{" "}
                  <span className="font-style: italic ">Mutual Servers</span>{" "}
                  tab.
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                    Server Members
                  </span>{" "}
                  - Selecting this means users who share a server with you can
                  send you a friend request. Unselecting this means that you can
                  only be added by someone with a mutual friend.
                </li>
              </ul>
              <p className="my-[16px] font-bold">
                If you don’t want to be open to ANY requests, you can deselect
                all three options. However, you can still send out requests to
                other people.
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="empat"
              >
                Blocking
              </h5>
              <p className="my-[16px]">
                If someone is bothering your teen, you always have the option to
                block the user. Blocking on Discord removes the user from your
                Friends List, prevents them from messaging your teen directly,
                and hides their messages in any shared servers.
              </p>

              <p className="my-[16px]">
                To block someone, they can simply click on their @username and
                select Block.
              </p>

              <p className="my-[16px]">
                <img src={Safetyz3} alt="Gambar3" />
              </p>

              <p className="my-[16px] font-style: italic">
                If your teen has blocked a user but they create a new account to
                try and contact them, please report the user to the Trust &
                Safety team. You can learn more about how to do this at{" "}
                <a href="/" className="text-[#00b0f4] hover:underline">
                  this link
                </a>.
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="lima"
              >
                Deleting an account
              </h5>

              <p className="my-[16px] font-style: italic">
                IAs long as you have the username and password for an account, you can delete your teen’s Discord account at any time. If you can’t access the Discord account directly, please submit a request using <a href="/" className="text-[#00b0f4] hover:underline">
                  this form
                </a> and our Trust and Safety team will do our best to help.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default HelpingYourTeen;
