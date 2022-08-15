import React,{useState} from "react";
import {Link} from 'react-router-dom';
import Button from "./Button";
import logo from "../assets/Logo-White.png";
function HeaderBlack() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  let Links = [
    { name: "Download", link: "/Download" },
    { name: "Nitro", link: "/Nitro" },
    { name: "Safety", link: "/Safety" },
    { name: "Support", link: "/Support" },
    { name: "Blog", link: "/Blog" },
    { name: "Careers", link: "/Careers" },
  ];
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#23272a]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          {/* <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"> */}
            <Link
              className="text-sm flex item-center font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
              to={"/Content"}
            >
             <img
            src={logo}
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
            </Link>
            <div className="flex md:order-2">

            <div className="bg-white text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link to={"/Login"}> 
              <Button>Login</Button>
            </Link>
            
             </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <ion-icon name={navbarOpen ? "close" : "menu"}></ion-icon>
            </button>
       
          </div>
          <div
            className={
              
              "justify-between items-center w-full md:w-auto lg:flex md:order-1 mt-2 rounded-lg bg-white lg:bg-[#23272a] z-10 px-10" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 lg:text-white text-black hover:underline"
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            </ul>
            </div>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
}

export default HeaderBlack;
