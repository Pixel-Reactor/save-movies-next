/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LightDark } from "@/ui/LightDark";
const Header = () => {
  return (
    <div className="w-full  mx-auto max-w-lg  relative  flex items-center justify-between gap-3 font-bebas">
      <div className="flex items-center">
        <img className="w-20 object-cover grayscale-[70%]" src="/logo.png" alt="logo" />
        <p className="text-3xl font-bebas">Watch it!</p>
       
      </div>
    </div>
  );
};

export default Header;
