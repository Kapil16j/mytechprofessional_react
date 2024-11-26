 ;
import React from "react";

const CourseHeader = ({ activeCourseDetails }) => {
  return (
    <>
      <div className="max-w-[1310px] w-full mt-9 mx-auto px-3 2xl:px-0 flex items-start">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full sm:w-[75%] lg:w-1/2">
            <h1 className="text-3xl sm:text-7xl text-center lg:text-start text-blue font-bold leading-[64px] sm:leading-[77px]">
              {activeCourseDetails.coursetitle}
            </h1>
            <p className="text-base text-center lg:text-start font-normal mt-3 text-starsapphire leading-6 ">
              {activeCourseDetails.coursedescription}
            </p>
          </div>
          <div className="w-1/2 mt-7 lg:ml-3 xl:ml-0">
            <img src={activeCourseDetails.courseimage} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
