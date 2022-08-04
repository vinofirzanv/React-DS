import React, {useState} from "react";

function ListCategoryDs({ button, filter }) {
  const [active, setActive] = useState('Featured')
  return (
    <div className="w-full mb-0 h-auto col-start-2 col-end-[span_3] z-10 ">
      {button.map((btn,index) => {
        return (
          <button
            type="button"
            key={index}
            className={`w-full mr-[8px] mb-[12px] rounded-[4px] text-xl py-[11px] px-[14px] leading-6 flex flex-row cursor-pointer font-medium items-center box-border hover:shadow-2xl  ${
              active === btn.category
                ? "bg-[#e3e5e8] text-black"
                : "bg-white text-black hover:text-[#5865f2]"
            }`}
            onClick={() => {
              filter(btn)
              setActive(btn.category)
            }}
          >
            <div className="flex h-full items-center mr-[14px]">
              <svg
                fill="black"
                fillRule="evenodd"
                clipRule="evenodd"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path d={btn.logoPath}></path>
              </svg>
            </div>

            <div className="">
              {btn.category}
            </div>
            
          </button>
        );
      })}
    </div>
  );
}

export default ListCategoryDs;
