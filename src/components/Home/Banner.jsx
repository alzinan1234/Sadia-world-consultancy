import Image from "next/image";
import React from "react";
import banner from "../assets/banner/image.png";

const Banner = () => {
  return (
    <>
      <div>
        <Image className="md:w-[100%] md:h-[648px]" src={banner} alt="" />
      </div>
    </>
  );
};

export default Banner;
