import React, { Fragment, useState } from "react";
import Button from "./Button";
import Safetyz from "../assets/Safety.svg";
import Header from "./Header";
import {Link} from 'react-router-dom';

function Safety() {
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
      <header className="bg-[#5865F2] lg:py-5 px-2 sm:px-4 py-2.5 ">
        <div className="container grid mx-auto">
          <div className="lg:grid box-border hidden mb-[40px] w-full grid-cols-12 gap-y-0 gap-x-5 py-0 px-[40px]">
            <ul className="flex border-b-[2px] border-gray-300 col-span-12 ">
              <li className="relative mb-[-2px] border-white border-b-[2px]">
                <a className="cursor-pointer text-white">
                  <span className="flex pt-0 pb-[10px] px-[16px] items-center">
                    <span className="leading-[1.625] text-[20px]">
                      Safety Center
                    </span>
                  </span>
                </a>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-white">
                  <span className=" leading-[1.625] text-[20px]">
                    Controlling Your Experince
                  </span>
                  <svg fill="white" width="24px" height="24px" viewBox="0 -3 20 20">
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>

                <div>
                  <ul
                    className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg  w-[356px] bg-white ${
                      isHovering ? "" : "hidden" }`}
                  >
                    <li className="block rounded-lg hover:bg-gray-300 ">
                      <Link to={"/Content"}>
                        <div className="block p-2 cursor-pointer hover:bg-gray-400">
                          Four steps to a super safe account{" "}
                        </div>
                      </Link>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <a href="/Content" className="block p-2 cursor-pointer">
                        Four steps to a super safe server{" "}
                      </a>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300 ">
                      <a className="block p-2 cursor-pointer">
                        Role of administrators and moderators on Discord
                      </a>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <a className="block p-2 cursor-pointer">
                        Reporting problems to Discord{" "}
                      </a>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <a className="block p-2 cursor-pointer">
                        Mental health on Discord{" "}
                      </a>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <a className="block p-2 cursor-pointer">
                        Age-Restricted Content on Discord{" "}
                      </a>
                    </li>
                    <li className="block rounded-lg hover:bg-gray-300">
                      <a className="block p-2 cursor-pointer">
                        Tips against spam and hacking{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseExit2}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-white">
                  <span className=" leading-[1.625] text-[20px]">Parents & Educators</span>
                  <svg fill="white" width="24px" height="24px" viewBox="0 -3 20 20">
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <ul
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg  w-[356px] bg-white ${
                    isHovering2 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <a className="block p-2 cursor-pointer">
                      What is Discord?{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Discord's commitment to a safe and trusted experience{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <a className="block p-2 cursor-pointer">
                      Helping your teen stay safe on Discord
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Talking about online safety with your teen
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Answering parents' and educators' top questions{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      If your teen encounters an issue{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Working with CARU to protect users on Discord
                    </a>
                  </li>
                </ul>
              </li>

              <li
                className="relative mb-[-2px]"
                onMouseEnter={onMouseEnter3}
                onMouseLeave={onMouseExit3}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-white">
                  <span className="leading-[1.625] text-[20px]">How We Enforce Rules </span>
                  <svg fill="white" width="24px" height="24px" viewBox="0 -3 20 20">
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <ul
                  className={`absolute z-10 top-10 left-4 p-4 rounded-lg box-border drop-shadow-lg w-[356px] bg-white ${
                    isHovering3 ? "" : "hidden"
                  }`}
                >
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <a className="block p-2 cursor-pointer">Our policies </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Enforcing our rules{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300 ">
                    <a className="block p-2 cursor-pointer">
                      How we investigate
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      What actions we take
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      How you can appeal our actions{" "}
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Discord's Transparency Report
                    </a>
                  </li>
                  <li className="block rounded-lg hover:bg-gray-300">
                    <a className="block p-2 cursor-pointer">
                      Working with law enforcement
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="font-bold text-white lg:font-bold lg:text-7xl text-4xl lg:pl-10 my-5">
            <h1>DISCORD SAFETY CENTER</h1>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="my-5 lg:w-1/2">
              <img src={Safetyz}></img>
            </div>

            <div className="lg:w-1/2 lg:my-5 lg:pl-10 lg:pt-14">
              <div className="lg:mb-5 ">
                <p>
                  Discord is a place dedicated to talking and hanging out with
                  your friends, family and communities. Millions of diverse
                  communities are on Discord, from small groups of old friends
                  to huge servers where hundreds of thousands of people can
                  connect over shared interests.
                </p>
              </div>

              <div>
                <p>
                  Discord isn’t a social media platform. There is no algorithm
                  deciding what you should see, no endless scrolling, no news
                  feed, no counting likes, no going viral. Instead, Discord is a
                  place where everyone can be themselves and spend time with
                  other people who share their interests and hobbies.
                  Conversations on Discord are driven only by the people you
                  choose and the topics you pick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="bg-[#f6f6f6] pt-32 pb-32 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap">
          <div>
            <div className="font-bold text-black lg:font-bold lg:text-5xl text-4xl lg:pl-10 my-5">
              <h1>PRINCIPLES</h1>
            </div>
            <div className="lg:pl-10 lg:pr-10 text-[#4f5660] ">
              <div className="lg:mb-5 mb-10 ">
                <p>
                  We want to make sure that Discord has the ability for everyone
                  to have a safe, positive and inclusive experience, no matter
                  what brought them here. For that to happen, we must all agree
                  to a set of rules that govern our interactions on Discord.
                  When you sign up to Discord, you agree to follow the rules
                  below and refrain from behavior that isn’t allowed on the
                  service.
                </p>
              </div>

              <div className="mb-10">
                <p>
                  In exchange, it’s our job to make sure your experience is
                  everything it can be. Here are the principles that guide the
                  society we want to create on Discord:
                </p>
              </div>
            </div>
          </div>

          <div className="box-border grid lg:grid-cols-12 lg:mx-10 lg:mb-16 gap-x-0 gap-y-5">
            <div className=" mt-14 col-span-4">
              <h3 className="mb-2 font-medium text-4xl">
                We’re determined to make sure that Discord will always be a
                welcoming place for you.
              </h3>
              <div className="text-[#4f5660]">
                There’s a huge responsibility in being a place where hundreds of
                millions of people talk to each other.
              </div>
            </div>

            <div className="block col-span-2"></div>

            <div className="col-span-5 mt-14">
              <h3 className="mb-2 font-medium text-4xl">
                Privacy is incredibly important to us.
              </h3>
              <div className="text-[#4f5660]">
                We do not monitor every server or every conversation. We do not
                sell your data, nor do we share it with third parties for
                advertising purposes.
              </div>
            </div>

            <div className=" mt-14 col-span-4">
              <h3 className="mb-2 font-medium text-4xl">
                Safety is just as important.
              </h3>
              <div className="text-[#4f5660]">
                We don’t sit back and simply wait for reports, but instead act
                to protect everyone on the platform. We know that there are
                cases where bad actors are acting to cause violence or harm in
                the real world, and we make it clear to them that there’s no
                place for them on Discord.
              </div>
            </div>

            <div className="block col-span-2"></div>

            <div className="col-span-5 mt-14">
              <h3 className="mb-2 font-medium text-4xl">
                Finally, Discord is pseudonymous.
              </h3>
              <div className="text-[#4f5660]">
                Your account on Discord doesn’t have to be tied back to your
                identity, and we want to make sure that everyone can be their
                true self. But that doesn’t mean that someone can be free of the
                consequences of their actions.
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="bg-white pt-32 pb-32 flex-col">
        <div className="grid container mx-auto box-border lg:grid-cols-12 p-10 gap-x-0 gap-y-5">
          <div className="col-span-4 mt-0">
            <h3 className="font-bold text-4xl">Controlling Your Experience</h3>
            <div className="mt-6 text-[#4f5660] text-2xl ">
              These resources will help you learn how you can create the best
              Discord experience for you. We cover everything from account tips,
              to server management, to how to report problems directly to our
              Trust and Safety team.
            </div>
          </div>
          <div className="block col-span-1"></div>
          <div className="col-span-7 text-2xl   mt-0">
            <div className="text-[#31bff6] hover:underline cursor-pointer">
              <a>Four steps to a super safe account</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Four steps to a super safe server</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Role of administrators and moderators on Discord</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Reporting problems to Discord</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Mental health on Discord</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Age-Restricted Content on Discord</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Tips against spam and hacking</a>
            </div>
          </div>
        </div>
      </header>

      <header className="bg-[#F6F6F6] pt-32 pb-32 flex-col">
        <div className="grid container mx-auto box-border lg:grid-cols-12 p-10 gap-x-0 gap-y-5">
          <div className="col-span-4 mt-0">
            <h3 className="font-bold text-4xl">Parents & Educators</h3>
            <div className="mt-6 text-[#4f5660] text-xl ">
              We know that teenagers and students are excited about
              communicating on Discord, which can lead to questions from parents
              and educators. Here you can find our top tips for your teens and
              classroom as they use Discord.
            </div>
          </div>
          <div className="block col-span-1"></div>
          <div className="col-span-7 text-2xl   mt-0">
            <div className="text-[#31bff6] hover:underline cursor-pointer">
              <a>What is Discord? </a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Discord's commitment to a safe and trusted experience</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Helping your teen stay safe on Discord</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Talking about online safety with your teen</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Answering parents' and educators' top questions</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>If your teen encounters an issue</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Working with CARU to protect users on Discord</a>
            </div>
          </div>
        </div>
      </header>

      <header className="bg-white pt-32 pb-32 flex-col">
        <div className="grid container mx-auto box-border lg:grid-cols-12 p-10 gap-x-0 gap-y-5">
          <div className="col-span-4 mt-0">
            <h3 className="font-bold text-4xl">How We Enforce Rules</h3>
            <div className="mt-6 text-[#4f5660] text-xl ">
              These articles help provide clarity about how we address different
              situations on Discord, from how we investigate to how we work with
              3rd parties like law enforcement. You can also find our annual
              transparency report here.
            </div>
          </div>
          <div className="block col-span-1"></div>
          <div className="col-span-7 text-2xl  mt-0">
            <div className="text-[#31bff6] hover:underline cursor-pointer">
              <a>Our policies</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Enforcing our rules</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>How we investigate</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>What actions we take</a>
            </div>

            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>How you can appeal our actions</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Discord's Transparency Report</a>
            </div>
            <div className="text-[#31bff6] mt-6 hover:underline cursor-pointer">
              <a>Working with law enforcement</a>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Safety;
