import Image from "next/image";
import React from "react";
import client1 from "../assets/client/Rectangle (2).png";
import client2 from "../assets/client/Rectangle (3).png";
import client3 from "../assets/client/Rectangle (4).png";
import client4 from "../assets/client/Rectangle (5).png";

const Client = () => {
  return (
    <>
      <div className="mb-9">
        <h1 className="text-[40px] font-semibold text-center">
          Our Happy Clients
        </h1>
        <p className="text-[18px] text-center mt-4">
          Join thousands of happy clients who have trusted Sadia World
          Consultancy to make their travel and study <br /> dreams come true!
        </p>
      </div>
      <div className="maxWidth mx-auto mb-[12px]">
        <div className=" md:flex gap-[13px]">
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Client;
