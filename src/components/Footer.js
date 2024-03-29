import React from "react";
import Button from "./Button";
import logo from "../assets/Logo-White.png";
import Country from "./Country";

function Footer() {
  let Links = [
    {
      name: <ion-icon name="logo-twitter"></ion-icon>,
      link: "https://twitter.com/discord",
    },

    {
      name: <ion-icon name="logo-instagram"></ion-icon>,
      link: "https://www.instagram.com/discord/",
    },

    {
      name: <ion-icon name="logo-facebook"></ion-icon>,
      link: "https://www.facebook.com/discord/",
    },
    {
      name: <ion-icon name="logo-youtube"></ion-icon>,
      link: "https://www.youtube.com/discord",
    },
  ];

  let Links2 = [
    { name: "Download", link: "/Download" },

    { name: "Nitro", link: "/Nitro" },

    {
      name: "Status",
      link: "https://discordstatus.com/",
    },
  ];

  let Links3 = [
    { name: "About", link: "/Careers" },

    { name: "Jobs", link: "/Careers" },

    {
      name: "Branding",
      link: "https://discord.com/branding",
    },
    {
      name: "Newsroom",
      link: "https://discord.com/newsroom",
    },
  ];

  let Links4 = [
    { name: "College", link: "/" },

    { name: "Support", link: "/Support" },

    {
      name: "Safety",
      link: "/Safety",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "Feedback",
      link: "/Feedback",
    },
    {
      name: "Developers",
      link: "https://discord.com/developers/docs/intro",
    },
    {
      name: "Streamkit",
      link: "https://discord.com/streamkit",
    },
  ];

  let Links5 = [
    { name: "Terms", link: "https://discord.com/terms" },

    { name: "Privacy", link: "https://discord.com/privacy" },

    {
      name: "Cookie Settings",
      link: "/",
    },
    {
      name: "Guidelines",
      link: "https://discord.com/guidelines",
    },
    {
      name: "Acknowledgements",
      link: "https://discord.com/acknowledgements",
    },
    {
      name: "Licenses",
      link: "https://discord.com/licenses",
    },
    {
      name: "Moderation",
      link: "https://discord.com/moderation",
    },
  ];

  return (
    <div className="bg-[#23272a] lg:py-40 sm:px-4 py-20 dark:bg-gray-800 lg:pt-20">
      <div className="container flex flex-wrap mx-auto px-5">
        <div className="w-full md:w-1/3 mb-12 text-white font-medium lg:w-2/6">
          <div className="text-[#5865f2] text-[32px] font-extrabold uppercase leading-[95%] ">
            <p>IMAGINE A PLACE</p>
          </div>

          <div className="pt-6">
            <p>English, USA</p>
            <Country></Country>
          </div>

          <div className="pt-6 text-3xl pr-10">
            <ul className="md:flex ">
              {Links.map((link) => (
                <li key={link.name} className="mr-5 inline-block">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 inline-block text-white mb-12 lg:w-1/6">
          <div className="text-blue-700">
            <h3>Product</h3>
          </div>

          <div className=" pr-10 pt-2">
            <ul className="">
              {Links2.map((link) => (
                <li key={link.name} className="hover:underline pt-2">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" w-1/2 md:w-1/3 inline-block text-white  mb-12 lg:w-1/6">
          <div className="text-blue-700">
            <h3>Company</h3>
          </div>

          <div className="pr-10 pt-2">
            <ul className="">
              {Links3.map((link) => (
                <li key={link.name} className="hover:underline pt-2">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 inline-block text-white  mb-12 lg:w-1/6">
          <div>
            <h3 className="text-blue-700">Resources</h3>
          </div>

          <div className="pr-10 pt-2">
            <ul className="">
              {Links4.map((link) => (
                <li key={link.name} className="hover:underline pt-2">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 inline-block text-white  mb-12 lg:w-1/6">
          <div className="text-blue-700">
            <h3>Policies</h3>
          </div>

          <div className="pr-10 pt-2">
            <ul className="">
              {Links5.map((link) => (
                <li key={link.name} className="hover:underline pt-2">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#23272a] pt-10  ">
        <div className="container mx-auto border-t mb-20 lg:mb-0 px-5 pt-20 border-blue-700">
          <span className="cursor-pointer float-left ">
            <img className="w-28" src={logo} alt="Logo Discord" />
          </span>
          <span className="float-right rounded-full bg-slate-600 px-5 py-3 text-white">
            <Button className="">Open Discord</Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
