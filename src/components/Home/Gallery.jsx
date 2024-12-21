import React from "react";
import galleryImage1 from "../assets/gallery/a (1).png";
import galleryImage2 from "../assets/gallery/a (2).png";
import galleryImage3 from "../assets/gallery/a (3).png";
import galleryImage4 from "../assets/gallery/a (4).png";
import galleryImage5 from "../assets/gallery/a (5).png";
import galleryImage6 from "../assets/gallery/a (6).png";
import galleryImage7 from "../assets/gallery/a (7).png";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-[40px] font-semibold py-[39px]">
          Our Gallery
        </h1>
      </div>

      <div className="maxWidth mb-[59px]">
        <div className="md:flex gap-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div className=" grid md:grid-cols-2 gap-[12px]">
              <Image className="" src={galleryImage1} alt="" />
              <Image className="" src={galleryImage2} alt="" />
              <Image className="" src={galleryImage3} alt="" />
              <Image className="" src={galleryImage4} alt="" />
            </div>
            <div>
              <Image className="" src={galleryImage5} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            <Image className="" src={galleryImage6} alt="" />
            <Image className="" src={galleryImage7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
