 ;
import React, { useState } from "react";
import toast from "react-toastify";
import Cookies from "js-cookie";
import {  Link } from "react-router-dom";

const AllTeamList = ({ item, handleDeleteTeamMember }) => {
  return (
    <div className="flex items-center gap-5 border-b py-4 border-[#DDD] lg:gap-10  justify-between">
      <div className="flex items-center gap-5">
        <img
          // src="/img/admin/team-member.png"
          src={item.profilePhoto}
          width={78}
          alt="team img"
          height={78}
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-[16px] font-medium leading-[120%]  font-poppins">
            {item.name}
          </h3>
          <p>{item.workRole}</p>
        </div>
      </div>
      <p className="text-[16px] font-normal leading-[120%] font-poppins text-black ">
        {item.email}
      </p>
      <div className="flex items-center gap-3 ">
        <Link
          href={`/admin/team/form?id=${item._id}`}
          className="py-2 px-5 rounded-[8px] bg-[#E6EBEE] text-[20px] text-[#152B4D] font-poppins font-normal leading-6"
        >
          Edit
        </Link>
        <Link
          href={`/admin/team/form?id=${item._id}`}
          className="py-2 px-5 rounded-[8px] bg-[linear-gradient(90deg,#3671CA_0%,#232065_100%)] text-[20px] text-white font-poppins font-normal leading-6"
        >
          View
        </Link>
        <button
          onClick={() => handleDeleteTeamMember(item._id)}
          className="py-2 px-5 !rounded-[8px] bg-[linear-gradient(90deg,#ed213a_0%,#93291e_100%)] text-[20px] text-white font-poppins font-normal leading-6"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AllTeamList;
