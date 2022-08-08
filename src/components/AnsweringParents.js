import React, { Fragment, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function AnsweringParents() {
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
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/HelpingYourTeen"}>
                      <div className="block p-2 cursor-pointer">
                        Helping your teen stay safe on Discord
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <Link to={"/TalkingAboutOnline"}>
                      <div className="block p-2 cursor-pointer">
                        Talking about online safety with your teen
                      </div>
                    </Link>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 text-[#00b0f4]">
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
            Answering parents' and educators' top questions
            </h1>
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
                    1. Is Discord safe for my teens to use?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                  2. What is the minimum age to be on Discord? How do you ensure teens under 13 can’t create an account?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                  3. What personal information does Discord collect about my teen? Do you sell it?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#empat"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                   4. Can my teen be exposed to inappropriate content on Discord?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#lima"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    5. Can my teen interact with people they don’t know on Discord?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#enam"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                   6. Are there parental controls on Discord I can use to control my teen's account?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tujuh"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    7. How can I monitor what my teen is doing on Discord? 
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#delapan"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                   8. What are Student Hubs?
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#sembilan"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    9. What safety measures are in place for the students participating in Student Hubs?
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
               1. Is Discord safe for my teens to use?
              </h5>

              <p className="mb-[16px]">
              There are a few things that make Discord a great and safe place for teens:
              </p>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                <span className="font-bold">All conversations are opt-in.</span> Conversations on Discord are driven by the people you choose and the topics you choose to talk about. Each user gets to choose who can message them, who can add them as a friend, and what kind of content they can receive.  
                </li>
                <li>
                <span className="font-bold">No sharing of personal information.</span> We’ve designed our app to be secure. We protect sensitive information, including contact information and private conversations, from any searches. Discord does not ask for a real name on signup, and we do not share any user’s personal information with other users. We also do not sell our user data to advertisers. 
                </li>
                <li>
                <span className="font-bold">Private, invite-only groups.</span> Most Discord servers are small, private, invite-only groups where your teen can spend time with their friends or schoolmates. There is no news feed, no algorithm, no endless scrolling, no unexpected content. 
                </li>
              </ul>
              <p className="my-[16px]">
              To help your teen use Discord safely, it’s important to understand how Discord works and how you can best control your teen’s experience on it. We have listed a number of tips to do so <a href="/HelpingYourTeen" className="text-[#00b0f4] hover:underline">here </a>.
              </p>
              <p className="mb-[16px]">
              Just like with every other online service, the best way to ensure your teen stays safe online is to have clear guidelines on what they should and shouldn’t be looking at or posting online, and make sure that you keep clear lines of communication. 
              </p>
             
              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                2. What is the minimum age to be on Discord? How do you ensure teens under 13 can’t create an account?
              </h5>
              <p className="mb-[16px]">
              Discord's Terms of Service requires people to be over a minimum age to access our app or website. The minimum age to access Discord is 13, unless local legislation mandates an older age. 
              </p>
              <p className="mb-[16px]">
              To ensure that users satisfy that minimum age requirement, we are in the process of rolling out a gate that asks them to confirm their date of birth upon creating an account. If a user is reported as being under 13, we lock them out of their account until they can verify their age using an official ID document.  
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="tiga"
              >
                3. What personal information does Discord collect about my teen? Do you sell it?
              </h5>
              <p className="mb-[16px]">
              Discord does not sell user data, nor do we share it with 3rd parties for advertising purposes. We do not ask for a real name on signup, and we do not share any user’s personal information with other users. We protect sensitive information, including contact information and private conversations, from any searches. 
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="empat"
              >
                4. Can my teen be exposed to inappropriate content on Discord?
              </h5>
              <p className="mb-[16px]">
              Like on every internet platform, there is age-restricted content on Discord. Each user chooses which server they want to join and who they want to interact with. 
              </p>
              <p className="mb-[16px]">
              In servers, age-restricted content must be posted in a channel marked as age-restricted, which cannot be accessed by users under 18. In Direct Messages, we recommend that every user under 18 activates the age-restricted content filter (in <span className="font-bold text-style: italic">User Settings</span> {">"} <span className="font-bold text-style: italic">Privacy & Safety</span> {">"} and select <span className="font-bold text-style: italic">'Keep Me Safe'</span> under <span className="font-bold text-style: italic">Safe Direct Messaging)</span>. This setting is on by default and will scan images and videos in all direct messages and block age-restricted content. 
              </p>
              <p className="mb-[16px]">
              We believe that the best way to make sure that your teenagers are accessing content that they should is to set clear guidelines on what they should and shouldn’t be looking at or posting online, and make sure that you keep clear lines of communication. 
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="lima"
              >
                5. Can my teen interact with people they don’t know on Discord?
              </h5>

              <p className="mb-6">
              All interactions on Discord are opt-in. Unlike other platforms where someone might be able to message you or find you as soon as you sign up for an account, this isn’t the case on Discord. Every person that signs up needs to accept another user as a friend before they can be messaged by that user. They need to decide to join a community before being messaged by anyone in that community.
              </p>

              <p className="mb-6">
              Each user has total control over the following:
              </p>

              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Who can DM you and who can add you as a friend
                </li>
                <li>
                Which servers you want to join and be a part of
                </li>
                <li>
                Who can join the servers that you create
                </li>
                <li>
                Whether you want your messages to be scanned for age-restricted content automatically
                </li>
              </ul>
              
              <p className="my-6">
            <span className="font-bold">Users should only accept friend requests from users that you know and trust.</span> If your teen isn’t sure, there’s no harm in rejecting the friend request. They can always add them later if it’s a mistake.
              </p>
              <p className="mb-6">
              If your teen is ever uncomfortable interacting with someone on Discord, they can always block that specific user. Blocking a user removes them from your Friends List, prevents them from messaging you directly, and hides their messages in any shared servers.
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="enam"
              >
                6. Are there parental controls on Discord I can use to control my teen's account?
              </h5>

              <p className="mb-6">
              We have detailed all the controls you have to help make your teen’s account safer <a href="/HelpingYourTeen" className="text-[#00b0f4] hover:underline">here </a>. We recommend going through these settings together with your teen and having an open conversation about why you are choosing certain settings.
              </p>

              <p className="mb-6">
              iOS and Android operating systems offer parental controls that can help you manage your teen's phone usage, including Discord, if needed. Apple and Microsoft offer similar controls for computers.
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="tujuh"
              >
                7. How can I monitor what my teen is doing on Discord? 
              </h5>

              <p className="mb-6">
              Privacy is incredibly important to us, including your teen’s privacy. We can’t share their login information with you, but we encourage you to discuss how to use Discord safely directly with your teen.
              </p>

              <p className="mb-6">
              If you ever believe that your teen is in danger on Discord, and have access to their email address, you can email us from that email address and request that we delete the account. 
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="delapan"
              >
                8. What are Student Hubs?
              </h5>

              <p className="mb-6">
              Discord Hubs for Students allow students to verify their Discord account with their official student email, and unlock access to an exclusive hub for students at their school. Within the hub, they can connect with other verified students, discover servers for study groups or classes, and share their own servers for fellow students to join. Hubs are not affiliated with or managed by a school or school staff. Servers in a Hub are student-run but may include non-students.
              </p>

              <p className="mb-6">
              For more information on Student Hubs, please check out our <a href="/" className="text-[#00b0f4] hover:underline">Student Hubs FAQs</a>.
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="delapan"
              >
               9. What safety measures are in place for the students participating in Student Hubs?
              </h5>

              <p className="mb-6">
              Only those with a school-assigned email address can access a school’s specific hub. Click here to dive into our Student Hubs policy. All servers and users in the hub must also comply with our Community Guidelines, Terms of Service, and Privacy Policy. We also have all of our existing user controls for servers, such as setting specific roles and access to #channels in a server, blocking, banning, mod bots, and more. Students can also submit a report from within their hub to bring attention to any inappropriate behavior.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default AnsweringParents;
