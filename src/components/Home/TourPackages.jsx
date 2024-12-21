import Image from "next/image";
import React from "react";

const TourPackages = () => {
  return (
    <>
      <div className="mb-[47px]">
        <h1 className="md:text-[40px] text-[30px] font-semibold">
          Our Tour Packages for You
        </h1>
        <p className="text-[18px] font-normal">
          Plan your dream gateway and choose from uncountable tour packages at
          ShareTrip. Book <br /> our holiday packages for the best deals on any
          international trip.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[16px]">
        <Image className="md:w-[268px] md:h-[227px]" src={} alt="" />
        <Image className="md:w-[268px] md:h-[227px]" src={} alt="" />
        <Image className="md:w-[268px] md:h-[227px]" src={} alt="" />
        <Image className="md:w-[268px] md:h-[227px]" src={} alt="" />
      </div>
    </>
  );
};

export default TourPackages;
