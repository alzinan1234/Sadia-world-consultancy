import React from "react";
import imageVisa from "../assets/service/image (1).png";
import studentVisa from "../assets/service/image (2).png";
import AirTicket from "../assets/service/image (3).png";

const Services = () => {
  return (
    <>
      <div className="text-4xl font-bold text-center py-[64px]">
        Our Services
      </div>

      <div>
        <div>
          <img src={imageVisa} alt="" />
          <p className="font-semibold text-[24px]">Multipile Visit Visa</p>
        </div>
      </div>
    </>
  );
};

export default Services;
