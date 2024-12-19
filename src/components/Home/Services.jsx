import React from "react";
import imageVisa from "../assets/service/image (1).png";
import studentVisa from "../assets/service/image (2).png";
import AirTicket from "../assets/service/image (3).png";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="text-4xl font-bold text-center py-[64px]">
        Our Services
      </div>

      <div className="maxWidth">
        <div className="  md:flex gap-[16px] items-center justify-between">
          <div className="md-[361px] md-[473px] border border-[#AEAEAE] rounded-[26px]">
            <Image
              className="md:w-[361px] md:h-[366px]"
              src={imageVisa}
              alt=""
            />
            <p className="font-semibold text-[24px] py-[30px] text-center">
              Multipile Visit Visa
            </p>
          </div>
          <div className="w-[361px] h-[473px] border border-[#AEAEAE] rounded-[26px]">
            <Image
              className="nd:w-[361px] md:h-[366px]"
              src={studentVisa}
              alt=""
            />
            <p className="font-semibold text-[24px] py-[30px] text-center">
              Multipile Visit Visa
            </p>
          </div>
          <div className="w-[361px] h-[473px] border border-[#AEAEAE] text-center rounded-[26px]">
            <Image
              className="nd:w-[361px] md:h-[366px]"
              src={AirTicket}
              alt=""
            />
            <p className="font-semibold text-[24px] py-[30px]">
              Multipile Visit Visa
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
