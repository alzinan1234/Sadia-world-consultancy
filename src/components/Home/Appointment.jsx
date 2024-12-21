import React from "react";
import AppointmentImage from "../assets/service/image 72 (1).png";
import Image from "next/image";

const Appointment = () => {
  return (
    <>
      <div className="py-[50px] md:py-[99px]">
        <div className="maxWidth flex flex-col md:flex-row md:gap-[98px] items-center md:items-start">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-[24px] md:text-[40px] font-medium mb-[10px]">
              Get SWC! Free Appointment
            </h1>
            <p className="text-[16px] md:text-[18px] font-normal text-gray-500 mb-[24px] md:mb-[39px] md:w-[560px]">
              Book your appointment with SWC through the online portal. Select
              your visa type, pick a slot, and visit the office with the
              required documents. Stay updated for smooth <br /> processing. SWC
              has one branch in Dhaka, Bangladesh, and also offers an online
              portal for faster visa processing. Operating hours are 9:30 AM to
              6:30 PM.
            </p>
            <div className="flex flex-col md:flex-row gap-[10px]">
              <button className="font-medium py-[6px] md:py-[10px] px-[12px] bg-[#007EE5] rounded text-white">
                Book Appointment
              </button>
              <button className="font-medium py-[6px] md:py-[10px] px-[12px] border border-[#007EE5] text-[#007EE5] rounded">
                Ask Question
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-[24px] md:mt-0">
            <Image
              src={AppointmentImage}
              alt="Appointment"
              className="w-full md:w-auto max-w-[300px] md:max-w-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
