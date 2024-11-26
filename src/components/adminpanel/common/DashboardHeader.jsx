 ;
import React from "react";
import { Dasboardicon, Menuicon } from "./Icon";

const DashboardHeader = ({ text, items, setItems }) => {
  return (
    <div className=" w-full sticky z-[99999] top-0 bg-white flex pt-[20px] pb-[20px]   justify-between">
      <div className="max-w-[331px] w-full text-[#2D4B9A] text-[30px] font-[500] leading-[120%] ">
        {text}
      </div>

      <div className="flex gap-4 items-center">
        <Dasboardicon />
        <div className="lg:hidden" onClick={() => setItems(!items)}>
          <Menuicon />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
