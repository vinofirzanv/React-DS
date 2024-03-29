import React,{useState} from "react";

function Buttonz({ button, filter }) {
  const [active, setActive] = useState('Featured')
  return (
    <div className="p-[40px] w-full max-w-[1260px] box-border grid grid-cols-12 gap-5">
      <div className="col-span-12 mt-[24px] box-border ">
        <div className="p-0 whitespace-normal overflow-visible">
          {button.map((cat) => {
            return (
              <button
                type="button"
                className={`  mr-2 mb-2 rounded-[28px] text-xl py-[16px] px-[32px] leading-6 inline-flex cursor-pointer font-medium  items-center box-border hover:shadow-2xl ${
                  active === cat.category
                    ? "bg-[#5865f2] text-white"
                    : "bg-white text-black hover:text-[#5865f2]"
                }`}
                onClick={() => {
                  filter(cat)
                  setActive(cat.category)
                }}
              >
                {cat.category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Buttonz;
