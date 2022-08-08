import React,{useState} from "react";
import Button from "./Button";
import logo2 from "../assets/Logo Blue.svg";
function Header3() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // let Links = [
  //   { name: "Download", link: "https://www.instagram.com/discord/" },
  //   { name: "Nitro", link: "/" },
  //   { name: "Safety", link: "./Safety.js" },
  //   { name: "Support", link: "/" },
  //   { name: "Blog", link: "/" },
  //   { name: "Careers", link: "/" },
  // ];
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-500"
              href="#pablo"
            >
              <img
            src={logo2}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >   
            <div className="text-black">
            <ion-icon name={navbarOpen ? "close" : "menu"}></ion-icon>
            </div>
               
            </button>
            <div className="bg-white text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Button>Open Discord</Button>
             </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row  list-none lg:ml-auto">
              <li className="nav-item col-span-5 ">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-500 hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-blue-500 opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-500 hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-blue-500 opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-500 hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-blue-500 opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header3;
