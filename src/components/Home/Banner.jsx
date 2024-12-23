"use client";
import Image from "next/image";
import React from "react";
import bgBanner from "../assets/banner/banner -(1).png";
import Untitled from "../assets/banner/Untitled-1 1.png";

const Banner = () => {
  return (
    <>
      {/* Banner with background image */}
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{ backgroundImage: `url(${bgBanner.src})` }}
      >
        <div className="maxWidth md:flex justify-between items-center px-4 md:px-8 py-6">
          {/* Left Section */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-white md:text-[46px] text-[30px] font-bold leading-tight">
              <span className="text-[#FFF500]">Student & Visitor Visa</span>{" "}
              <br />
              Services – Simplifying <br /> Your Journey
            </h1>
            <button className="md:text-[21px] font-semibold text-white md:px-6 px-4 md:py-3 py-2 bg-[#33B249] rounded-lg hover:bg-green-600 transition">
              Contact Now
            </button>
          </div>

          {/* Right Section */}
          <div className="mt-6 md:mt-0 md:flex md:justify-end">
            <Image
              src={Untitled}
              alt="Visa Services"
              priority
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
