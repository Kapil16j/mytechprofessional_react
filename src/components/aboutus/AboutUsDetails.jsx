import React from "react";
import { MaintainenceIcon } from "../common/icon";
import {  Link } from "react-router-dom";

const AboutUsDetails = () => {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto px-3 xl:px-0  mt-32">
        <div className="flex justify-between flex-col lg:flex-row items-center">
          <div className="flex items-center flex-col lg:items-start mt-5 lg:mt-0">
            <p className="text-[35px] sm:text-[48px] leading-[56px]  font-bold  about_us_color  ">
              About Us
            </p>
            <p className="text-[16px] mt-7 font-normal leading-6 text-center lg:text-start text-black max-w-[512px]">
            My Tech Professionals is a leading IT company that specializes in providing
              cutting-edge solutions to businesses of all sizes. With a team of
              highly skilled professionals, we offer a wide range of services
              including software development, web design, mobile app
              development, and cloud solutions. Our expertise lies in creating
              tailored solutions that meet the unique requirements of our
              clients. We pride ourselves on delivering high-quality projects on
              time and within budget. Our customer-centric approach, attention
              to detail, and commitment to excellence set us apart. Partner with
              My Tech Professionals to leverage technology and elevate your business to new
              heights. Let&apos;s embark on a transformative journey together.
            </p>
            <Link href="/our-courses">
              <button className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]">
                Learn More
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
          <div className="">
            <MaintainenceIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetails;
