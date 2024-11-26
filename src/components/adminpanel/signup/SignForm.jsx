import React, { useState } from "react";
import {
  CloseEyeIcon,
  FaceBookIcon,
  GoogleIcon,
  GooglesignIcon,
  NewLogo,
  OpenEyeIcon,
} from "../common/Icon";
import {  Link } from "react-router-dom";

const SignForm = () => {
  const [password, setPassword] = useState(false);
  return (
    <div className="max-w-[556px] w-full mx-auto">
      <NewLogo />
      <h2 className="text-[36px] mt-20 font-medium leading-10 text-[#152B4D] ">
        Sign Up your Account
      </h2>
      <p className="text-[24px] font-normal text-[#152B4D] mt-8 leading-7">
        Please Signup before use this Platform
      </p>

      <form action="" className="mt-[51px]">
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-[#152B4D] h-[55px] rounded-[8px] outline-none w-full p-4 text-[14px] leading-6 font-normal text-[#6D7D93]"
        />
        <input
          type="email tell"
          placeholder="Enter your email or phone no."
          className="border mt-12 border-[#152B4D] h-[55px] rounded-[8px] outline-none w-full p-4 text-[14px] leading-6 font-normal text-[#6D7D93]"
        />
        <div className="border border-[#152B4D] rounded-[8px] flex items-center  h-[55px] mt-12 p-4">
          <input
            type={password ? "text" : "password"}
            placeholder="0000000"
            className=" outline-none w-full  text-[14px] leading-6 font-normal text-[#6D7D93]"
          />
          <span onClick={() => setPassword(!password)}>
            {password ? <OpenEyeIcon /> : <CloseEyeIcon />}
          </span>
        </div>
        <Link href="#">
          <p className="text-[20px] font-normal mt-8 w-full max-w-full text-end text-black leading-6 ">
            Forget Password
          </p>
        </Link>
        <button className="text-[20px] font-medium mt-8 leading-6 text-white w-full h-[55px] bg-[#152B4D] rounded-[8px]">
          {" "}
          Sign Up
        </button>
      </form>
      <div className="flex gap-4 items-center mt-[53px]">
        <div className="max-w-[172px] w-full h-[1px] bg-[#DDDDDD]"></div>
        <p className="text-[18px] font-normal leading-5 text-[#152B4D]">
          to continue with email
        </p>
        <div className="max-w-[172px] w-full h-[1px] bg-[#DDDDDD]"></div>
      </div>
      <button className="flex justify-center items-center gap-2 text-[20px] font-medium mt-8 leading-6 text-[#152B4D] w-full h-[55px] !border-2 border-[#152B4D] !rounded-[8px]">
        {" "}
        <GoogleIcon />
        Sign Up with Google
      </button>
      <p className="text-[16px] font-medium mt-5 text-center leading-6 text-[#152B4D]">
        Already have an account
        <span>
          {" "}
          <Link href="#" className="text-[#3671CA]">
            Login
          </Link>
        </span>
      </p>
    </div>
  );
};

export default SignForm;
