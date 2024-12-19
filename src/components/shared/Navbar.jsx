"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/navbar/Logo 1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
          isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-[#f1eeee]"
        }`}
      >
        <div className="maxWidth mx-auto flex justify-between items-center py-3 px-4 border-b-[1px] border-[#D6D6D6]">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-[90px] h-auto cursor-pointer"
              src={logo}
              alt="Health Logo"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center text-lg font-medium gap-8">
            <li className="cursor-pointer hover:text-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link href="/Services">Visa</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link href="/About">Tour Packages</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link href="/Achievement">Tour Packages</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link href="/Gallery">Read To IELTS</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <Link href="/Blog">About Us</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="absolute top-[64px] left-0 w-full bg-black shadow-md flex flex-col items-center gap-4 py-4 text-white font-medium z-50">
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Services">Visa</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/About">About Me</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Achievement">Achievement</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Gallery">Gallery</Link>
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href="/Blog">Blog</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-[64px]" />
    </>
  );
};

export default Navbar;
