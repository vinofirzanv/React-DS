import React, { Fragment, useState } from "react";
import logo from "../assets/Logo-White.png";
import Button from "./Button";

function Nav() {
  let Links = [
    { name: "Download", link: "/" },
    { name: "Nitro", link: "/" },
    { name: "Safety", link: "/" },
    { name: "Support", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Careers", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  return (
      <div className=" lg:min-h-screen lg:w-screen  top-0 left-0">
        <div className="">

    
        <div className="md:flex items-center justify-between bg-[#5865F2] md:px-20 px-10 py-3 ">
          <div className="cursor-pointer flex items-center">
            <span>
              <img className="w-32" src={logo} alt="Logo Discord" />
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden text-white"
          > 
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center bg-[#5865F2] md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 text-white hover:underline"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
              <div className="hidden lg:flex bg-white ">
              <Button>Open Discord</Button>
              </div>
          

          {/* <Button>Login</Button>
         <Button>Sign Up</Button> */}
        </div>
      </div>
      </div>
  );
}

export default Nav;
