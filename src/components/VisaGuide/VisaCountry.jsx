"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const VisaCountry = () => {
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [visaTypeDropdownOpen, setVisaTypeDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedVisaType, setSelectedVisaType] = useState("");

  const countries = ["USA", "UK", "Canada", "Australia"];
  const visaTypes = ["Visit", "Work", "Student"];

  const countryDetails = {
    USA: {
      description: "The USA offers various types of visas.",
      image: "/images/usa.jpg",
      Visit: {
        details: "Tourist visas (B1/B2) allow short stays in the USA.",
        image: "/images/usa-visit.jpg",
      },
      Work: {
        details: "Work visas include H1B for professionals.",
        image: "/images/usa-work.jpg",
      },
      Student: {
        details: "F1 visas are issued for students studying in the USA.",
        image: "/images/usa-student.jpg",
      },
    },
    UK: {
      description: "The UK provides multiple visa options.",
      image: "/images/uk.jpg",
      Visit: {
        details: "Standard Visitor Visa for tourism or business.",
        image: "/images/uk-visit.jpg",
      },
      Work: {
        details: "Skilled Worker Visa allows long-term employment.",
        image: "/images/uk-work.jpg",
      },
      Student: {
        details: "Tier 4 Student Visa for higher education.",
        image: "/images/uk-student.jpg",
      },
    },
    Canada: {
      description: "Canada offers Study Permits and Work Permits.",
      image: "/images/canada.jpg",
      Visit: {
        details: "Visitor Visas for short-term stays.",
        image: "/images/canada-visit.jpg",
      },
      Work: {
        details: "Work Permits for skilled professionals.",
        image: "/images/canada-work.jpg",
      },
      Student: {
        details: "Study Permits for international students.",
        image: "/images/canada-student.jpg",
      },
    },
    Australia: {
      description: "Australia offers various visa options.",
      image: "/images/australia.jpg",
      Visit: {
        details: "Tourist Visas for travel and leisure.",
        image: "/images/australia-visit.jpg",
      },
      Work: {
        details: "Temporary Work Visas for employment.",
        image: "/images/australia-work.jpg",
      },
      Student: {
        details: "Student Visas for academic programs.",
        image: "/images/australia-student.jpg",
      },
    },
  };

  return (
    <div>
      <h1 className="text-center text-[24px] font-semibold mt-[14px] mb-[58px]">
        Visa Guide for USA, UK, Canada, and Australia
      </h1>

      <div className="mb-[60px]">
        <div className="maxWidth border border-[#D9D9D9] rounded-[8px] md:flex md:justify-between md:items-center md:gap-[51px] p-4 md:p-[22px] md:px-[61px] flex-wrap gap-4">
          {/* Country Dropdown */}
          <div>
            <h2 className="text-[16px] font-semibold">Country</h2>
          </div>
          <div className="relative w-full md:w-auto">
            <div
              className="flex justify-between gap-2 items-center bg-[#EAE8E8] px-[32px] p-[14px] rounded-[8px] cursor-pointer"
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
            >
              <span>{selectedCountry || "Select Your Country"}</span>
              <IoIosArrowDropdown
                className={`h-[20px] w-[20px] transform ${
                  countryDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {countryDropdownOpen && (
              <ul className="absolute left-0 right-0 bg-white border border-[#D9D9D9] rounded-[8px] mt-[4px] shadow-lg z-10">
                {countries.map((country, index) => (
                  <li
                    key={index}
                    className="px-[16px] py-[8px] hover:bg-[#EAE8E8] cursor-pointer"
                    onClick={() => {
                      setSelectedCountry(country);
                      setSelectedVisaType("");
                      setCountryDropdownOpen(false);
                    }}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Visa Type Dropdown */}
          <div>
            <p className="text-[16px] font-semibold">Visa Type</p>
          </div>
          <div className="relative w-full md:w-auto">
            <div
              className="flex justify-between gap-2 items-center bg-[#EAE8E8] px-[32px] p-[14px] rounded-[8px] cursor-pointer"
              onClick={() => setVisaTypeDropdownOpen(!visaTypeDropdownOpen)}
            >
              <span>{selectedVisaType || "Select Visa Type"}</span>
              <IoIosArrowDropdown
                className={`h-[20px] w-[20px] transform ${
                  visaTypeDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {visaTypeDropdownOpen && (
              <ul className="absolute left-0 right-0 bg-white border border-[#D9D9D9] rounded-[8px] mt-[4px] shadow-lg z-10">
                {visaTypes.map((type, index) => (
                  <li
                    key={index}
                    className="px-[16px] py-[8px] hover:bg-[#EAE8E8] cursor-pointer"
                    onClick={() => {
                      setSelectedVisaType(type);
                      setVisaTypeDropdownOpen(false);
                    }}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Go Button */}
          <div className="w-full md:w-auto text-center">
            <button
              className="p-[14px] px-[30px] bg-[#007EE5] text-white rounded-[8px] hover:bg-[#005bb5] transition-colors duration-300 ease-in-out"
              onClick={() => {
                if (!selectedCountry) {
                  alert("Please select a country!");
                }
              }}
            >
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Display Details */}
      {selectedCountry && (
        <div className="mt-[20px] max-Width">
          <div className="p-[20px] border border-[#D9D9D9] rounded-[8px] bg-[#F9F9F9] shadow-lg">
            <div>
              <h2 className="text-[20px] font-semibold mb-[10px]">
                Visa Details for {selectedCountry}
              </h2>
              <p className="text-[16px]">
                {countryDetails[selectedCountry].description}
              </p>
            </div>
            <div>
              <Image
                src={countryDetails[selectedCountry].image}
                alt={`${selectedCountry} Image`}
                width={400}
                height={300}
                className="w-full h-auto mb-[10px] rounded-[8px]"
              />
            </div>
          </div>
          {selectedVisaType && (
            <div className="py-[40px] p-[20px] border border-[#D9D9D9] rounded-[8px] bg-[#FFFFFF] shadow-lg">
              <h3 className="text-[18px] font-semibold mb-[10px]">
                {selectedVisaType} Visa Details
              </h3>
              <Image
                src={countryDetails[selectedCountry][selectedVisaType]?.image}
                alt={`${selectedVisaType} Visa`}
                width={400}
                height={350}
                className=" mb-[10px] rounded-[8px]"
              />
              <p className="text-[16px]">
                {countryDetails[selectedCountry][selectedVisaType]?.details}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VisaCountry;
