import React from "react";
import { MaintainenceIcon } from "../common/icon";

const MainTainenceHero = () => {
  return (
    <div>
      <div className="max-w-[1140px] w-full mx-auto px-3 xl:px-0 mt-32">
        <div className="flex justify-between flex-col lg:flex-row items-center">
          <div className="max-w-[400px] md:max-w-fit mx-auto">
            <MaintainenceIcon />
          </div>
          <div className="flex items-center flex-col lg:items-start mt-5 lg:mt-0">
            <p className="text-[35px] sm:text-[48px] leading-[56px]  font-bold  about_us_color  ">
              Maintainence
            </p>
            <p className="text-[16px] font-normal leading-6 text-center lg:text-start text-black max-w-[512px]">
              At My Tech Professionals, we understand the importance of ongoing maintenance
              for your IT systems and applications. Our maintenance services are
              designed to ensure the smooth operation, security, and optimal
              performance of your software and infrastructure.
            </p>
            <button className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]">
              Learn More
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTainenceHero;
