import React, { useState } from "react";
import { portifolioDataList } from "../common/helper";

const PortfolioSidebar = ({ active, setActive }) => {
  return (
    <div>
      <h2 className="text-[30px] font-semibold leading-normal text-[#212529]">
        Project Categories
      </h2>
      <ul className="shadow-[0px_0px_15px_0px_#F0F0F7,0px_0px_20px_0px_#F0F0F7] whitespace-nowrap overflow-auto px-5 items-center mt-5 h-[90px] flex gap-3 bg-white rounded-[10px]">
        {portifolioDataList.map((item, index) => (
          <li
            onClick={() => setActive(item.li)}
            key={index}
            className={`h-[50px] ${
              active === item.li ? "bg-[#152B4D] text-white" : " text-black"
            } text-[18px] px-3 flex justify-center  cursor-pointer items-center 
            rounded-[10px] font-semibold leading-7  `}
          >
            {item.li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioSidebar;
