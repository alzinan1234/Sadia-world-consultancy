"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import aus from "../../assets/country/aus.avif";
import UnitedStatesAmerica from "../../assets/country/UnitedStatesAmerica.jpg";
import UnitedKingdom from "../../assets/country/UnitedKingdom.jpg";
import Canada from "../../assets/country/Canada.jpg";
import Schengen from "../../assets/country/Schengen.jpg";
import Image from "next/image";

const Countries = () => {
  const countries = [
    { name: "Australia", hotels: "36 Hotels Available", image: aus },
    {
      name: "United States of America",
      hotels: "36 Hotels Available",
      image: UnitedStatesAmerica,
    },
    {
      name: "United Kingdom",
      hotels: "36 Hotels Available",
      image: UnitedKingdom,
    },
    { name: "Canada", hotels: "36 Hotels Available", image: Canada },
    {
      name: "Sheen Countries",
      hotels: "36 Hotels Available",
      image: Schengen,
    },
  ];

  return (
    <>
      <div className="py-[64px] text-center">
        <h1 className="md:text-[40px] text-[20px] font-semibold">
          Countries We Worked With
        </h1>
      </div>
      <div className="maxWidth mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full mx-auto  "
        >
          {countries.map((country, index) => (
            <SwiperSlide
              key={index}
              className="flex md:w-[269px] md:h-[334px] justify-between items-center "
            >
              <div className="relative  md:h-[370px]">
                <Image
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full rounded-[15px]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-[15px] text-white p-10">
                  <p className="text-[16px] font-semibold">{country.name}</p>
                  <p className="text-[12px] font-normal">{country.hotels}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Countries;
