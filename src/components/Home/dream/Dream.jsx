import React from "react";
import student from "../../assets/service/long-haired-student-glasses-pointing-blue-folders-high-quality-photo 1.png";
import Image from "next/image";
import "./Dream.css";

const Dream = () => {
  return (
    <>
      <div className="py-[80px] md:py-[152px]">
        {/* Background with linear gradient */}
        <div className="background">
          <div className="maxWidth mx-auto flex flex-col-reverse md:flex-row flex-wrap gap-8 md:gap-[107px] justify-between items-center px-4 md:px-0">
            {/* Text Section */}
            <div className="text-center md:text-left mb-12 md:mb-24">
              <h1 className="text-[#80F] text-[24px] md:text-[53px] font-semibold leading-tight">
                We Help to Build <br />
                Your Dream
              </h1>
              <p className="text-[16px] md:text-[20px] font-normal pt-4 leading-relaxed">
                We are always availed to consult on taking your higher <br />
                education to the next level so you can stay competitive in
              </p>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center">
              <Image
                className="w-[250px] h-auto md:w-[405px] md:h-[505px] rounded-lg"
                src={student}
                alt="Student Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dream;
