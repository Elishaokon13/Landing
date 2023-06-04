import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className=" mx-auto my-20 ">
      <div className="bg-[#059a75] px-6 lg:px-16 py-10 rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl text-[#000000] sm:text-4xl md:text-5xl lg:text-4xl font-bold">
            A springboard <br className="lg:flex hidden"/>  designed to propel <br className="lg:flex hidden" /> your growth to new heights.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-[#000000]">
            Embark on a transformative voyage towards clarity and  <br  className="lg:flex hidden"/>expedite your personal and professional growth by harnessing the vast and boundless resources of the internet.
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#0c442a] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button>
          </div>
          <img src="/assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
