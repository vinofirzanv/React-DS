import React, { Fragment, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function TalkingAboutOnline() {
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
                  <li className="block rounded-lg hover:bg-gray-300 text-[#00b0f4]">
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
            Talking about online safety with your teen
            </h1>
            <div className="mt-[40px] text-[20px] leading-[140%] block ">
              <p className="mb-6">
              We believe that online communities can be a source of friendship, camaraderie, and belonging. At Discord, we spent some of our best teen years online talking with friends and playing games. 
              </p>

              <p className="mb-6">
              Many of us are parents ourselves now, so we know how difficult it can be to navigate our teens' digital lives. To have safe, engaging, and positive experiences online, it’s important for our teens to understand how Discord and other online platforms work, and how to use them appropriately. 
              </p>
              <p className="mb-6">
              Online safety is about more than just which app your teen uses. Making sure they are able to think critically about their behavior online, the content they encounter, and how they interact with others will go a long way in keeping them safe. 
              </p>
              <p>
              To help you in these conversations, we asked parents at Discord to share a few tips they use with their own teens.
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
                    1. Let your teen know that the same rules apply online as offline
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#dua"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                   2. Talk about what content they see and share online
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#tiga"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    3. Set limits on screen time with your teen.
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#empat"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    4. Try Discord for yourself 
                  </a>
                </li>
                <li className="mt-[24px] hover:underline">
                  <a
                    href="#lima"
                    className="block text-[#23272a] text-[16px] leading-[26px]"
                  >
                    5. Third party resources 
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
                1. Let your teen know that the same rules apply online as offline
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                The same common sense and critical thinking they use offline should be used online too. For example, only accept friend requests from people you know. If something doesn’t seem right, tell a trusted adult. Behavior that’s not okay at school is also not okay online. 
                </li>
                <li>
                Review <a href="/" className="text-[#00b0f4] hover:underline">Discord’s Community Guidelines</a> with your teen and help them understand what is and isn’t permissible on Discord.
                </li>
                <li>
                Review their privacy settings and the servers they belong to with them so they fully understand who can interact with them on Discord.
                </li>
              </ul>
             
              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="dua"
              >
                2. Talk about what content they see and share online
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Much of our teens’ lives take place online today, including romances.
                </li>
                <li>
                Sharing personal images online can have long-term consequences and it’s important for teens to understand these consequences. Help them think about what it might feel like to have intimate photos of themselves forwarded to any number of peers by someone they thought they liked or trusted. Make them aware of the risk of sharing intimate pictures with anyone. 
                </li>
                <li>
                Age-restricted content exists on Discord, as it does on many other online services. On Discord, users have to opt-in to seeing this content. Have a conversation with your teen about age-restricted content, what they may or may not be comfortable looking at, and whether they feel pressured to look at this content.
                </li>
                <li>
                Review your teen’s content filters on Discord. Have a discussion about who is on their friend’s list, who they’re messaging, and what information they are sharing about themselves.
                </li>
              </ul>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="tiga"
              >
                3. Set limits on screen time with your teen.
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                iOS and Android operating systems offer parental controls that can help you manage your teen's phone usage if needed. Apple and Microsoft offer similar controls for computers.
                </li>
                <li>
                If you are worried about how much time your teen spends online, set ground rules - for example, “no social media after 10 PM,” or “no phone at the dinner table.”
                </li>
              </ul>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="empat"
              >
                4. Try Discord for yourself 
              </h5>
              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                Most of the services that your kids use online aren’t reserved to teens. You might find that you also enjoy using them, and might even find new and fun ways to communicate as a family. 
                </li>
                <li>
                You will also understand how these apps work from the inside, and will be more easily able to talk to your teens about staying safe online. 
                </li>
                <li>
                You can download and create a Discord account <a href="/" className="text-[#00b0f4] hover:underline">right here</a>.  
                </li>
                <li>
                We suggest asking your teen to give you a tour of Discord using your new account! Some prompts you can use to get started are:
                </li>
                <ul className="mt-[16px] ml-[1em] list-disc">
                    <li>
                    Show me how to add you as a friend!
                    </li>
                    <li>
                    Show me how to create a server together.
                    </li>
                    <li>
                    Show me your favorite features.
                    </li>
                    <li>
                    Show me how you stay in touch with your friends.
                    </li>
                    <li>
                    Show me your favorite emojis or gifs. 
                    </li>
                </ul>
              </ul>

              <h5
                className="text-[#23272a] mb-4 mt-16 text-[24px] leading-[120%] font-bold"
                id="lima"
              >
                5. Third party resources 
              </h5>

              <p className="mb-6">
              Many online safety experts provide resources for parents to navigate their kids’ online lives. 
              </p>

              <p className="mb-6">
              ConnectSafely published their <a href="https://www.connectsafely.org/discord/" className="text-[#00b0f4] hover:underline">Parent’s Guide to Discord</a> which gives a holistic overview of how your teen uses Discord, our safety settings, and ways to start conversations with your teen about their safety.
              </p>

              <p className="mb-6">
              Find more information from other organizations, please go directly to their websites:
              </p>

              <ul className="mt-[16px] ml-[1em] list-disc">
                <li>
                <a href="https://www.connectsafely.org/?doing_wp_cron=1659939194.3846530914306640625000" className="text-[#00b0f4] hover:underline">Connect Safely</a> 
                </li>
                <li>
                <a href="https://www.commonsensemedia.org/" className="text-[#00b0f4] hover:underline">Common Sense Media </a>
                </li>
                <li>
                <a href="https://www.fosi.org/" className="text-[#00b0f4] hover:underline">Family Online Safety Institute</a>
                </li>
                <li>
                <a href="https://www.internetmatters.org/" className="text-[#00b0f4] hover:underline">Internet Matters</a>
                </li>
                <li>
                <a href="https://beinternetawesome.withgoogle.com/en_us/" className="text-[#00b0f4] hover:underline">Be Internet Awesome</a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

export default TalkingAboutOnline;
