"use client";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-4 !z-[100] w-[80%]  m-auto  rounded-[10px] bg-[#00000094]/20 bg-opacity-70 px-12 py-4 text-white shadow-lg backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between gap-6 space-x-8 text-[16px] font-medium">
        <div className="inter flex items-center  justify-between gap-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-full w-32" />
          </Link>
        </div>
        <div className=" flex  justify-between  gap-10">
          <Link
            to="/select"
            className={`${
              isActive("/select") ? "text-white" : "text-black"
            } hover:text-[#E50914]`}
          >
            About
          </Link>
          <Link
            to="/stay"
            className={`${
              isActive("/stay") ? "text-white" : "text-black"
            } hover:text-[#E50914]`}
          >
            Reviews
          </Link>
          <Link
            to="/connect"
            className={`${
              isActive("/connect") ? "text-white" : "text-black"
            } hover:text-[#E50914]`}
          >
            Get App
          </Link>
          <Link
            to="/community"
            className={`${
              isActive("/community") ? "text-white" : "text-black"
            } hover:text-[#E50914]`}
          >
            Community
          </Link>
        </div>
        <Link to="/signup" className="text-white">
          <button className="bt-c  font-normal  bg-black whitespace-nowrap rounded-[8px] px-4 py-2">
            Schedule Wash
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
