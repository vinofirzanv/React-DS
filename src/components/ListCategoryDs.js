import React from "react";

function ListCategoryDs({ button, filter, menuItem }) {
  console.log(menuItem);
  return (
   
    <div className="w-full mb-0 h-auto col-start-2 col-end-[span_3] z-10 ">
     
          {button.map((cat, i) => {
            return (
              <button
                type="button"
                className={`mr-[8px] mb-[12px] rounded-[4px] text-xl py-[11px] px-[14px] leading-6 flex flex-row cursor-pointer font-medium items-center box-border hover:shadow-2xl  ${
                  cat === menuItem.category
                    ? "bg-[#e3e5e8] text-black"
                    : "bg-white text-black hover:text-[#5865f2]"
                }`}
                onClick={() => filter(cat)}
              >
                {cat}
              </button>
            );
          })}
    </div>
    
  );
}

export default ListCategoryDs;
