import Image from "next/image";
import React from "react";
import visaImage from "../../assets/service/image (6).png";

const VisaProcessing = () => {
  return (
    <>
      <div className="mb-[99px]">
        <div className="maxWidth mx-auto md:flex md:gap-[115px] justify-between">
          <div>
            <Image
              className="md:w-[456px] md:h-[332px]"
              src={visaImage}
              alt=""
            />
          </div>
          <div>
            <h2 className="md:text-[40px] text-[30px] font-semibold mb-4">
              Why choose Sadia Word <br /> Consultancy for your visa <br />{" "}
              processing needs?
            </h2>
            <p className="text-[19px] md:w-[560px] md:h-[127px] font-normal">
              SWC is a trusted, tech-based visa service in Bangladesh, offering
              secure and expert visa processing through an easy online platform.
              Their reliable expertise ensures a smooth application process for
              all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaProcessing;
