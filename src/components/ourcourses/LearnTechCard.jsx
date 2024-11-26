 ;
import {  Link } from "react-router-dom";
import React from "react";

const LearnTechCard = ({ obj }) => {
  const { imageURL, heading, description, link } = obj;

  return (
    <>
      <article className="bg-white p-5 transition duration-300 ease-in-out rounded-[21px] group hover:bg-[linear-gradient(222.96deg,#231E62_2.41%,#3671CA_99.1%)] border mx-auto border-[#E6E6E7] max-w-[331px] w-full">
        <div className="flex justify-center ">
          <div className="flex justify-center items-center w-[75px] h-[75px] rounded-[50%] bg-[rgba(54,113,202,0.1)] group-hover:bg-white/20">
            <img src={imageURL} alt={imageURL} width={41} height={41} />
          </div>
        </div>
        <h4 className="text-center uppercase group-hover:text-white text-sm mt-[26px] leading-[18px] text-black font-black">
          {heading}
        </h4>
        <p className="max-w-[253px] group-hover:text-white/80 mt-3 mx-auto w-full text-center text-sm font-normal text-[#4D4D59]">
          {description}
        </p>
        <div className="group-hover:block none flex mt-3 justify-center ">
          <Link href={`${link}`} target="_blank">
            <p className="text-[20px]  leading-6 text-center cursor-pointer text-white font-bold ">
              <u className="text-center">View All</u>
            </p>
          </Link>
        </div>
      </article>
    </>
  );
};

export default LearnTechCard;
