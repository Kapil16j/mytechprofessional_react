import {  Link } from "react-router-dom";
import React from "react";

const GetTouchWithUs = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full z-[9999]  px-3 xl:px-0">
      <div className="z-[9999] bg-white py-10 px-3 sm:py-[70px] rounded-[32px] shadow-[-10px_0px_56px_rgba(0,0,0,0.13)] mt-5 sm:mt-20 md:mt-40 ">
        <div className="max-w-[713px] z-[9999] w-full mx-auto">
          <h1 className="text-[30px] text-center sm:text-[44px]  font-bold leading-[34px] sm:leading-[60px] text-black">
            Get In <span className=" about_us_color ">Touch With Us</span>
          </h1>
          <p className="text-[16px] font-normal leading-6 mt-4 text-center text-[#171328]/80">
            At My Tech Professionals, we are eager to connect with you and provide top-notch
            IT solutions. Reach out to us today to discuss your requirements,
            projects, or any queries you have. You can contact us via phone at
            <Link href="tel:9999999999">
              <span className="text-[#3671CA] text-[20px] hover:text-black hover:scale-125">
                {" "}
                999999999999
              </span>
            </Link>{" "}
            or email us at{" "}
            <Link
              className="text-[#3671CA] text-[20px] hover:text-black hover:scale-125"
              href="mailto:mytechprofessionals@email.com"
            >
              mytechprofessionals@email.com
            </Link>
            . Alternatively, visit our website at{" "}
            <Link
              className="text-[#3671CA] text-[20px] hover:text-black hover:scale-125"
              href="/"
            >
               MyTechProfessionals.com
            </Link>{" "}
            to access our inquiry form and receive a prompt response.
          </p>
          <div className="flex justify-center ">
            <Link href="/contact-us">
              <button
                className="text-[16px] mt-[33px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px]
               bg-[linear-gradient(222.96deg,#231E62_2.41%,#3671CA_99.1%)] h-[49px] rounded-[10px]"
              >
                Contact Us
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouchWithUs;
