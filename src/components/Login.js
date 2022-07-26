import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import barcode from "../assets/Barcode.png";
import logo from "../assets/barcode-logo.png";

function Login() {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="absolute w-full h-full top-0 left-0 min-h-[582px] flex items-center justify-center bg-[#5865f2]">
        {/* <div className="opacity-100 scale-0"> */}
        <div>
          <form className="w-[784px] bg-[#36393f] text-[#72767d] p-[32px] rounded-md box-border">
            <div className="w-full text-center">
              <div className="flex-row flex-nowrap flex justify-start">
                <div className=" items-start flex flex-col grow ">
                  <div className="flex items-center flex-col w-full">
                    <h3 className="text-white font-semibold mb-[8px] text-[25px] leading-[30px]">
                      Welcome back!
                    </h3>
                    <div className="text-[#b9bbbe] text-[16px] leading-[20px] font-normal">
                      We're so excited to see you again!
                    </div>
                  </div>
                  <div className="w-full text-left mt-[20px] ">
                    <div className="mb-[20px] ">
                      <h5 className="text-[#b9bbbe] mb-[8px] text-[12px] leading-[16px] font-medium uppercase">
                        Email or Phone Number
                      </h5>
                      <div className="flex text-center text-[16px] w-full rounded bg-[#202225]">
                        <div className="grow flex flex-col">
                          <input className="bg-transparent p-[10px] h-[40px] w-full"></input>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-[#b9bbbe] mb-[8px] text-[12px] leading-[16px] font-medium uppercase">
                        Password
                      </h5>
                      <div className="flex text-center text-[16px] w-full rounded bg-[#202225]">
                        <div className="grow flex flex-col">
                          <input
                            type="password"
                            className="bg-transparent p-[10px] h-[40px] w-full"
                          ></input>
                        </div>
                      </div>
                    </div>

                    <button className="text-[#00aff4] block px-0 mb-[20px] mt-[4px] w-auto h-auto relative text-[14px] font-medium leading-4">
                      <div className="my-0 mx-auto whitespace-nowrap">
                        Forgot your password?
                      </div>
                    </button>

                    <button className="w-full bg-[#5865f2] rounded h-[44px] text-[16px] leading-[24px] mb-[8px] text-white relative flex justify-center text-center py-[2px] px-4">
                      <div className="my-auto mx-auto whitespace-nowrap">
                       <Link to={"/Content"}> Login  </Link> 
                      </div>
                    </button>

                    <div className="mt-[4px] ">
                      <span className="text-[14px] leading-[16px]">
                        {" "}
                        Need an account?
                      </span>
                      <button className="text-[#00aff4] ml-[6px]  px-0 mb-[20px] mt-[4px] w-auto h-auto relative text-[14px] font-medium leading-4 inline-block">
                      <div className="my-0 mx-auto whitespace-nowrap">
                        <Link to={"/Register"}>Register </Link>
                      </div>
                    </button>
                    </div>
                  </div>
                </div>

                <div className="mx-[32px] "></div>

                <div className="flex items-center relative w-[240px] h-[344px]">
                    <div className="h-full w-full grow shrink-0 basis-auto">
                        <div className="opacity-100 h-full translate-x-0 w-full">
                            <div className=" flex-col justify-center h-full flex items-center">
                                <div className="flex w-[176px] h-[176px] relative mb-[32px]">
                                    <div className="p-[8px] rounded bg-white absolute">
                                        <img className="block "src={barcode}>
                                        </img>
                                    </div>
                                    <div className="w-full h-full absolute items-center justify-center flex">
                                        <img src={logo} className="w-[50px] h-[50px] flex">
                                        </img>
                                    </div>
                                </div>
                                <h3 className="text-white font-semibold text-[30px] leading-[30px] mb-[8px] text-center">
                                 Log in with QR Code
                                </h3>
                                 
                                <div className="text-[#b9bbbe] text-[14px] leading-5 font-normal">
                                Scan this with the <strong>Discord mobile app</strong> to log in instantly.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Login;
