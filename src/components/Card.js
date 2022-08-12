import React from "react";


function Card(props) {
  return (
    <div className={`mb-5 p-8 max-w-sm col-span-12 lg:col-start-[span_4] lg:col-end-auto  flex flex-col justify-between text-center text-white rounded-lg border  border-gray-200 shadow-md ${props.color}`}>
        <p className="mb-2 text-center  text-white">
        {props.title}
      </p>
      <p className="mb-5 text-sm text-center text-white  ">
        {props.text}
      </p>
      <img className="content-center w-40 mr-auto ml-auto" src={props.src} alt={props.title}></img>
        </div>
     
  
  );
}

export default Card;
