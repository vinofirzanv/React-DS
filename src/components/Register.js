import React from "react";

import { Link } from "react-router-dom";
import SelectMonth from "./SelectMonth";

function Register() {
  return (
    <div>
      {/* <Header></Header> */}
      <div className="absolute w-full h-full top-0 left-0 min-h-[582px] flex items-center justify-center bg-[#5865f2]">
        {/* <div className="opacity-100 scale-0"> */}
        <div>
            
          <form className="w-[480px] bg-[#36393f] text-[#72767d] p-[32px] rounded-md box-border">
            <div className="w-full text-center">
              <div className="flex-row flex-nowrap flex justify-start">
                <div className=" items-start flex flex-col grow ">
                  <div className="flex items-center flex-col w-full">
                    <h3 className="text-white font-semibold mb-[8px] text-[25px] leading-[30px]">
                      Create an account
                    </h3>
                  </div>
                  <div className="w-full text-left mt-[20px] ">
                    <div className="mb-[20px] ">
                      <h5 className="text-[#b9bbbe] mb-[8px] text-[12px] leading-[16px] font-medium uppercase">
                        Email
                      </h5>
                      <div className="flex text-center text-[16px] w-full rounded bg-[#202225]">
                        <div className="grow flex flex-col">
                          <input className="bg-transparent p-[10px] h-[40px] w-full"></input>
                        </div>
                      </div>
                    </div>

                    <div className="mb-[20px] ">
                      <h5 className="text-[#b9bbbe] mb-[8px] text-[12px] leading-[16px] font-medium uppercase">
                        Username
                      </h5>
                      <div className="flex text-center text-[16px] w-full rounded bg-[#202225]">
                        <div className="grow flex flex-col">
                          <input className="bg-transparent p-[10px] h-[40px] w-full"></input>
                        </div>
                      </div>
                    </div>

                    <div className="mb-[20px]">
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

                    <div className="flex flex-col mb-[20px]">
                      <h5 className="text-[#b9bbbe] mb-[8px] text-[12px] leading-[16px] font-medium uppercase">
                        DATE OF BIRTHDAY
                      </h5>
                      {/* <div className="flex text-center mb-[4px] text-[16px] w-full rounded justify-between"> */}
                        {/* <div className="w-[35%] text-left">
                          <div> */}
                            {/* <div className="relative box-border">
                              <div className="bg-[#313339] border-[#202225] rounded text-center border border-solid flex flex-wrap justify-between min-h-[40px] box-border">
                                <div className="flex flex-1 flex-wrap py-[2px] px-[8px] item-center relative">
                                  <div className="mx-[2px] absolute"> */}
                                   <SelectMonth />
                                  {/* </div>
                                </div>
                              </div>
                            </div> */}
                          {/* </div>
                        </div> */}
                      {/* </div> */}
                    </div>




                    <div className="w-full bg-[#5865f2] rounded h-[44px] text-[16px] leading-[24px] mb-[8px] text-white relative flex justify-center text-center py-[2px] px-4">
                      <div className="my-auto mx-auto whitespace-nowrap">
                        <Link to={"/Login"}>
                        Continue
                        </Link>
                      </div>
                    </div>

                    <button className="text-[#00aff4] block px-0 mb-[20px] mt-[4px] w-auto h-auto relative text-[14px] font-medium leading-4">
                      <div className="my-0 mx-auto whitespace-nowrap">
                        <Link to={'/Login'}> Already have an account?</Link>
                      </div>
                    </button>

                    <div className="mt-[4px] ">
                      <span className="text-[10px] leading-[16px]">
                        {" "}
                        By Registering, you agree to Discord's
                      </span>
                      <button className="text-[#00aff4] ml-[6px]  px-0 mb-[20px] mt-[4px] w-auto h-auto relative text-[10px] font-medium leading-4 inline-block">
                        <div className="my-0 mx-auto whitespace-nowrap">
                          Terms of service
                        </div>
                      </button>
                      <span className="text-[10px] leading-[16px]"> and</span>
                      <button className="text-[#00aff4] ml-[6px]  px-0 mb-[20px] mt-[4px] w-auto h-auto relative text-[10px] font-medium leading-4 inline-block">
                        <div className="my-0 mx-auto whitespace-nowrap">
                          Privavy and policy.
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
