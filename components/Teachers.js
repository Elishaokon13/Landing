import React from "react";

const Teacher = () => {
  return (
    <div className="container bg-[#000000] mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
        Meet the
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-[#ffffff]  mt-3">
        Catalysts
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/AB.jpg" alt="v1" className="rounded-xl" />
          <p className="text-2xl font-semibold text-center text-[#ffffff]">Abimbola Abe</p>
          <div className="flex items-center gap-2">
            <img src="/assets/FE.jpg" alt="itersfgjds" className="rounded-xl" />
          </div>
          <p className="text-2xl font-semibold text-center text-[#ffffff]">Favour Ezeh</p>

        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/MEZ.jpg" alt="v1" className="rounded-xl" />
          <p className="text-2xl font-semibold text-center text-[#ffffff]">Mezie TheSage</p>
          <div className="flex items-center gap-2">
            <img src="/assets/MUN.jpg" alt="itersfgjds" className="rounded-xl" />
          </div>
          <p className="text-2xl font-semibold text-center text-[#ffffff]">Munachimso Ngozi</p>
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/LB.jpg" alt="v1" className="rounded-xl" />
          <p className="text-2xl font-semibold text-center text-[#ffffff]">Leader Bill</p>
          <div className="flex items-center gap-2">
            <img src="/assets/TED.jpg" alt="itersfgjds" className="rounded-xl" />
          </div>
          <p className="text-2xl font-semibold text-center text-[#ffffff]">Teddy Uchenna</p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
