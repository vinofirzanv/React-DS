import React from "react";
import Menuz from "./Menuz";
function MenuAll({ menuCategory,menuItem }) {
  return (
    <div>
      <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
        <div className="p-0 whitespace-normal overflow-visible">
          {menuCategory.map((cat, i) => {
            return (
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                {cat}
              </h3>
            );
          })}
        </div>

       
      </div>
      <Menuz menuItem={menuItem}></Menuz>
    </div>
  );
}

export default MenuAll;
