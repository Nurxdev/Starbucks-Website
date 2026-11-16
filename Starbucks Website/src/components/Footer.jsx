import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400">
        <div className="flex items-center justify-center mb-4">
          <img src={logo} className="w-12 md:w-14 cursor-pointer" alt="" />
        </div>
        <p className="">
          &copy; {new Date().getFullYear()} Starbucks Coffee Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;