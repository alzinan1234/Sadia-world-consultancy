import Banner from "@/components/Home/Banner";
import Countries from "@/components/Home/country/Countries";
import Services from "@/components/Home/Services";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Countries />
    </div>
  );
};

export default page;
