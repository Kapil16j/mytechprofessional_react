import React from "react";
import {  Link } from "react-router-dom";
import { navlinks } from "./helper";
import { LogoIcon } from "./icon";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <aside
        className={`w-full bg-[#231E62] h-screen fixed top-0  transition-all duration-200 ease-in z-20 lg:hidden ${
          isSidebarOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="absolute left-5 ">
          <img src="/img/logo/navlogo.png" alt="logo" style={{height:"150px",width:"150px"}}></img>
        </div>
        <span
          className="absolute right-3 top-5"
          onClick={() => setSidebarOpen(false)}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 4.75L4.75 11.25M4.75 4.75L11.25 11.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <ul className="flex flex-col items-center justify-center space-y-6 h-full">
          {navlinks &&
            navlinks.map((obj, index) => (
              <li key={index}>
                <Link
                  passHref
                  href={obj.url}
                  className="text-white font-medium text-[20px] transition-all duration-200 ease-in"
                >
                  {obj.title}
                </Link>
              </li>
            ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
