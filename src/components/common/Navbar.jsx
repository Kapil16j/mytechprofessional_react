import React from "react";
import { OkkCodeLogo } from "./icon";
// import {  Link } from "react-router-dom";
import { navlinks } from "./helper";
// import { useRouter } from "next/router";
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from "react-router-dom";

const Navbar = ({ setSidebarOpen }) => {
  const router = useNavigate();
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between py-4 max-w-[1140px] mx-auto px-3 xl:px-0 ">
          
          <Link to="/" passHref>
            {/* <OkkCodeLogo /> */}
            <img src="/img/logo/navlogo.png" alt="logo" style={{height:"150px",width:"150px"}}></img>
          </Link>

          <div className="flex items-center">
            <ul className="hidden lg:flex items-center space-x-4 pr-4">
              {navlinks &&
                navlinks.map((obj, index) => (
                  <li key={index}>
                    <Link
                      aria-label={obj.title}
                      passHref
                      to={obj.url}
                      // className={`${
                      //   router.asPath === "/"
                      //     ? "text-black font-medium  text-opacity-70 hover:text-primary hover:text-opacity-100"
                      //     : "text-white hover:text-opacity-60"
                      // }  font-medium text-base transition-all duration-200 ease-in `}
                      className= "text-black font-medium  text-opacity-70 hover:text-primary hover:text-opacity-100 font-medium text-base transition-all duration-200 ease-in "
                    >
                      {obj.title}
                    </Link>
                  </li>
                ))}
            </ul>

            <Link href="/contact-us">
              <button className="text-[16px] mx-4 shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[143px] sm:w-[173px] bg-[#231E62] h-[49px] rounded-[2px]">
                Contact us
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
            <span className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 17H21M3 12H21M3 7H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
