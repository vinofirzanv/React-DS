import React, { Fragment, useState } from "react";
import Safetyz from "../assets/SafetyDs.png";
import Safetyz2 from "../assets/SafetyDs2.png";
import Safetyz3 from "../assets/SafetyDs3.png";
import Safetyz4 from "../assets/SafetyDs4.png";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function ControllingExperience1() {
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
                        <div className="block p-2 text-[#00b0f4] cursor-pointer hover:bg-gray-400">
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

          <div className=" lg:text-7xl text-4xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="font-bold lg:font-bold uppercase">Four steps to a super safe account</h1>
            <div className="mt-[40px] text-[20px] leading-[140%] block ">
              <p>
                On Discord, you get to choose the friends and communities you
                talk with. A key part of making this happen is knowing how you
                can set up your account. With the below advice, you’ll be able
                to make your account as safe as possible.
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
                    1. Secure your account
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    2. Set your privacy & safety settings
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    3. Follow safe account practices
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#empat"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    4. Block other users when needed
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
                1. Secure your account
              </h5>
              <p className="mb-[16px]">
                First, we need to ensure that your account credentials and login
                information are as secure as possible.
              </p>
              <div className="text-[20px]">Choose a secure password</div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  Having a strong password is key to protecting your account.
                  Choose a long password with a mix of uppercase letters,
                  lowercase letters, and special characters that is hard to
                  guess and that you don’t use for anything else.
                </li>
                <li>
                  We recommend checking out password managers like 1Password
                  (Mac) or Dashlane (Windows), which make creating and storing
                  secure passwords extremely easy.
                </li>
                <li>
                  Discord will require your password to be at least 8 characters
                  long. Certain regions in the world may have additional
                  requirements.
                </li>
              </ul>
              <div className="text-[20px] mt-[16px]">
                Consider enabling two-factor authentication (2FA)
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  Two-Factor Authentication (2FA) is the most secure way to
                  protect your account. You can use Google Authenticator, Authy,
                  and other authenticator apps on a mobile device in order to
                  authorize access to your account. Once 2FA is enabled, you’ll
                  have the option to further increase your account’s security
                  with SMS Authentication by adding your phone number to your
                  Discord account.
                </li>
                <li>
                  You can enable 2FA in your{" "}
                  <span className="font-style: italic font-bold">
                    User Settings.
                  </span>{" "}
                  You can also refer to{" "}
                  <a href="/" className="text-blue-600">
                    this article{" "}
                  </a>
                  for more information.
                </li>
              </ul>
              <p className="my-[16px]">
                <img src={Safetyz} alt="Gambar1"/>
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                2. Set your privacy & safety settings
              </h5>

              <p className="mb-[16px]">
                Your privacy settings are very important. They give you control
                over who can contact you and what they can send you. You can
                access them by going into your{" "}
                <span className="font-style: italic font-bold">
                  User Settings.
                </span>{" "}
                and selecting{" "}
                <span className="font-style: italic font-bold">
                  Privacy & Safety.
                </span>
              </p>
              <div className="mb-[12px] text-[20px] text-black">
                Age-restricted content media settings{" "}
              </div>
              <p className="mb-[16px]">
                Here users can decide whether they want Discord to automatically
                scan and delete direct messages that contain explicit media
                content.
              </p>
              <p className="my-[16px]">
                <img src={Safetyz2} alt="Safety2" />
              </p>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  <span className="font-style: underline font-bold">
                    {" "}
                    Keep me safe{" "}
                  </span>{" "}
                  - With this setting, images and videos in{" "}
                  <span className="font-style: italic font-bold">
                    all.
                  </span>{" "}
                  direct messages are scanned by Discord and age-restricted
                  content is blocked.
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                    My friends are nice{" "}
                  </span>
                  - With this setting, all direct messages sent by users who are
                  not on your Friends List are scanned and age-restricted
                  content is blocked. This setting is good for those who trust
                  their friends not to send content that they wouldn't want to
                  see. This setting is on by default.
                </li>
                <li>
                  <span className="font-style: underline font-bold">
                    Do not scan{" "}
                  </span>
                  - With this setting, none of the direct messages you receive
                  will be scanned or blocked for age-restricted content.
                </li>
              </ul>
              <div className="mb-[12px] mt-[12px] text-[20px] text-black">
                Direct messages (DM) settings{" "}
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  You might only want certain people to contact you. By default,
                  whenever you’re in a server with someone else, they can send
                  you a direct message (DM).
                </li>
                <li>
                  You can toggle{" "}
                  <span className="font-style: underline font-bold">
                    Allow direct messages from server members{" "}
                  </span>{" "}
                  to block DMs from users in a server who aren’t on your friends
                  list. If you have joined any servers prior to turning this off
                  you’ll need to adjust your DM settings individually for each
                  server that you have joined.
                </li>
                <li>
                  To change this setting for a specific server, select{" "}
                  <span className="font-style: italic font-bold">
                    Privacy Settings
                  </span>{" "}
                  on the server’s dropdown list and toggle{" "}
                  <span className="font-style: underline font-bold">
                    Allow direct messages from server members.{" "}
                  </span>
                </li>
              </ul>
              <div className="my-[12px] text-[20px] text-black">
                Friend request settings{" "}
              </div>
              <p className="mb-[16px]">
                The last thing to do in your security settings is determine who
                can send you a friend request.
              </p>
              <p className="my-[16px]">
                <img src={Safetyz3} alt="safety3" />
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
              <p className="my-[16px] font-style: italic">
                If you don’t want to be open to ANY requests, you can deselect
                all three options. However, you can still send out requests to
                other people.
              </p>
              <p className="my-[16px] font-style: italic font-bold">
                You should only accept friend requests from users that you know
                and trust — if you aren’t sure, there’s no harm in rejecting the
                friend request. You can always add them later if it’s a mistake.
              </p>
              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="tiga"
              >
                3. Follow safe account practices
              </h5>
              <p className="mb-[16px]">
                As with any online interaction, we recommend following some
                simple rules while you’re on Discord:
              </p>
              <div className="mb-[12px] text-[20px] text-black">
                Be wary of suspicious links and files{" "}
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  <span className="font-style: italic font-bold text-red-600">
                    {" "}
                    DON'T{" "}
                  </span>{" "}
                  click on links that look suspicious or appear to have been
                  shortened or altered. Discord will try and warn you about
                  links that are questionable, but it’s no substitute for
                  thinking before you click.
                </li>
                <li>
                  <span className="font-style: italic font-bold text-red-600">
                    {" "}
                    DON'T{" "}
                  </span>{" "}
                  download files or applications from users you don't know or
                  trust. Were you expecting a file from someone? If not, don’t
                  click the file!
                </li>
                <li>
                  <span className="font-style: italic font-bold text-red-600">
                    {" "}
                    DON'T{" "}
                  </span>{" "}
                  open a file that your browser or computer has flagged as
                  potentially malicious without knowing it’s safe.
                </li>
              </ul>
              <div className="my-[12px] text-[20px] text-black">
                Never give away account information{" "}
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  <span className="font-style: italic font-bold text-red-600">
                    {" "}
                    DON'T{" "}
                  </span>{" "}
                  give away your Discord account login or password information
                  to{" "}
                  <span className="font-style: italic font-bold">anyone</span>.
                  We’ll never ask for your password. We also won’t ask for your
                  token, and you should never give that to anyone.
                </li>
                <li>
                  <span className="font-style: italic font-bold text-red-600">
                    {" "}
                    DON'T{" "}
                  </span>{" "}
                  give away account information for{" "}
                  <span className="font-style: italic font-bold">any</span>{" "}
                  account you own on{" "}
                  <span className="font-style: italic font-bold">any</span>{" "}
                  platform to other users on Discord. Malicious individuals
                  might ask for this information and use it to take over your
                  accounts.
                </li>
                <li>
                  <span className="font-style: italic font-bold text-green-600">
                    {" "}
                    DO{" "}
                  </span>{" "}
                  report any accounts who claim to be Discord staff or who ask
                  for account information to the Trust & Safety team.
                </li>
              </ul>
              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="empat"
              >
                4. Block other users when needed
              </h5>
              <p className="mb-[16px]">
                We understand that there are times when you might not want to
                interact with someone. We want everyone to have a positive
                experience on Discord and have you covered in this case.
              </p>
              <div className="mb-[12px] text-[20px] text-black">
                How blocking works{" "}
              </div>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  When you block someone on Discord, they will be removed from
                  your friends list (if they were on it) and will no longer be
                  able to send you DMs.
                </li>
                <li>
                  Any message history you have with the user will remain, but
                  any new messages the user posts in a shared server will be
                  hidden from you, though you can see them if you wish.
                </li>
              </ul>
              <div className="my-[12px] text-[20px] text-black">
                How blocking works{" "}
              </div>
              <p className="my-[16px]">
                <img src={Safetyz4} alt="safety4" />
              </p>
              <p className="my-[16px]">On desktop:</p>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>Right-click the user's @Username to bring up a menu.</li>
                <li>
                  Select <span className="font-bold text-red-600"> Block </span>{" "}
                  in the menu.
                </li>
              </ul>
              <p className="my-[16px]">On desktop:</p>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  Tap the user's @Username to bring up the user's profile.
                </li>
                <li>
                  Tap the three dots in the upper right corner to bring up a
                  menu.
                </li>
                <li>
                  Select <span className="font-bold text-red-600"> Block </span>{" "}
                  in the menu.
                </li>
              </ul>
              <p className="my-[16px] font-bold font-style: italic">
                If you have blocked a user but they create a new account to try
                and contact you, please report the user to the Trust & Safety
                team. You can learn more about how to do this at{" "}
                <a href="/" className="text-blue-600 hover:underline">
                  this link.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default ControllingExperience1;
