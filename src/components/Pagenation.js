import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MenuDiscover from "./MenuDiscover";

function Pagenation({menuItem}) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(menuItem.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(menuItem.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, menuItem]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % menuItem.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
       
      <MenuDiscover menuItem={menuItem}/>
        
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

export default Pagenation;
