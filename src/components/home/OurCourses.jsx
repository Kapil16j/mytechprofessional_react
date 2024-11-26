import React from "react";
import AllCourses from "./AllCourses";
import {  Link } from "react-router-dom";
 ;

const OurCourses = () => {
  return (
    <div>
      <div className="max-w-[1140px] sm:mt-20 mt-10  lg:mt-40  w-full mx-auto px-3 xl:px-0 ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="max-w-[520px]  w-full">
            <h1 className="text-[30px] sm:text-[44px] font-bold leading-[34px] sm:leading-[48px] text-black">
              Explore Our <span className=" about_us_color ">Courses</span>
            </h1>
            <p className="text-[16px] mt-5 font-normal leading-[25px]">
              At My Tech Professionals, we offer a diverse range of courses to empower
              individuals with the skills they need in the ever-evolving IT
              landscape. Our courses are designed by industry experts and cover
              a wide spectrum of topics, including programming languages, web
              development, mobile app development, data science, cybersecurity,
              and cloud computing. Whether you are a beginner or an experienced
              professional seeking to enhance your skills, our courses cater to
              all proficiency levels. With hands-on practical exercises and
              real-world projects, we ensure an immersive learning experience.
              Join My Tech Professionals,&apos;s courses to gain the knowledge and expertise to
              thrive in the IT industry and unlock exciting career
              opportunities.
            </p>
            <Link href="/our-courses">
              <button className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]">
                Learn More
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
          <div className="  max-w-[300px] sm:max-w-fit mt-10 lg:mt-0 ">
            {/* <AllCourses /> */}
            <img
              src="/img/home/courses.png"
              width={530}
              height={520}
              alt="our courses"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
