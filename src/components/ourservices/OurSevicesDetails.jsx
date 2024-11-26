import React from "react";
import { ourServiceData } from "../common/helper";
import {  Link } from "react-router-dom";

const OurSevicesDetails = () => {
  return (
    <div>
      <div className="max-w-[1140px] mt-40 mx-auto w-full px-3 xl:px-0">
        <h1 className="text-[30px] text-center sm:text-[44px]  font-bold leading-[34px] sm:leading-[60px] text-black">
          Our <span className=" about_us_color ">Services</span>
        </h1>
        <div className="grid grid-cols-1 mt-[70px] md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourServiceData.map((item, index) => (
            <Link key={index} href="/contact-us">
              <div className="max-w-[364px] mx-auto rounded-[18px] transition duration-300 ease-in-out group  hover:bg-[linear-gradient(222.96deg,#231E62_2.41%,#3671CA_99.1%)] bg-white pt-[27px] shadow-[0px_6px_29px_rgba(54,113,202,0.12)] w-full">
                <div className="mx-auto max-w-[207px] h-[208px] flex justify-end items-end">
                  {item.svg}
                </div>
                <div className="mt-2 sm:mt-[18px] px-3 sm:px-[29px] pb-8">
                  <h3 className="font-bold text-center leading-7  group-hover:text-white text-[20px] sm:text-[24px] text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] line-clamp-4 font-normal   group-hover:text-white text-center leading-[25px] text-black ">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSevicesDetails;
