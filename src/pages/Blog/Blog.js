import React, { Fragment, useState } from "react";
import Logo from "../../assets/Logo-Blog.svg";
import Blog1 from "../../assets/Blog1.png";
import Blog2 from "../../assets/Blog2.png";
import Blog3 from "../../assets/Blog3.png";
import Blogmini1 from "../../assets/Blogmini1.png";
import Blogmini2 from "../../assets/Blogmini2.png";
import Blogmini3 from "../../assets/Blogmini3.png";
import Blogmini4 from "../../assets/Blogmini4.png";
import Blogmini5 from "../../assets/Blogmini5.png";
import Blogmini6 from "../../assets/Blogmini6.png";
import bigblog from "../../assets/bigblog.svg";
import community1 from "../../assets/CommunityBlog.svg";
import community2 from "../../assets/CommunityBlog2.png";
import community3 from "../../assets/CommunityBlog3.png";
import re1 from "../../assets/blogre1.svg";
import re2 from "../../assets/blogre2.png";
import re3 from "../../assets/blogre3.png";
import re4 from "../../assets/blogre4.png";
import re5 from "../../assets/blogre5.png";
import ds1 from "../../assets/blogds1.svg";
import ds2 from "../../assets/blogds2.png";
import ds3 from "../../assets/blogds3.png";
import ds4 from "../../assets/blogds4.jpeg";
import ds5 from "../../assets/blogds5.png";
import ps1 from "../../assets/ps1.svg";
import ps2 from "../../assets/ps2.png";
import ps3 from "../../assets/ps3.png";
import ed1 from "../../assets/ed1.svg";
import ed2 from "../../assets/ed2.png";
import ed3 from "../../assets/ed3.png";
import ed4 from "../../assets/ed4.png";
import ed5 from "../../assets/ed5.png";
import { Link } from "react-router-dom";
import FooterBlog from "../../components/FooterBlog";

