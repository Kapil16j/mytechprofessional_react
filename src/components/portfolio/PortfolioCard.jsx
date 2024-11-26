import React from "react";

const PortfolioCard = () => {
  return (
    <div className="bg-[#152B4D] transition duration-300 ease-in-out hover:bg-black/[0.10] rounded-[10px] h-[250px] flex overflow-hidden items-end pb-3 group px-2 max-w-[330px] w-full">
      <div className="bg-white w-full rounded-[5px] transition duration-500 ease-in-out group-hover:translate-y-0 translate-y-20  flex items-center justify-center h-[62px]">
        <p className="text-[18px] text-center font-medium leading-6 text-black">
          Project Name
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
