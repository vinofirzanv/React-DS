import React, { Fragment, useState } from "react";
import Safetyz from "../../../assets/whatisdiscord.png";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
function WhatisDiscord() {
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
                  <li className="block rounded-lg hover:bg-gray-300 text-[#00b0f4] ">
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

          <div className="  lg:text-7xl text-4xl lg:pl-10 my-5 text-[#23272a]">
            <h1 className="uppercase font-bold lg:font-bold">
              What is Discord?{" "}
            </h1>
            <div className="mt-[40px] text-[20px] leading-[140%] block ">
              <p className="mb-6">
                Discord is a free voice, video, and text chat app that's used by
                tens of millions of people ages 13+ to talk and hang out with
                their communities and friends.
              </p>

              <p className="mb-6">
                People use Discord daily to talk about many things, ranging from
                art projects and family trips to homework and mental health
                support. It's a home for communities of any size, but it's most
                widely used by small and active groups of people who talk
                regularly.
              </p>

              <p className="mb-6">
                The vast majority of servers are private, invite-only spaces for
                groups of friends and communities to stay in touch and spend
                time together. There are also larger, more open communities,
                generally centered around specific topics such as popular games
                like Minecraft and Fortnite. All conversations are opt-in, so
                people have total control over who they interact with and what
                their experience on Discord is.
              </p>

              <p className="mb-6">
                People love Discord because it’s a home for all their
                communities and groups of friends. It's a place where they can
                be themselves and spend time with other people who share their
                interests and hobbies. There's no algorithm deciding what they
                should see, no endless scrolling, and no news feed.
                Conversations on Discord are driven by shared interests.
              </p>

              <p className="my-[16px]">
                <img src={Safetyz} alt="Gambar1" />
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
                    Discord Glossary
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    Why people love Discord
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
                Discord Glossary
              </h5>
              <p className="mb-[16px]">
                Discord has its own vocabulary. You might hear your teen or
                students using these words when talking about Discord.
              </p>
              <p className="mb-[16px]">
                Server: Servers are the spaces on Discord. They are made by
                specific communities and friend groups. The vast majority of
                servers are small and invitation-only. Some larger servers are
                public. Any user can start a new server for free and invite
                their friends to it.
              </p>
              <p className="mb-[16px]">
                Channel: Discord servers are organized into text and voice
                channels, which are usually dedicated to specific topics and can
                have different rules.
              </p>

              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                  In text channels, users can post messages, upload files, and
                  share images for others to see at any time.
                </li>
                <li>
                  In voice channels, users can connect through a voice or video
                  call in real time, and can share their screen with their
                  friends - we call this Go Live.
                </li>
              </ul>
              <p className="my-[16px]">
                <span className="text-style: italic">DMs and GDMs:</span> Users
                can send private messages to other users as a direct message
                (DM), as well as start a voice or video call. Most DMs are
                one-on-one conversations, but users have the option to invite up
                to nine others to the conversation to create a private group DM,
                with a maximum size of ten people. Group DMs are not public and
                require an invite from someone in the group to join.
              </p>
              <p className="mb-[16px]">
                <span className="text-style: italic"> Go Live: </span> users can
                share their screen with other people who are in a server or a DM
                with them.
              </p>
              <p className="mb-[16px]">
                <span className="text-style: italic"> Nitro: </span> Nitro is
                Discord’s premium subscription service. Nitro offers special
                perks for subscribers, such as the option to customize your
                Discord Tag, the ability to use custom emotes in every server, a
                higher file upload cap, and discounted Server Boosts.
              </p>
              <p className="mb-[16px]">
                <span className="text-style: italic"> Server Boosts: </span> If
                your teen is a big fan of a community, they might want to boost
                the community’s server (or their own). Like Nitro, Server Boosts
                give servers special perks like more custom emotes, better video
                and voice quality, and the ability to set a custom invite link.
                Server Boosts can be bought with Nitro or purchased separately.
              </p>
              <p className="mb-[16px]">
                <span className="text-style: italic"> Student Hubs: </span>{" "}
                Discord Hubs for Students allow students to verify their Discord
                account with their official student email, and unlock access to
                an exclusive hub for students at their school. Within the hub,
                they can connect with other verified students, discover servers
                for study groups or classes, and share their own servers for
                fellow students to join. Hubs are not affiliated with or managed
                by a school or school staff. Servers in a Hub are student-run
                but may include non-students. For more information on Student
                Hubs, please check out our{" "}
                <a href="/" className="text-[#00b0f4]">
                  {" "}
                  Student Hubs FAQs.
                </a>
              </p>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                Why people love Discord
              </h5>

              <p className="mb-[16px]">
                Below, you can see just a few of our favorite stories about what
                people are doing on Discord and why they love it. You can find
                even more stories about how people use Discord{" "}
                <a href="/" className="text-[#00b0f4] hover:underline">
                  {" "}
                  right here.{" "}
                </a>
              </p>
              <p className="mb-[16px] font-bold">
                Cyndie, a parent of two from North Carolina, reflects on how her
                family uses Discord:
              </p>
              <p className="mb-[16px] text-style: italic">
                “There are four of us and we all have Discord installed on both
                our computers and phones. My oldest son is in an apartment, and
                the younger one is on campus, so we use Discord to make family
                plans. Everything gets dropped into that server. From dinner’s
                ready to internships and job offers. Usually it’s the silly,
                stupid stuff we just drop in that makes us all laugh, like when
                there’s a Weird Al question on Jeopardy. I can’t imagine life
                without it. ”
              </p>
              <p className="mb-[16px] font-bold">
                Genavieve, a high-school student from California, talks about
                how her classes use Discord:
              </p>
              <p className="mb-[16px] text-style: italic">
                "I've been using Discord for the last two years as my main
                communication with my friends. We had too many people in our
                group chat and wanted a platform where we could all communicate
                with each other. Discord is a great way for a friend group of
                thirty people to stay in touch! Also, with distance learning in
                place, I’ve started using it with my AP Physics class too. It's
                been so important to feel connected to our teachers and each
                other when we are so isolated and in such a difficult class.
                Using Discord brought us closer together as a class — we are
                already a small class of 22 students, so being able to joke
                around and send memes helps us not feel so alone during the
                distance learning. The different channels and @mentions make it
                much easier to keep information straight. Screenshare makes it
                even easier, so we can show each other documents or problems we
                are working on to get feedback or troubleshooting advice.”
              </p>
              <p className="mb-[16px] font-bold">
                David, a physics and math tutor from New Jersey, talks about how
                he teaches students and connects with other teachers over
                Discord:
              </p>
              <p className="mb-[16px] text-style: italic">
                "I use Discord to tutor one of my students and to stay up to
                date with conversations and announcements in a group of physics
                teachers interested in physics education research. It's nice to
                see a side-by-side camera view of my desk with the student's
                work. I also really like that the audio through the OPUS codec
                which sounds very clean."
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default WhatisDiscord;
