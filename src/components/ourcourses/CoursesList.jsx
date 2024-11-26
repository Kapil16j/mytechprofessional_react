import React from "react";
import { ourCourses } from "../common/helper";
import { useNavigate } from "react-router-dom";

const CoursesList = () => {
  const router = useNavigate();

  return (
    <div>
      <div className="max-w-[1140px] mt-40 mx-auto w-full px-3 xl:px-0">
        <h1 className="text-[30px] max-w-[528px] w-full mx-auto text-center sm:text-[44px]  font-bold leading-[34px] sm:leading-[60px] text-black">
          Choose According To
          <span className=" about_us_color ">Your Interest</span>
        </h1>
        <div className="mt-[67px]">
          {ourCourses.map((item, index) => (
            <div
              key={index}
              className="px-6 mt-10 lg:px-[48px] py-6 md:py-[42px] flex md:flex-row flex-col items-center justify-between rounded-[8px] bg-white shadow-[0px_6px_29px_rgba(54,113,202,0.12)]"
            >
              <div>
                <h3 className="text-[28px] sm:text-[32px] font-medium leading-[38px] text-black">
                  {item.courses}
                </h3>
                <p className="text-[16px] line-clamp-5  max-w-[485px] w-full mt-3 font-normal  leading-[25px] text-black">
                  {item.desc}
                </p>
                <button
                  onClick={() => router(`${item.link}`)}
                  className="text-[16px] mt-[32px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white px-6 bg-[#231E62] h-[49px] rounded-[10px]"
                >
                  Full Course Details
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div className="md:ml-2 mt-5 lg:mt-0 lg:ml-0">
                <img
                  src={item.img}
                  width={340}
                  height={313}
                  alt="Front End Developer img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
