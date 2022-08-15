import React, { Fragment, useState } from "react";
import Logo from "../../../assets/Logo-Blog.svg";
import Blog1 from "../../../assets/Blog1.png";
import Blog2 from "../../../assets/Blog2.png";
import Blog3 from "../../../assets/Blog3.png";
import Blogmini1 from "../../../assets/Blogmini1.png";
import Blogmini2 from "../../../assets/Blogmini2.png";
import Blogmini3 from "../../../assets/Blogmini3.png";
import Blogmini4 from "../../../assets/Blogmini4.png";
import Blogmini5 from "../../../assets/Blogmini5.png";
import Blogmini6 from "../../../assets/Blogmini6.png";
import { Link } from "react-router-dom";
import FooterBlog from "../../../components/FooterBlog";

import BannerKiri from "../../../assets/Discover-1.svg";
import BannerKanan from "../../../assets/Discover-2.svg";

function Community() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setIsHovering(false);
    } else {
      setIsHovering(true);
    }
  };
  const onMouseExit = () => {
    if (window.innerWidth < 960) {
      setIsHovering(false);
    } else {
      setIsHovering(false);
    }
  };
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClickNav = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <Fragment>
      <div className="bg-[#404eed]">
        <header className="w-full px-10 mx-auto my-0 relative z-[100] items-center flex justify-between h-[84px] box-border ">
          <div className="logo">
            <Link to="/Content" className="px-[10px]">
              <img src={Logo} className="max-h-[37px]" alt="GambarLogo"></img>
            </Link>
          </div>

          <div className="nav-wrapper ">
            <nav className="hidden lg:relative lg:inline-block lg:whitespace-nowrap lg:py-0 lg:pl-0 lg:pr-[15px]  text-white">
              <li
                className="dropdown relative inline-block"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
              >
                <span className="flex pt-0 px-[16px] pb-[10px] center text-white">
                  <span className=" leading-[1.625] text-[20px]">
                    COLLECTIONS
                  </span>
                  <svg
                    fill="white"
                    width="24px"
                    height="24px"
                    viewBox="0 -3 20 20"
                  >
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <div>
                  <ul
                    className={`absolute z-10 top-10 left-4 p-4  box-border drop-shadow-lg  text-black bg-white ${
                      isHovering ? "" : "hidden"
                    }`}
                  >
                   <li className="block rounded-lg  ">
                      <Link to={"/Community"} className="block p-2 cursor-pointer text-blue-700 ">
                      Community
                      </Link>
                    </li>
                    <li className="block rounded-lg ">
                    <Link to={"/DiscordHQ"} className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Discord HQ
                      </Link>
                    </li>
                    <li className="block rounded-lg  ">
                    <Link to={"/EngineeringDesign"} className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Engineering & Design
                      </Link>
                    </li>
                    <li className="block rounded-lg ">
                    <Link to={"/HowtoDiscord"} className="block p-2 cursor-pointer hover:text-blue-700 ">
                      How to Discord
                      </Link>
                    </li>
                    <li className="block rounded-lg ">
                    <Link to={"/PolicySafety"} className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Policy & Safety
                      </Link>
                    </li>
                    <li className="block rounded-lg ">
                    <Link to={"/ProductFeatures"} className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Product & Features
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <div>
                  <ul className={`absolute  min-w-[170px]  bg-[#fff] mt-[10px] py-[10px]  px-0  text-left z-[1000] text-black ${isHovering ? "" : "hidden"}`}>
                    <li
                      href="support.js"
                      className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-white block"
                    >
                      <a className="block p-2 cursor-pointer hover:bg-gray-400">Community</a>
                    </li>
                    <a
                      href="support.js"
                      className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
                    >
                      Discord HQ
                    </a>
                    <a
                      href="support.js"
                      className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
                    >
                      Engineering & Design
                    </a>
                    <a
                      href="support.js"
                      className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
                    >
                      Policy & Safety
                    </a>
                    <a
                      href="support.js"
                      className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
                    >
                      Product & Features
                    </a>
                    <a
                      href="support.js"
                      className="cursor-pointer py-[7px] pr-[40px] pl-[20px] bg-transparent block"
                    >
                      Resources & Education
                    </a>
                  </ul>
                
                </div> */}
              </li>

              <Link to={"/BlogFeatured"} className="w-auto py-0 px-[20px]">
                {" "}
                FEATURED
              </Link>
              <Link to="/Content" className="w-auto py-0 px-[20px]">
                {" "}
                DISCORD.COM
              </Link>
            </nav>
          </div>
        </header>
      </div>

      <div className="h-[300px] py-[72px] mb-20 bg-[#404eed] ">
        <h1 className="font-extrabold text-white uppercase text-center text-6xl mt-10">
          Community{" "}
        </h1>
        <h2 className=" text-white text-center mt-10">
          {" "}
          Stories, spotlights, and behind the scenes from the heart and soul of
          Discord: the community.
        </h2>
      </div>

      <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
        <div className="content-none table w-full">
          <div className="px-4 w-1/2 relative float-left min-h-[1px]">
            <a href="/" className="w-full inline-block">
              <img
                alt="Gambar2"
                src={Blog2}
                className="block w-full max-h-[280px] min-h-[160px] max-w-full min-w-full mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Policy & Safety
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] text-2xl leading-[125%] font-bold ">
                Discord Transparency Report: January - March 2022
              </div>
            </a>
          </div>
          <div className="px-4 w-1/2 relative float-left min-h-[1px]">
            <a href="/" className="w-full inline-block">
              <img
                alt="Gambar3"
                src={Blog3}
                className="block w-full max-h-[280px] min-h-[160px] max-w-full min-w-full mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Community
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] text-2xl leading-[125%] font-bold">
                Building Better Communities with Discord
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
        <div className="table content-none mt-[72px] w-full">
          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar4"
                src={Blogmini1}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Meet Your Newest Community Moderator: AutoMod Is Here
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar4"
                src={Blogmini2}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                An Update on Tools for Building and Sustaining Communities on
                Discord
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar5"
                src={Blogmini3}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Community
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Pride 2022 @ Discord wqeqweqqweqweqweqwewq
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar6"
                src={Blogmini4}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Sharing Messages in Voice Just Got Way Easier: Introducing Text
                Chat in Voice Channels
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar7"
                src={Blogmini5}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Discord HQ
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Idle Nights & Vibrant Lights: Discord’s Newest Merch Line Drops
                Today
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar8"
                src={Blogmini6}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Celebrate Discord’s Bir7hday with Party Mode!
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
        <div className="table content-none mt-[72px] w-full">
          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar4"
                src={Blogmini1}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Meet Your Newest Community Moderator: AutoMod Is Here
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar4"
                src={Blogmini2}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                An Update on Tools for Building and Sustaining Communities on
                Discord
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar5"
                src={Blogmini3}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Community
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Pride 2022 @ Discord wqeqweqqweqweqweqwewq
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar6"
                src={Blogmini4}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Sharing Messages in Voice Just Got Way Easier: Introducing Text
                Chat in Voice Channels
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar7"
                src={Blogmini5}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Discord HQ
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Idle Nights & Vibrant Lights: Discord’s Newest Merch Line Drops
                Today
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar8"
                src={Blogmini6}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Celebrate Discord’s Bir7hday with Party Mode!
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
        <div className="table content-none mt-[72px] w-full">
          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar4"
                src={Blogmini1}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Meet Your Newest Community Moderator: AutoMod Is Here
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar4"
                src={Blogmini2}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                An Update on Tools for Building and Sustaining Communities on
                Discord
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar5"
                src={Blogmini3}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Community
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Pride 2022 @ Discord wqeqweqqweqweqweqwewq
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar6"
                src={Blogmini4}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Sharing Messages in Voice Just Got Way Easier: Introducing Text
                Chat in Voice Channels
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar7"
                src={Blogmini5}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Discord HQ
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Idle Nights & Vibrant Lights: Discord’s Newest Merch Line Drops
                Today
              </div>
            </a>
          </div>

          <div className="flex px-[16px] justify-start float-left flex-wrap items-start w-1/3">
            <a href="/" className="w-full self-auto  max-w-full inline-block">
              <img
                alt="Gambar8"
                src={Blogmini6}
                className="w-full h-[205px] min-h-0 mb-[20px] rounded-lg object-cover"
              ></img>
            </a>
            <a
              href="/"
              className="block text-[#5865f2] font-bold text-base uppercase"
            >
              Product & Features
            </a>
            <a
              href="/"
              className="max-w-full inline-block text-black hover:text-[#5865f2]"
            >
              <div className="block mt-[10px] h-[210px] text-2xl leading-[125%] font-bold">
                Celebrate Discord’s Bir7hday with Party Mode!
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-32">
          <a className="bg-[#5865f2] text-white rounded-lg py-3 px-6">
            <div className="inline-block">Next </div>
            <svg
              fill="white"
              width="12px"
              height="12px"
              viewBox="0 0 12 12"
              className="inline-block ml-2"
            >
              <path d="M4 2l4 4-4 4"></path>
            </svg>
          </a>
        </div>
      </div>
      <FooterBlog></FooterBlog>
    </Fragment>
  );
}

export default Community;
