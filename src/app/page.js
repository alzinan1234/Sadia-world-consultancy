import Appointment from "@/components/Home/Appointment";
import Banner from "@/components/Home/Banner";
import Countries from "@/components/Home/country/Countries";
import VisaProcessing from "@/components/Home/country/VisaProcessing";
import Dream from "@/components/Home/dream/Dream";
import Gallery from "@/components/Home/Gallery";

import Services from "@/components/Home/Services";
import TourPackages from "@/components/Home/TourPackages";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Countries />
      <Dream />
      <VisaProcessing />
      <TourPackages />
      <Appointment />
      <Gallery />
    </div>
  );
};

export default page;
