import React from "react";
import LearnTechCard from "./LearnTechCard";

const TechList = ({ activeCourseDetails }) => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto px-3 xl:px-0  sm:mt-[70px] mt-8 md:mt-[120px]">
        <div className="flex justify-center items-center">
          <div className="max-w-[40px] sm:max-w-[83px] w-full h-[3px] bg-blue"></div>
          <p className="text-[30px] sm:text-[48px] font-bold mx-3 sm:mx-6 leading-[36px] sm:leading-[46px] text-blue">
            What <span className=" about_us_color ">You learn</span>
          </p>
          <div className="max-w-[40px] sm:max-w-[83px] w-full h-[3px] bg-blue"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5 sm:mt-[56px]">
          {activeCourseDetails.techlist &&
            activeCourseDetails.techlist.map((obj, index) => (
              <LearnTechCard key={index} obj={obj} />
            ))}
        </div>
        {/* <CoursesTimePeriod activeCourseDetails={activeCourseDetails} /> */}
      </div>
    </>
  );
};

export default TechList;
