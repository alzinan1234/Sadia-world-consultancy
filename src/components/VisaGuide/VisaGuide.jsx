import React from "react";
import "./VisaGuide.css";

const VisaGuide = () => {
  return (
    <div className="background bg-center bg-no-repeat md:h-[441px]  flex items-center justify-end ">
      <div className="maxWidth">
        <div className="  bg-opacity-80 rounded-lg   flex flex-col justify-end text-right md:mr-[-590px]">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1882FF] mb-4 text-right">
            VISA GUIDE
          </h1>
          <p className="text-lg text-[#1882FF] leading-relaxed text-right">
            We provide outstanding travel visa processing facilities. Save
            yourself <br /> the hassle of running to and from travel agencies
            and get your <br /> processing done in a breeze with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisaGuide;