function Blog() {
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
              <li className="dropdown relative inline-block" onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}>
                <span className="flex pt-0 px-[16px] pb-[10px] center text-white">
                  <span className=" leading-[1.625] text-[20px]">
                    COLLECTIONS
                  </span>
                  <svg fill="white" width="24px" height="24px" viewBox="0 -3 20 20">
                    <path d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"></path>
                  </svg>
                </span>
                <div>
                  <ul
                    className={`absolute z-10 top-10 left-4 p-4  box-border drop-shadow-lg  text-black bg-white ${
                      isHovering ? "" : "hidden" }`}
                  >
                    <li className="block rounded-lg  ">
                      <a href="support.js" className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Community
                      </a>
                    </li>
                    <li className="block rounded-lg ">
                    <a href="support.js" className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Discord HQ
                      </a>
                    </li>
                    <li className="block rounded-lg  ">
                    <a href="support.js" className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Engineering & Design
                      </a>
                    </li>
                    <li className="block rounded-lg ">
                    <a href="support.js" className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Policy & Safety
                      </a>
                    </li>
                    <li className="block rounded-lg ">
                    <a href="support.js" className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Product & Features
                      </a>
                    </li>
                    <li className="block rounded-lg ">
                    <a href="support.js" className="block p-2 cursor-pointer hover:text-blue-700 ">
                      Resources & Education
                      </a>
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

      <div className="h-[410px] pt-[72px] bg-[#404eed] uppercase"></div>

      <div className="my-[100px]">
        <div className="mt-[-442px] mb-[120px] relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
          <div className="px-[16px]">
            <div className="transition-all">
              <div className="transition-all">
                <a href="/" className="w-full text-none inline-block">
                  <img
                    alt="Gambar1"
                    src={Blog1}
                    className="relative w-full min-h-[352px] rounded-lg opacity-[1]"
                  ></img>
                </a>
              </div>
              <div className="mt-[40px]">
                <a
                  href="/"
                  className="block text-[#5865f2] text-base font-bold uppercase "
                >
                  PRODUCT & FEATURES
                </a>
                <a
                  href="/"
                  className="block overflow-visible mt-[10px] ml-0 text-black text-5xl font-black uppercase leading-[48px] hover:text-[#5865f2]"
                >
                  How We’re Improving the Discord Experience for Everyone{" "}
                </a>
              </div>
            </div>
          </div>
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
                  Sharing Messages in Voice Just Got Way Easier: Introducing
                  Text Chat in Voice Channels
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
                  Idle Nights & Vibrant Lights: Discord’s Newest Merch Line
                  Drops Today
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
          <div className="mt-[80px] p-[40px] rounded-lg bg-[#f6f6f6]">
            <div className="table content-none mt-[72px] w-full">
              <div className="w-[33%] relative float-left min-h-[1px] px-[10px]">
                <div className=" mb-[8px] font-medium text-base">
                  COLLECTIONS
                </div>
                <div className="overflow-visible text-[#5865f2] text-[40px] leading-[100%] font-black uppercase">
                  Product & Features
                </div>
                <img
                    alt="Gambar9"
                  src={bigblog}
                  className="my-4 inline-block max-w-full "
                ></img>
                <div className="mt-[10px] text-[22px] leading-7 font-medium">
                  Announcements, new features, and general info about the
                  Discord app.
                </div>
                <a href="/">
                  <button className="mt-[20px] mx-auto py-4 px-8 rounded-[28px] text-sm text-white bg-[#5865f2]">
                    View Collection
                  </button>
                </a>
              </div>

              <div className="w-[67%] relative float-left min-h-[1px] pl-[48px] px-[10px]">
                <div className="mb-[48px] pl-[16px]">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                        alt="Gambar10"
                      src={Blog1}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                      How We’re Improving the Discord Experience for Everyone
                    </div>
                  </a>
                </div>

                <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4 ">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={Blogmini1} alt="Gambar11" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover hover:text-[#5865f2]"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%] hover:text-[#5865f2]">
                        Meet Your Newest Community Moderator: AutoMod Is Here 
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={Blogmini2} alt="Gambar12" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      An Update on Tools for Building and Sustaining Communities on Discord 
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={Blogmini4} alt="Gambar13" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Sharing Messages in Voice Just Got Way Easier: Introducing Text Chat in Voice Channels 
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              

              </div>
            </div>
          </div>
        </div>

        <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
          <div className="mt-[80px] p-[40px] rounded-lg bg-[#f6f6f6]">
            <div className="table content-none mt-[72px] w-full">
              <div className="w-[33%] relative float-left min-h-[1px] px-[10px]">
                <div className=" mb-[8px] font-medium text-base">
                  COLLECTIONS
                </div>
                <div className="overflow-visible text-[#5865f2] text-[40px] leading-[100%] font-black uppercase">
                Community
                </div>
                <img
                  src={community1}
                  alt="Gambar14"
                  className="my-4 inline-block max-w-full "
                ></img>
                <div className="mt-[10px] text-[22px] leading-7 font-medium">
                Stories, spotlights, and behind the scenes from the heart and soul of Discord: the community.
                </div>
                <a href="/">
                  <button className="mt-[20px] mx-auto py-4 px-8 rounded-[28px] text-sm text-white bg-[#5865f2]">
                    View Collection
                  </button>
                </a>
              </div>

              <div className="w-[67%] relative float-left min-h-[1px] pl-[48px] px-[10px]">
                <div className="mb-[48px] pl-[16px]">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                     alt="Gambar15"
                      src={Blog3}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    Building Better Communities with Discord
                    </div>
                  </a>
                </div>

                <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={Blogmini3}  alt="Gambar15" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Pride 2022 @ Discord
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={community3}  alt="Gambar16" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      AAPI Heritage Month at Discord: Celebrating Who We Are
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={community2}  alt="Gambar17" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Calixta’s Guide to Navigating the Voice Acting Industry
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              

              </div>
            </div>
          </div>
        </div>
        
        <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
          <div className="mt-[80px] p-[40px] rounded-lg bg-[#f6f6f6]">
            <div className="table content-none mt-[72px] w-full">
              <div className="w-[33%] relative float-left min-h-[1px] px-[10px]">
                <div className=" mb-[8px] font-medium text-base">
                  COLLECTIONS
                </div>
                <div className="overflow-visible text-[#5865f2] text-[40px] leading-[100%] font-black uppercase">
                Resources & Education
                </div>
                <img
                  src={re1}
                  alt="Gambar17"
                  className="my-4 inline-block max-w-full "
                ></img>
                <div className="mt-[10px] text-[22px] leading-7 font-medium">
                Tutorials and guides to help with Discord and other topics of interest.
                </div>
                <a href="/">
                  <button className="mt-[20px] mx-auto py-4 px-8 rounded-[28px] text-sm text-white bg-[#5865f2]">
                    View Collection
                  </button>
                </a>
              </div>

              <div className="w-[67%] relative float-left min-h-[1px] pl-[48px] px-[10px]">
                <div className="mb-[48px] pl-[16px]">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                     alt="Gambar18"
                      src={re2}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    How 2-Factor Authentication Helps Keep Your Discord Account Safe
                    </div>
                  </a>
                </div>

                <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={re3} alt="Gambar19" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Discussing Latinx Heritage Month with Discord’s Latinx ERG: La Cafetería
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={re4} alt="Gambar19" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Ten Tips to Help Your College Club Bloom on Discord
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={re5} alt="Gambar20" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Resources for Celebrating Pride Throughout The Year
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              

              </div>
            </div>
          </div>
        </div>
        
        <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
          <div className="mt-[80px] p-[40px] rounded-lg bg-[#f6f6f6]">
            <div className="table content-none mt-[72px] w-full">
              <div className="w-[33%] relative float-left min-h-[1px] px-[10px]">
                <div className=" mb-[8px] font-medium text-base">
                  COLLECTIONS
                </div>
                <div className="overflow-visible text-[#5865f2] text-[40px] leading-[100%] font-black uppercase">
                Discord HQ
                </div>
                <img
                 alt="Gambar21"
                  src={ds1}
                  className="my-4 inline-block max-w-full "
                ></img>
                <div className="mt-[10px] text-[22px] leading-7 font-medium">
                General company updates about what Discord is up to at HQ.
                </div>
                <a href="/">
                  <button className="mt-[20px] mx-auto py-4 px-8 rounded-[28px] text-sm text-white bg-[#5865f2]">
                    View Collection
                  </button>
                </a>
              </div>

              <div className="w-[67%] relative float-left min-h-[1px] pl-[48px] px-[10px]">
                <div className="mb-[48px] pl-[16px]">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                      alt="Gambar22"
                      src={ds2}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    Idle Nights & Vibrant Lights: Discord’s Newest Merch Line Drops Today
                    </div>
                  </a>
                </div>

                <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={ds3} alt="Gambar23" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Sourcery at Discord: The Team Who Finds New Discord Employees
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={ds4} alt="Gambar23" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Discord Welcomes Elizabeth Hamren as new COO
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              <div className="table mx-0 w-1/3 float-left" >
                <div className="w-full px-0 relative float-left min-h-1">
                  <div className="pl-4">
                      <a href="/" className="w-full max-w-full inline-block hover:text-[#5865f2] ">
                      <img src={ds5}  alt="Gambar24" className="w-full h-[150px] min-h-0 mb-5 rounded-lg object-cover"></img>
                      <div className="text-black font-medium text-[18px] leading-[125%]">
                      Introducing @everyone and @here Discord Merch — New Store Swag
                      </div>
                      </a>
                  </div>
                </div>
              </div>

              

              </div>
            </div>
          </div>
        </div>

        <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
          <div className="mt-[80px] p-[40px] rounded-lg bg-[#f6f6f6]">
            <div className="table content-none mt-[72px] w-full">
              <div className="w-[33%] relative float-left min-h-[1px] px-[10px] mt-[24px]">
                <div className=" mb-[8px] font-medium text-base">
                  COLLECTIONS
                </div>
                <div className="overflow-visible text-[#5865f2] text-[40px] leading-[100%] font-black uppercase">
                Policy & Safety
                </div>
                <img
                  alt="Gambar25"
                  src={ps1}
                  className="my-4 inline-block max-w-full "
                ></img>
                <div className="mt-[10px] text-[22px] leading-7 font-medium">
                General tips and insights from Discord's Policy & Safety teams who enable users and communities to be safe on the platform.
                </div>
                <a href="/">
                  <button className="mt-[20px] mx-auto py-4 px-8 rounded-[28px] text-sm text-white bg-[#5865f2]">
                    View Collection
                  </button>
                </a>
              </div>

              <div className="w-[67%] relative float-left min-h-[1px] pl-[48px] px-[10px]">
                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                     alt="Gambar26"
                      src={Blog2}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    Discord Transparency Report: January - March 2022
                    </div>
                  </a>
                </div>

                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                    alt="Gambar27"
                      src={ps2}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-[20px] leading-[125%] font-medium ">
                    Our Response to the Tragedy in Buffalo xxxxxxxxxxxxxx                        
                    </div>
                  </a>
                </div>
             
                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                    alt="Gambar28"
                      src={Blog2}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    Discord Transparency Report: July – December 2021
                    </div>
                  </a>
                </div>

                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                    alt="Gambar29"
                      src={ps3}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    Addressing Health Misinformation
                    </div>
                  </a>
                </div>
              

              </div>
            </div>
          </div>
        </div>

        <div className="relative block w-auto max-w-[1480px] min-h-[80px] mx-auto px-[40px] object-fill">
          <div className="mt-[80px] p-[40px] rounded-lg bg-[#f6f6f6]">
            <div className="table content-none mt-[72px] w-full">
              <div className="w-[33%] relative float-left min-h-[1px] px-[10px] mt-[24px]">
                <div className=" mb-[8px] font-medium">
                  COLLECTIONS
                </div>
                <div className="overflow-visible text-[#5865f2] text-[40px] leading-[100%] font-black uppercase">
                Engineering & Design
                </div>
                <img
                alt="Gambar30"
                  src={ed1}
                  className="my-4 inline-block max-w-full "
                ></img>
                <div className="mt-[10px] text-[22px] leading-7 font-medium">
                In-depth analysis and thought process on engineering and design challenges.
                </div>
                <a href="/">
                  <button className="mt-[20px] mx-auto py-4 px-8 rounded-[28px] text-sm text-white bg-[#5865f2]">
                    View Collection
                  </button>
                </a>
              </div>

              <div className="w-[67%] relative float-left min-h-[1px] pl-[48px] px-[10px]">
                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                    alt="Gambar31"
                      src={ed2}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    How Data Science Informs Strategy & Innovation at Discord
                    </div>
                  </a>
                </div>

                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                    alt="Gambar32"
                      src={ed3}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-[20px] leading-[125%] font-medium ">
                    Why and How Discord Uses Patch to Test Elixir         
                    </div>
                  </a>
                </div>
             
                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                    alt="Gambar33"
                      src={ed4}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    How Discord Creates Insights from Trillions of Data Points
                    </div>
                  </a>
                </div>

                <div className="mb-[48px] pl-[16px] w-1/2 float-left">
                  <a href="/" className="block w-full hover:text-[#5865f2] ">
                    <img
                    alt="Gambar34"
                      src={ed5}
                      className="w-full block max-h-[280px] min-h-[160px] min-w-full mb-[20px] rounded-lg object-cover"
                    ></img>
                    <div className="text-xl leading-[125%] font-medium ">
                    Building open-source design tools to improve Discord’s design workflow
                    </div>
                  </a>
                </div>
            
              </div>
            </div>
          </div>
        </div>

      </div>
      <FooterBlog></FooterBlog>
    </Fragment>
  );
}

export default Blog;
