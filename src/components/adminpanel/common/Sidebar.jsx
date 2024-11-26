import React from "react";
import { DashboardIcon, DashboardLogo } from "./Icon";
import {  Link } from "react-router-dom";
import { sidebarData } from "./Helper";
import { useRouter } from "next/router";

const Sidebar = () => {
  const path = useRouter().pathname;
  return (
    <div className="bg-[#152B4D] w-[264px] h-full">
      <div className="py-7 px-9">
        <DashboardLogo />
      </div>
      <ul className="flex flex-col gap-3">
        {sidebarData.map((item, index) => (
          <Link key={index} href={`${item.link}`}>
            <li
              className={`flex hover:bg-[linear-gradient(122deg,rgba(21,43,77,0.05)5.96%,rgba(81,61,204,0.05)21.02%,rgba(12,220,246,0.05)38.98%),linear-gradient(90deg,#99A2FF_0%,rgba(108,81,236,0.00)100%)] items-center ${
                path === item.link
                  ? "bg-[linear-gradient(122deg,rgba(21,43,77,0.05)5.96%,rgba(81,61,204,0.05)21.02%,rgba(12,220,246,0.05)38.98%),linear-gradient(90deg,#99A2FF_0%,rgba(108,81,236,0.00)100%)]"
                  : ""
              } gap-5 pl-7 h-[48px] text-white text-[14px] font-medium font-poppins`}
            >
              <span>{item.svg}</span>
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
