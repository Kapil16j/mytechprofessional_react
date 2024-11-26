import React, { useState } from "react";
import {
  CloseEyeIcon,
  FaceBookIcon,
  GoogleIcon,
  NewLogo,
  OpenEyeIcon,
} from "../common/Icon";
import {  Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { login } from "@/services/Url.service";
import { optimizeFonts } from "@/next.config";
optimizeFonts;
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [password, setPassword] = useState(false);

  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(login, {
        email: email,
        password: passwordInput,
      });
      if (response.data.success) {
        Cookies.set("token", response.data.token);
        router.push("/admin/portfolio/form");
        return toast.success("Login Successful!");
      }
    } catch (error) {
      console.error("Login error", error);
      return toast.error("Invalid email or password.");
    }
  };
  return (
    <div className="max-w-[556px] w-full mx-auto">
      <NewLogo />
      <h2 className="text-[36px] mt-20 font-medium leading-10 text-[#152B4D] ">
        Log In your Account
      </h2>
      <p className="text-[24px] font-normal text-[#152B4D] mt-8 leading-7">
        Welcome back !
      </p>
      <div className="flex justify-between mt-16">
        <button className="flex items-center justify-center rounded-[8px] gap-6 w-[225px] h-[48px] text-[24px] text-[#152B4D] font-normal leading-7 ">
          <GoogleIcon />
          Google
        </button>
        <button className="flex items-center justify-center rounded-[8px] gap-6 w-[225px] h-[48px] text-[24px] text-[#152B4D] font-normal leading-7 ">
          <FaceBookIcon />
          Facebook
        </button>
      </div>
      <div className="flex gap-4 items-center mt-[53px]">
        <div className="max-w-[172px] w-full h-[1px] bg-[#DDDDDD]"></div>
        <p className="text-[18px] font-normal leading-5 text-[#152B4D]">
          to continue with email
        </p>
        <div className="max-w-[172px] w-full h-[1px] bg-[#DDDDDD]"></div>
      </div>
      <form onSubmit={(e) => handleLogin(e)} action="" className="mt-[51px]">
        <input
          type="email"
          placeholder="abc@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#152B4D] h-[55px] rounded-[8px] outline-none w-full p-4 text-[14px] leading-6 font-normal text-[#6D7D93]"
        />
        <div className="border border-[#152B4D] rounded-[8px] flex items-center  h-[55px] mt-12 p-4">
          <input
            onChange={(e) => setPasswordInput(e.target.value)}
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
          Log In
        </button>
      </form>
      <p className="text-[16px] font-medium mt-5 text-center leading-6 text-[#152B4D]">
        Don’t have an accout?{" "}
        <Link href="#" className="text-[#3671CA]">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
