import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import careers1 from "../assets/careers1.jpg";

function SlickImage() {
  const settings = {
    className: "center",
    centerMode: true,
    dot: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesTosScroll: 1,
    speed: 500,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
        
      <div className=" w-[640px] flex-shrink-0 ">
        <div className="py-0 px-[20px]">
          <div className=" w-full h-0 pb-[56.25%]">
            <img
              className="rounded-2xl w-full h-auto"
              src={careers1}
              alt="carrers1"
            ></img>
          </div>
        </div>
      </div>

      <div className=" w-[640px] flex-shrink-0 ">
        <div className="py-0 px-[20px]">
          <div className=" w-full h-0 pb-[56.25%]">
            <img
              className="rounded-2xl w-full h-auto"
              src={careers1}
              alt="carrers1"
            ></img>
          </div>
        </div>
      </div>

      <div className=" w-[640px] flex-shrink-0 ">
        <div className="py-0 px-[20px]">
          <div className=" w-full h-0 pb-[56.25%]">
            <img
              className="rounded-2xl w-full h-auto"
              src={careers1}
              alt="carrers1"
            ></img>
          </div>
        </div>
      </div>

      <div className=" w-[640px] flex-shrink-0 ">
        <div className="py-0 px-[20px]">
          <div className=" w-full h-0 pb-[56.25%]">
            <img
              className="rounded-2xl w-full h-auto"
              src={careers1}
              alt="carrers1"
            ></img>
          </div>
        </div>
      </div>

      <div className=" w-[640px] flex-shrink-0 ">
        <div className="py-0 px-[20px]">
          <div className=" w-full h-0 pb-[56.25%]">
            <img
              className="rounded-2xl w-full h-auto"
              src={careers1}
              alt="carrers1"
            ></img>
          </div>
        </div>
      </div>

      <div className=" w-[640px] flex-shrink-0 ">
        <div className="py-0 px-[20px]">
          <div className=" w-full h-0 pb-[56.25%]">
            <img
              className="rounded-2xl w-full h-auto"
              src={careers1}
              alt="carrers1"
            ></img>
          </div>
        </div>
      </div>

       <div className=" w-[640px] flex-shrink-0 ">
        <div className="py-0 px-[20px]">
          <div className=" w-full h-0 pb-[56.25%]">
            <img
              className="rounded-2xl w-full h-auto"
              src={careers1}
              alt="carrers1"
            ></img>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default SlickImage;
