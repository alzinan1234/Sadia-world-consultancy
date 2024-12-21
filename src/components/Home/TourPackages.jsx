import Image from "next/image";
import React from "react";
import TourImage1 from "../assets/service/image (7).png";
import TourImage2 from "../assets/service/image (8).png";
import TourImage3 from "../assets/service/image (9).png";
import TourImage4 from "../assets/service/image (10).png";

const TourPackages = () => {
  return (
    <>
      <div className="maxWidth mx-auto">
        <div className="mb-[47px]">
          <h1 className="md:text-[40px] text-[30px] font-semibold mb-4">
            Our Tour Packages for You
          </h1>
          <p className="text-[18px] font-normal">
            Plan your dream gateway and choose from uncountable tour packages at
            ShareTrip. Book <br /> our holiday packages for the best deals on
            any international trip.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[16px]">
          <Image
            className="md:w-[268px] md:h-[227px]"
            src={TourImage1}
            alt=""
          />
          <Image
            className="md:w-[268px] md:h-[227px]"
            src={TourImage2}
            alt=""
          />
          <Image
            className="md:w-[268px] md:h-[227px]"
            src={TourImage3}
            alt=""
          />
          <Image
            className="md:w-[268px] md:h-[227px]"
            src={TourImage4}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default TourPackages;
