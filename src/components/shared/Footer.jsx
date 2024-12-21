import Image from "next/image";
import React from "react";
import LogoFooter from "../assets/navbar/Logo 2.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E8F9FD] text-black">
      <div className="maxWidth mx-auto py-[122px] grid grid-cols-1 md:grid-cols-3 gap-[100px] justify-between">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <Image src={LogoFooter} alt="" />
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-bold text-[32px] mb-4">Contact Us</h2>
          <ul className="space-y-5">
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-[#007EE5]" />
              <span>sadiyawc20@gmail.com</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-3 text-[#007EE5]" />
              <span>+8801300-935303, +8801892-968785</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-[#007EE5]" />
              <span>
                Mahbub Plaza, (6th Floor), Indira Road, Farmgate, Dhaka-1215.
              </span>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="font-bold text-[32px] mb-4">Our Services</h2>
          <ul className="space-y-3">
            <li>Multiple Visit Visa</li>
            <li>Student Visa</li>
            <li>Air Ticket</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-700 text-white text-center py-3">
        <p>Design & Developed By Nexgen Innovators</p>
      </div>
    </footer>
  );
};

export default Footer;
