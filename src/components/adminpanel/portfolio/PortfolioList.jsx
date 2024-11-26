 ;
import React from "react";
import {  Link } from "react-router-dom";

const PortfolioList = ({ item, handleDeletePortfolio }) => {
  return (
    <div className="bg-white p-2.5 rounded-[8px] flex items-center gap-3 justify-center md:justify-between  flex-wrap md:flex-nowrap shadow-[7px,10px,29px,0px,#D9E8FF]">
      <div className="flex items-center gap-5 xl:gap-10 md:justify-normal justify-center flex-wrap xl:flex-nowrap">
        <img
          src={item.coverImage}
          alt="portfolio img "
          width={181}
          height={135}
        />
        <div className="flex flex-col gap-3 ">
          <h3 className=" text-[20px] sm:text-[25px]  font-poppins text-center md:text-start font-medium leading-6 sm:leading-7 text-[#152B4D] ">
            {item.projectTitle}
          </h3>
          <p className="text-[14px] sm:text-[16px] font-poppins font-normal line-clamp-2	  text-center md:text-start leading-5 sm:leading-6 text-black max-w-[537px]">
            {item.description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[15px]">
        <Link href={`/admin/portfolio/form?id=${item._id}`} passHref>
          <button className="text-[#152B4D] font-poppins leading-7 text-[24px] bg-[#E6EBEE] rounded-[8px] w-[120px] sm:w-[141px] h-[48px] ">
            Edit
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Link>

        <Link href={`/admin/portfolio/form?id=${item._id}`} passHref>
          <button className="text-white font-poppins leading-7 text-[24px] bg-[linear-gradient(90deg,#3671CA_0%,#232065_100%)] rounded-[8px] w-[120px] sm:w-[141px] h-[48px] ">
            View
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </Link>

        <button
          onClick={() => handleDeletePortfolio(item._id)}
          className="text-white font-poppins leading-7 text-[24px] bg-[linear-gradient(90deg,#ed213a_0%,#93291e_100%)] rounded-[8px] w-[120px] sm:w-[141px] h-[48px] "
        >
          Delete
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioList;
