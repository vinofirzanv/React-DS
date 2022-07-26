import React,{useState} from "react";
import BannerKiri from "../assets/Discover-1.svg";
import BannerKanan from "../assets/Discover-2.svg";
import Banner from "../assets/Discover-banner.svg";
import Header from "./Header";
import items from "../datadiscover";
import ListCategoryDs from "./ListCategoryDs";


const allCat = ["Featured", ...new Set(items.map((item) => item.category))];

function Discover() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCat);

  const filter = (buttons) => {
    if (buttons === "Featured") {
      setMenuItem(items);
      return;
    }
    const filteredData = items.filter((item) => item.category === buttons);
    setMenuItem(filteredData);
  };

  return (
    <div>
      <Header></Header>
      <div className="mb-[48px] overflow-hidden w-full h-full relative block">
        <div className="z-10  absolute block visible left-[-1px] h-[400px]">
          <img src={BannerKiri} alt="bannerkiri" />
        </div>
        <div className="z-10  block visible right-[-1px] h-[400px]">
          <img src={BannerKanan} alt="bannerkanan" />
        </div>

        {/* <div className="relative w-full bg-slate-300 h-full block">
          <div className="ml-[50%] z-0 w-full h-full ">
            <img src={Banner} className="translate-x-[-50%]" alt="Banner" />
          </div>

          <div className="flex absolute justify-center items-center top-0 w-full h-full z-10 ">
            <div className="text-center mx-[330px] mt-[40px] w-full">
              <h1 className="text-[44px] text-white font-extrabold leading-[95%] uppercase">
                Find your community on discord
              </h1>
              <div className="mt-[16px] text-[16px] font-medium leading-[18px] text-[#fff]">
                From gaming, to music, to learning, there's a place for you.
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="w-full flex items-center flex-col">
        <div className="w-full box-border grid grid-cols-12 gap-x-[20px] py-0 px-[40px] gap-y-0">
          <div className="col-start-2 col-end-[span_10] mb-[40px] h-[52px] flex ">
            <div className="mr-[16px] flex-1 text-[16px] pr-[16px] h-auto flex items-center rounded-lg bg-[#e3e5e8]">
              <div className="flex-1 flex flex-col">
                <input
                  placeholder="Explore popular communities"
                  className="p-[16px]  font-medium h-[26px] leading-[16px] text-[16px] box-border w-full rounded-lg bg-[#e3e5e8] text-black"
                />
              </div>
            </div>
            <button className="text-[#fff] bg-[#5865f2] w-[52px] h-auto rounded-[8px] relative flex justify-center items-center ">
              <div className="">
                <svg
                  fill="#fff"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

       
        <div className="w-full box-border grid grid-cols-12 gap-y-0 gap-x-5 px-[40px]">
            <ListCategoryDs button={buttons} filter={filter} menuItem={menuItem[0]}></ListCategoryDs>
         
        </div>
      </div>
    </div>
  );
}

export default Discover;
