import Image from "next/image";
import React from "react";
import client1 from "../assets/client/Rectangle (2).png";
import client2 from "../assets/client/Rectangle (3).png";
import client3 from "../assets/client/Rectangle (4).png";
import client4 from "../assets/client/Rectangle (5).png";

const Client = () => {
  return (
    <>
      <div className="mt-[59px] mb-4">
        <h1 className="text-[40px] font-semibold text-center">
          Our Happy Clients
        </h1>
        <p className="text-[18px] text-center mt-4">
          Join thousands of happy clients who have trusted Saida World
          Consultancy to make their travel and study Consultancy to make their
          travel and study <br /> dreams come true!
        </p>
        <p>hello world</p>
      </div>
      <div className="mb-[182px]">
        <div className="maxWidth mx-auto ">
          <div className=" md:flex gap-[13px]">
            <Image src={client1} alt="" />
            <Image src={client2} alt="" />
            <Image src={client3} alt="" />
            <Image src={client4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
