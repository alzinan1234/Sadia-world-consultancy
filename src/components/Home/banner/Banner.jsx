"use client";
import React from "react";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {/* Slide 1 */}
      <div className="backgroundImage1">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 h-full">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-white text-[24px] md:text-[46px] font-bold leading-tight">
              <span className="text-[#FFF500]">
                Student & Visitor Visa <br />
              </span>{" "}
              Services–Simplifying Your Journey
            </h1>
            <button className="text-[16px] md:text-[21px] font-semibold text-white px-4 md:px-6 py-2 md:py-3 bg-[#33B249] rounded-lg hover:bg-green-600 transition">
              Contact Now
            </button>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="backgroundImage1">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 h-full">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-white text-[24px] md:text-[46px] font-bold leading-tight">
              <span className="text-[#FFF500]">
                Visa Made Easy <br />
              </span>{" "}
              Seamless Travel Assistance
            </h1>
            <button className="text-[16px] md:text-[21px] font-semibold text-white px-4 md:px-6 py-2 md:py-3 bg-[#33B249] rounded-lg hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
