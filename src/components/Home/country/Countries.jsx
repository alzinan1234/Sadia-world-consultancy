"use client";
import React from "react";
import Slider from "react-slick"; // Import Slider component

import "./Countries.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Countries = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Australia",
      subtitle: "36 Hotels Available",
      image: "./image/aus.jpg",
    },
    {
      id: 2,
      title: "United States of America",
      subtitle: "36 Hotels Available",
      image: "./image/istockphoto-1077099652-612x612.jpg",
    },
    {
      id: 3,
      title: "United Kingdom",
      subtitle: "36 Hotels Available",
      image: "./image/istockphoto-1077099652-612x612.jpg",
    },
    {
      id: 4,
      title: "Canada",
      subtitle: "36 Hotels Available",
      image: "./image/istockphoto-1077099652-612x612.jpg",
    },
    {
      id: 5,
      title: "Schengen Countries",
      subtitle: "26 European countries",
      image: "./image/istockphoto-1077099652-612x612.jpg",
    },
  ];

  return (
    <>
      <div className="text-4xl font-bold text-center py-[64px]">
        Countries We Worked With
      </div>

      <div className="maxWidth">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide md:flex gap-[25px]">
              <div
                className="slide-content md:flex gap-[25px]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  height: "300px",
                }}
              >
                <div className="overlay">
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Countries;
