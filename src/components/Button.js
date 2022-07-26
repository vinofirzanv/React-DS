import React from "react";

function Button(props) {
  return (
    // <button className="bg-white text-black py-3 px-6 rounded-full hover:text-blue-500 hover:shadow-slate-900 mr-5 mb-5">
       <button className="">

      
      {props.children}
    </button>
  );
}

export default Button;
