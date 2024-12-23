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
      image: "/image/usa.jpg",
      Visit: {
        details: "Tourist visas (B1/B2) allow short stays in the USA.",
        image: "/image/usa-visit.jpg",
      },
      Work: {
        details: `Language Certificate: IELTS/Duolingo/MOI
           All Academic Certificates & Mark Sheets
           SOP (Statement of Purpose)
           Two Recommendation Letters
           35x45 size Photo for Australia (Soft Copy, White Background)
          Passport
           NID/Birth Certificate
           Personal CV
           Sponsor's NID & Photo
           Spouse Passport/Photos
           Marriage Certificate`,
        image: "/image/usa-work.jpg",
      },
      Student: {
        details: `Language Certificate: IELTS/Duolingo/MOI
           All Academic Certificates & Mark Sheets
           SOP (Statement of Purpose)
           Two Recommendation Letters
           35x45 size Photo for Australia (Soft Copy, White Background)
          Passport
           NID/Birth Certificate
           Personal CV
           Sponsor's NID & Photo
           Spouse Passport/Photos
           Marriage Certificate
        `,
        image: "/image/usa-student.jpg",
      },
    },
    UK: {
      description: "The UK provides multiple visa options.",
      image: "/image/uk.jpg",
      Visit: {
        details: "Standard Visitor Visa for tourism or business.",
        image: "/image/uk-visit.jpg",
      },
      Work: {
        details: `Language Certificate: IELTS/Duolingo/MOI
           All Academic Certificates & Mark Sheets
           SOP (Statement of Purpose)
           Two Recommendation Letters
           35x45 size Photo for Australia (Soft Copy, White Background)
          Passport
           NID/Birth Certificate
           Personal CV
           Sponsor's NID & Photo
           Spouse Passport/Photos
           Marriage Certificate
        `,
        image: "/image/uk-work.jpg",
      },
      Student: {
        details: `Language Certificate: IELTS/Duolingo/MOI
           All Academic Certificates & Mark Sheets
           SOP (Statement of Purpose)
           Two Recommendation Letters
           35x45 size Photo for Australia (Soft Copy, White Background)
          Passport
           NID/Birth Certificate
           Personal CV
           Sponsor's NID & Photo
           Spouse Passport/Photos
           Marriage Certificate
        `,
        image: "/image/uk-student.jpg",
      },
    },
    Canada: {
      description: "Canada offers Study Permits and Work Permits.",
      image: "/image/canada.jpg",
      Visit: {
        details: "Visitor Visas for short-term stays.",
        image: "/image/canada-visit.jpg",
      },
      Work: {
        details: "Work Permits for skilled professionals.",
        image: "/image/canada-work.jpg",
      },
      Student: {
        details: `
         
           Language Certificate: IELTS/Duolingo/MOI
           All Academic Certificates & Mark Sheets
           SOP (Statement of Purpose)
           Two Recommendation Letters
           35x45 size Photo for Australia (Soft Copy, White Background)
          Passport
           NID/Birth Certificate
           Personal CV
           Sponsor's NID & Photo
           Spouse Passport/Photos
           Marriage Certificate
        `,
        image: "/image/canada-student.jpg",
      },
    },
    Australia: {
      description: "Australia offers various visa options.",
      image: "/image/australia.jpg",
      Visit: {
        details: "Tourist Visas for travel and leisure.",
        image: "/image/australia-visit.jpg",
      },
      Work: {
        details: `
          
           Language Certificate: IELTS/Duolingo/MOI
           All Academic Certificates & Mark Sheets
           SOP (Statement of Purpose)
           Two Recommendation Letters
           35x45 size Photo for Australia (Soft Copy, White Background)
          Passport
           NID/Birth Certificate
           Personal CV
           Sponsor's NID & Photo
           Spouse Passport/Photos
           Marriage Certificate
        `,
        image: "/image/australia-work.jpg",
      },
      Student: {
        details: `Language Certificate: IELTS/Duolingo/MOI
           All Academic Certificates & Mark Sheets
           SOP (Statement of Purpose)
           Two Recommendation Letters
           35x45 size Photo for Australia (Soft Copy, White Background)
          Passport
           NID/Birth Certificate
           Personal CV
           Sponsor's NID & Photo
           Spouse Passport/Photos
           Marriage Certificate`,
        image: "/image/australia-student.jpg",
      },
    },
  };
  const detailsArray = countryDetails[selectedCountry]?.[
    selectedVisaType
  ]?.details
    ?.split("\n")
    .map((item) => item.trim())
    .slice(1, -1); // Skip first and last item

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
              className="flex justify-between gap-2 items-center bg-[#EAE8E8] px-[32px] p-[14px]  rounded-[8px] cursor-pointer"
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
        <div className="py-14">
          <div className="mt-[50px] mb-10 maxWidth">
            <div className="p-[20px] border border-[#D9D9D9] rounded-[8px] bg-[#F9F9F9] shadow-lg  py-10">
              <div className="md:flex justify-between items-center mb-[20px] py-10">
                <div>
                  <h2 className="text-[34px] font-semibold mb-[10px]">
                    Visa Details for {selectedCountry}
                  </h2>
                  <p className="text-[20px] font-normal">
                    <ol className=" flex flex-col gap-2 list-decimal p-8">
                      <li>Valid Passport Copy </li>
                      <li> All Previous Visa Copies </li>
                      <li> Nid/Birth Certificate Copy </li>
                      <li> Nikha Nama (If Married)</li>
                      <li>
                        2x2 Photo For USA (CANADA+ UK+ AUSTRALIA For 35x45
                        Photo){" "}
                      </li>
                      <li>
                        {" "}
                        Children's Birth Certificate/School ID Card Copy (If
                        Family Visit)
                      </li>
                      <li>Bank Statement/Bank Solvency</li>
                      <li>Asset Valuation</li>
                      <li>Tax Return/Certificate</li>
                      <li> Hotel Booking </li>
                      <li> Air Ticket Booking</li>
                    </ol>
                  </p>
                </div>
                <div>
                  <Image
                    src={countryDetails[selectedCountry].image}
                    alt={`${selectedCountry} Image`}
                    width={400}
                    height={300}
                    className="md:w-[380px] md:h-[260px] mb-[10px] rounded-[8px]"
                  />
                </div>
              </div>
            </div>
            {selectedVisaType && (
              <div className="mt-10">
                <div className=" maxWidth py-[40px] p-[20px] border border-[#D9D9D9] rounded-[8px] bg-[#FFFFFF] shadow-lg ">
                  <div className=" md:flex justify-between  mb-[20px] py-10 ">
                    <div>
                      <h3 className="text-[38px] font-semibold mb-[10px]">
                        {selectedVisaType} Visa Details
                      </h3>
                      <ul className="text-[20px] font-semibold">
                        {detailsArray?.map((detail, index) => (
                          <li key={index} className="flex items-center">
                            <span className="mr-2">✔️</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Image
                        src={
                          countryDetails[selectedCountry][selectedVisaType]
                            .image
                        }
                        alt={`${selectedVisaType} Visa Image`}
                        width={400}
                        height={300}
                        className="md:w-[380px] md:h-[260px] mb-[10px] rounded-[8px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaCountry;
