import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";



function Pagenation({data,itemsPerPage,dataSearch }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
       
      <MenuDiscover menuItem={currentItems}/>
        
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  );
}

function MenuDiscover({ menuItem}) {
  return (
    <div className="item">
      {menuItem && menuItem.map((item,index) => {
        return (
         
            <div>
              <div className="block mb-[16px]" key={index}>
               

                {item.detail.map((it,index) => (
                  <Card item={it} key={index} />
                ))}
              </div>
            </div>
          
        );
      })}
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="mb-[32px] inline-block w-full h-auto" key={item.id}>
      <a href="/" className="flex flex-row ">
        <img
          src={item.gambar}
          className="object-cover h-[144px] max-w-[256px] w-full rounded-lg mr-4"
          alt="gambar"
        />

        <div className="flex-col flex w-full">
          <div className="items-center mb-2 inline-flex">
            <img
              src={item.logo}
              className="w-[24px] h-[24px] mr-2 "
              alt="logo"
            />
            <div className="text-black text-[16px] leading-[18px] font-bold">
              {item.title}
            </div>
          </div>

          <div className="font-medium mb-2 text-[16px] leading-[18px] ">
            {item.desc}
          </div>

          <div className="flex flex-row">
            <div className="flex items-center text-[16px] leading-[18px] font-medium text-[#4f5660]">
              {item.online} Online
            </div>
            <span className="h-1 w-1 bg-[#6a7480] rounded-[50%] my-auto mx-2" />
            <div className="flex items-center text-[16px] leading-[18px] font-medium text-[#4f5660]">
              {item.member} Members
            </div>
          </div>

          <div className="flex mt-auto bg-[#e2e5e8] py-1 px-2 rounded w-fit">
            <div className="mr-1">
              <div className="w-4 h-4 flex relative justify-center items-center">
                <svg
                  fill="blue"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                >
                  <path d={item.labelPath1} />
                </svg>
                <div className="absolute right-0 bottom-0 top-[-.05px] left-[.05px] flex justify-center items-center">
                  <svg
                    fill="white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                  >
                    <g>
                      <path d={item.labelPath2} />
                      <path d={item.labelPath3} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div className="font-bold uppercase text-[16px] leading-[18px]">
              {item.label}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default Pagenation;
