import React from "react";

function Card({item}) {
  return (
    <div
    
      key={item.id}
    >
      <a
        href="/"
        className="col-start-[span_3] col-end-auto hover:shadow-2xl rounded-2xl overflow-hidden bg-white text-black flex cursor-pointer p-[24px] flex-col content-between "
      >
        <div className="item-container">
          <div className="w-[75%] font-medium text-xl leading-[1.625] mb-5">
            {item.title}
          </div>
          <div className="flex justify-end content-between">
            <div className="text-base ">{item.address}</div>
            <svg
              fill="#5865f2"
              fillRule="evenodd"
              clipRule="evenodd"
              width="40px"
              height="40px"
              viewBox="0 0 80 80"
            >
              {" "}
              <g>
              <path d={item.path1}></path>
              <path d={item.path2}></path>
              <path d={item.path3}></path>
              <path d={item.path4}></path>
              <path d={item.path5}></path>
              <path d={item.path6}></path>
              </g>
             
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

function Menuz({ menuItem }) {
  return (
    <div className="item">
      {menuItem.map((item) => {
        return (
          <div className="item-con">
            <div className="w-full max-w-[1260px] box-border grid grid-cols-12 gap-5 px-[40px]">
              <h3 className="mt-[80px] text-left col-span-12 text-black  leading-[120%] font-semibold text-4xl">
                {item.category}
              </h3>
            </div>

            {/* //className="w-full box-border grid grid-cols-4 lg:grid-cols-12 gap-5 p-[40px] mx-auto" */}
            <div className="grid grid-cols-3 box-border w-full gap-5 max-w-[1260px] p-[40px] mx-auto">
            {item.detail.map(it => <Card item={it}/>)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menuz;
