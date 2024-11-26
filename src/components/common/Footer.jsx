import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  OkkCodeLogo,
  Telegramicon,
  TwitterIcon,
} from "./icon";
// import {  Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="relative">
      <div className=" xl:absolute xl:top-0 xl:left-0  xl:right-0  xl:h-[671px] bg-no-repeat bg-cover	flex flex-col justify-end  bg-[linear-gradient(222.96deg,#231E62_2.41%,#3671CA_99.1%)] ">
        <div className="max-w-[1140px] mx-auto w-full pt-10 lg:pt-32 px-3 xl:px-0">
          <div className="  flex-wrap  space-y-5 flex justify-center sm:justify-between">
            <div className="mt-5 w-[250px]  sm:mr-5 sm:w-fit">
              <div className="flex justify-center sm:justify-start">
                <Link
                  className=" text-white/80 hover:text-white/40"
                  aria-label="Logo"
                  to="/"
                >
                  {/* <OkkCodeLogo /> */}
                  <img src="/img/logo/navlogo.png" style={{height:"150px",width:"150px"}}></img>
                </Link>
              </div>
              <p className="max-w-[300px] text-center sm:text-start w-full text-[16px] mt-6 font-normal text-white">
                It only takes minutes to finish it! That way you’ll find out
                your.
              </p>
              <p className="text-[18px] mt-[37px] text-center sm:text-start font-bold leading-[27px] text-white">
                Follow Us
              </p>
              <div className="flex mt-2 items-center max-w-[196px] mx-auto sm:mx-0 w-full justify-between">
                <Link
                  className=" text-white/80 hover:text-white/40"
                  aria-label="Facebook link"
                  to="https://www.facebook.com/"
                  target="_blank"
                >
                  <span className="w-[37px] h-[37px] bg-transparent hover:bg-white border rounded-[50%] border-white flex items-center justify-center group hover:border-black">
                    <FacebookIcon />
                  </span>
                </Link>
                <Link
                  className=" text-white/80 hover:text-white/40"
                  aria-label="Twitter Link"
                  to="https://twitter.com"
                  target="_blank"
                >
                  <span className="w-[37px] h-[37px] bg-transparent hover:bg-white border rounded-[50%] border-white flex items-center justify-center group hover:border-black">
                    <TwitterIcon />
                  </span>{" "}
                </Link>
                <Link
                  className=" text-white/80 hover:text-white/40"
                  aria-label="https://www.instagram.com/"
                  to="https://www.instagram.com/"
                  target="_blank"
                >
                  <span className="w-[37px] h-[37px] bg-transparent hover:bg-white border rounded-[50%] border-white flex items-center justify-center group hover:border-black">
                    <InstagramIcon />
                  </span>
                </Link>
                <Link
                  className=" text-white/80 hover:text-white/40"
                  aria-label="Telegram"
                  to="https://t.me/+919999999999"
                  target="_blank"
                >
                  <span className="w-[37px] h-[37px] bg-transparent hover:bg-white border rounded-[50%] border-white flex items-center justify-center group hover:border-black">
                    <Telegramicon />
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-[250px]  sm:mr-5 ">
              <p className="text-[18px] text-center sm:text-start font-medium text-white leading-[30px]">
                Services
              </p>
              <ul>
                <li className=" mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Mobile App Development"
                    to="/course/mobile-app"
                  >
                    Mobile App Development
                  </Link>
                </li>

                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label=" UI/UX Design"
                    to="/course/ui-ux"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Web Development"
                    to="/course/frontend"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Back End Development"
                    to="/course/backend"
                  >
                    Back End Development
                  </Link>
                </li>

                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Maintainence"
                    to="/web-maintainence"
                  >
                    Maintainence
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[250px]  sm:mr-5 ">
              <p className="text-[18px] font-medium text-center sm:text-start text-white leading-[30px]">
                About Us
              </p>
              <ul>
                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Contact"
                    to="/contact-us"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Help Center"
                    to="/contact-us"
                  >
                    Help Center
                  </Link>
                </li>

                {/* <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Locations"
                    to="https://goo.gl/maps/gS4r6eJ9q5hC7GPP7"
                    target="_blank"
                  >
                    {" "}
                    Locations
                  </Link>
                </li>
                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Pricing"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="w-[250px]  sm:mr-5 ">
              <p className="text-[18px] font-medium text-center sm:text-start text-white leading-[30px]">
                Our Policy
              </p>
              <ul>
                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label=" Cancel & Refund Policy"
                    to="/refund-cancel-policy"
                  >
                    {" "}
                    Cancel & Refund Policy
                  </Link>
                </li>
                <Link
                  className=" text-white/80 hover:text-white/40"
                  aria-label=" Terms & Conditions"
                  to="/terms&conditions"
                >
                  <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                    Terms & Conditions
                  </li>
                </Link>
                <li className="mt-1.5 text-center sm:text-start  text-[18px] font-normal leading-[30px]">
                  <Link
                    className=" text-white/80 hover:text-white/40"
                    aria-label="Privacy Policy"
                    to="/privacypolicy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-[90px] border-white/30 py-7">
          <p className="text-white px-3  text-[16px] text-center font-medium leading-5">
            {date} My Tech Professionals company. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
