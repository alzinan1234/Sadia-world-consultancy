import React from "react";

import student from "../../assets/service/long-haired-student-glasses-pointing-blue-folders-high-quality-photo 1.png";
import Image from "next/image";
import "./Dream.css";

const Dream = () => {
  return (
    <>
      <div className="py-[152px] ">
        {/* Background with linear gradient */}
        <div className="background">
          <div className="maxWidth  mx-auto md:flex gap-[107px] justify-between items-center py-[50px]">
            <div className="mb-24">
              <h1 className="text-[#80F] md:text-[53px] text-[30px] font-semibold">
                We Help to Build <br />
                Your Dream
              </h1>
              <p className="text-[20px] font-normal pt-4">
                We are always availed to consult on taking your higher <br />
                education to the next level so you can stay competitive in{" "}
              </p>
            </div>
            <div>
              <Image
                className="md:w-[405px] md:h-[505px]"
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
