import React from "react";
import { CallIcon, LocationIcon, MailIcon } from "../common/icon";
import {  Link } from "react-router-dom";

const Address = () => {
  return (
    <div>
      <div className="max-w-[1140px]  sm:mt-2 mx-auto px-3 xl:px-0 border border-2">
        <div className="py-[54px] rounded-[8px] px-3 xl:px-0 bg-white shadow-[0px_6px_29px_rgba(54,113,202,0.15)]">
          <div className="flex justify-between flex-col lg:flex-row max-w-[1036px] mx-auto items-center">
            <div className="flex h-[146px] justify-center lg:justify-start w-full lg:w-fit  items-center">
              <span className="mr-5"></span>
              <div>
                <p className="text-[16px] font-normal leading-6 text-black/60 ">
                  Mon to Sat: 9:00AM-6:00PM
                </p>
                <a
                  href="tel:+919999999999"
                  className="text-[20px] mt-2 hover:text-primary font-bold leading-[30px] text-black"
                >
                  +91 9999999999
                </a>
              </div>
            </div>
            <div className="flex h-[146px] lg:max-w-[351px] w-full justify-center lg:border-l border-y lg:border-y-0 lg:border-r border-black/20 mx-auto items-center">
              <span className="mr-5"></span>
              <div>
                <p className="text-[16px] font-normal leading-6 text-black/60 ">
                  Do you have a question?
                </p>
                <Link
                  href="/"
                  className="text-[20px] mt-2 hover:text-primary font-bold leading-[30px] text-black"
                >
                  mytechprofessionals.com
                </Link>
              </div>
            </div>
            <div className="flex h-[146px] justify-center lg:justify-start w-full lg:w-fit items-center">
              <span className="mr-5"></span>
              <div>
                <p className="text-[16px] font-normal leading-6 text-black/60 ">
                  Address
                </p>
                <Link
                  target="_blank"
                  href="https://goo.gl/maps/7K1CxoHWR5gFReo86"
                >
                  <p className="text-[16px] hover:text-primary mt-2 max-w-[250px]  font-bold leading-[20px] text-black">
                    SCO 73, xyz
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
