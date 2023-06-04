import React from "react";


const Values = () => {
  return (
    <div className="container mx-auto py-20" id="whyjointgc">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHY JOIN
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-[#059a75] text-center mt-3">
        TGC?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/jescil.png" alt="v1" className="w-20"/>
          <p className="text-2xl font-semibold">Mind Restructuring</p>
          <p className="text-gray-500 text-center">
            Harness the power of your mind for success.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/favour eze.png" alt="v1" className="w-20"/>
          <p className="text-2xl font-semibold">Health Guidance</p>
          <p className="text-gray-500 text-center">
            Build your body&apos;s resilience for peak performance on your growth journey.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/teddy.png" alt="v1" className="w-10 lg:w-20"/>
          <p className="text-2xl font-semibold">Skill Monetization</p>
          <p className="text-gray-500 text-center">
            Sell your skill and passion at a worthy price.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/leader.png" alt="v1" className="w-10 lg:w-20"/>
          <p className="text-2xl font-semibold">Productive Networking</p>
          <p className="text-gray-500 text-center">
            Like-minded creatives and professionals you can collaborate with
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/gear.png" alt="v1" className="w-10 lg:w-20"/>
          <p className="text-2xl font-semibold">Progressive Productivity</p>
          <p className="text-gray-500 text-center">
            Personality mastery for consistency and time management.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/mezie.png" alt="v1" className="w-10 lg:w-20"/>
          <p className="text-2xl font-semibold">Personalized guidance</p>
          <p className="text-gray-500 text-center">
            One-on-one enlightenment from mentors and experts in various fields.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-16 py-50">
          <div className="flex flex-col gap-5 items-center">
            <img src="/assets/munachimso.png" alt="v1" className="w-10 lg:w-20"/>
            <p className="text-2xl font-semibold">Brand Influence</p>
            <p className="text-gray-500 text-center">
            Gain clarity, build and scale global brands.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src="/assets/abimbola abe.png" alt="v1" className="w-10 lg:w-20"/>
            <p className="text-2xl font-semibold">AI Mastery</p>
            <p className="text-gray-500 text-center">
            Improve your efficiency and results through cutting-edge technology.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Values;
