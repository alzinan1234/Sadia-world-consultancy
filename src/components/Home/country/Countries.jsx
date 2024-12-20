import React from "react";
import aus from "../../assets/country/aus.avif";
import UnitedStatesAmerica from "../../assets/country/UnitedStatesAmerica.jpg";
import UnitedKingdom from "../../assets/country/UnitedKingdom.jpg";
import Canada from "../../assets/country/Canada.jpg";
import Schengen from "../../assets/country/Schengen.jpg";

const Countries = () => {
  return (
    <>
      <div className="">
        <div className=" relative">
          <img className="md:w-[269px] md:h-[334px]" src={aus} alt="" />
        </div>
        <div className=" absolute right-[-2px] ">
          <p className="text-[16px] font-semibold">Australia</p>
          <p className="text-[12px] font-normal">36 Hotels Available</p>
        </div>
      </div>
    </>
  );
};

export default Countries;
