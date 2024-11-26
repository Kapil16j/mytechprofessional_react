 ;
import React from "react";

const DetailsPortfolio = () => {
  return (
    <div className="max-w-[1140px] w-full mx-auto mt-10">
      <img
        src="/img/portifolio/portifolio-img-2.png"
        width={1920}
        height={1080}
        alt="portifolio"
      />
      <div className="mt-10">
        <div className="flex gap-3 bg-[#152B4D] justify-between p-3 rounded-md  items-center">
          <h1 className="text-[40px]  font-bold leading-[44px] text-white">
            Project Name
          </h1>
          <h1 className="text-[40px] font-bold leading-[44px] text-white">
            Free Source
          </h1>
        </div>
        <p className="text-[18px] mt-5 font-medium leading-6 text-[#737B9A]">
          Related Tags
        </p>
        <div className="w-28 h-1 rounded-md bg-[#152b4d]"></div>
        <div className="mt-3 flex gap-3 flex-wrap">
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Related Tags
          </span>
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Related Tags
          </span>
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Related Tags
          </span>
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Related Tags
          </span>
        </div>
        <p className="text-[18px] mt-5 font-medium leading-6 text-[#737B9A]">
          Tools Used
        </p>
        <div className="w-28 h-1 rounded-md bg-[#152b4d]"></div>
        <div className="mt-3 flex gap-3 flex-wrap">
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Tool Name
          </span>
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Tool Name
          </span>
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Tool Name
          </span>
          <span className="py-1 px-3 text-[18px] font-normal leading-5 bg-[#152B4D] text-white rounded-[5px] ">
            Tool Name
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsPortfolio;
