import React from "react";
import { DesignPhaseIcon, LaunchMaintenanceIcon } from "../common/icon";
 ;

const ProjectLifeCycle = () => {
  return (
    <div>
      <div className="max-w-[1140px] md:mt-20 sm:mt-10 mt-7 lg:mt-32 mx-auto px-3 xl:px-0">
        <h1 className="text-[30px] text-center sm:text-[44px] mb-36 font-bold leading-[34px] sm:leading-[60px] text-black">
          Project <span className=" about_us_color "> Life Cycle</span>
        </h1>
        <div className="relative ">
          <div className="max-w-[870px] w-full  mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  items-center">
              <div className=" max-w-[210px] order-1 mx-auto mt-5 xl:mt-0  w-full">
                <p className="font-medium text-[24px] text-center text-black leading-[28px] ">
                  Market Research Analysis
                </p>
                <p className="text-[16px] text-center line-clamp-5 font-normal leading-[25px] mt-[5px] text-black">
                  In this phase, comprehensive market research is conducted to
                  gather information and insights about the target market,
                  customer needs, competitors, and industry trends. The analysis
                  helps in understanding the market dynamics and identifying
                  potential opportunities and challenges for the project.
                </p>
              </div>
              <div className="max-w-[210px]  order-4 lg:order-2 mx-auto mt-5 xl:mt-0  flex justify-center flex-col items-center w-full">
                <p className="text-[24px] text-center font-bold leading-[28px] text-[#3671CA]">
                  Step 2
                </p>
                <div className="w-[93px] relative mt-5 flex justify-center items-center h-[93px] bg-[#3671CA] rounded-[50%] border-4 border-white">
                  <DesignPhaseIcon />
                  <div className="w-[118px] absolute z-[-1] -bottom-8 -left-6 h-[118px] bg-[radial-gradient(49.96%_49.96%_at_49.93%_49.93%,#ACC2D4_68.36%,#BBCDDC_72.46%,#E0E8EF_84.35%,#F7F9FB_93.95%,#FFFFFF_100%)] opacity-[0.43]"></div>
                </div>
              </div>
              <div className=" max-w-[210px] order-5 lg:order-3 mx-auto mt-5 xl:mt-0  w-full">
                <p className="font-medium text-[24px] text-center text-black leading-[28px] ">
                  Development Testing
                </p>
                <p className="text-[16px] text-center line-clamp-5 font-normal leading-[25px] mt-[5px] text-black">
                  The development testing phase involves the actual
                  implementation of the project based on the design
                  specifications. This includes coding, programming, and
                  building the software, website, or application. It also
                  includes rigorous testing to identify and fix any bugs or
                  errors, ensuring that the project functions as intended and
                  meets the specified requirements.
                </p>
              </div>
              <div className="max-w-[210px] order-8 lg:order-4 mx-auto mt-5 xl:mt-0  flex justify-center flex-col items-center w-full">
                <p className="text-[24px] text-center font-bold leading-[28px] text-[#3671CA]">
                  Step 4
                </p>
                <div className="w-[93px] relative mt-5 flex justify-center items-center h-[93px] bg-[#3671CA] rounded-[50%] border-4 border-white">
                  <LaunchMaintenanceIcon />
                  <div className="w-[118px] absolute z-[-1] -bottom-8 -left-6 h-[118px] bg-[radial-gradient(49.96%_49.96%_at_49.93%_49.93%,#ACC2D4_68.36%,#BBCDDC_72.46%,#E0E8EF_84.35%,#F7F9FB_93.95%,#FFFFFF_100%)] opacity-[0.43]"></div>
                </div>
              </div>
              <div className="max-w-[210px] order-2 lg:order-5 mx-auto mt-5 xl:mt-0  flex justify-center flex-col items-center w-full">
                <p className="text-[24px] text-center font-bold leading-[28px] text-[#3671CA]">
                  Step 1
                </p>
                <div className="w-[93px] relative mt-5 flex justify-center items-center h-[93px] bg-[#3671CA] rounded-[50%] border-4 border-white">
                  <DesignPhaseIcon />
                  <div className="w-[118px] absolute z-[-1] -bottom-8 -left-6 h-[118px] bg-[radial-gradient(49.96%_49.96%_at_49.93%_49.93%,#ACC2D4_68.36%,#BBCDDC_72.46%,#E0E8EF_84.35%,#F7F9FB_93.95%,#FFFFFF_100%)] opacity-[0.43]"></div>
                </div>
              </div>
              <div className=" max-w-[210px] order-3 lg:order-6 mx-auto mt-5 xl:mt-0  w-full">
                <p className="font-medium text-[24px] text-center text-black leading-[28px] ">
                  Design Phase
                </p>
                <p className="text-[16px] text-center line-clamp-5 font-normal leading-[25px] mt-[5px] text-black">
                  During the design phase, the project requirements are
                  transformed into a detailed design plan. This involves
                  creating a blueprint or roadmap for the project, specifying
                  the system architecture, user interface design, database
                  design, and other necessary components. The design phase sets
                  the foundation for the development and implementation stages.
                </p>
              </div>
              <div className="max-w-[210px] order-6 lg:order-7 mx-auto mt-5 xl:mt-0  flex justify-center flex-col items-center w-full">
                <p className="text-[24px] text-center font-bold leading-[28px] text-[#3671CA]">
                  Step 3
                </p>
                <div className="w-[93px] relative mt-5 flex justify-center items-center h-[93px] bg-[#3671CA] rounded-[50%] border-4 border-white">
                  <LaunchMaintenanceIcon />
                  <div className="w-[118px] absolute z-[-1] -bottom-8 -left-6 h-[118px] bg-[radial-gradient(49.96%_49.96%_at_49.93%_49.93%,#ACC2D4_68.36%,#BBCDDC_72.46%,#E0E8EF_84.35%,#F7F9FB_93.95%,#FFFFFF_100%)] opacity-[0.43]"></div>
                </div>
              </div>
              <div className=" max-w-[210px] order-7 lg:order-8 mx-auto mt-5 xl:mt-0  w-full">
                <p className="font-medium text-[24px] text-center text-black leading-[28px] ">
                  Launch Maintenance
                </p>
                <p className="text-[16px] text-center line-clamp-5 font-normal leading-[25px] mt-[5px] text-black">
                  Once the project is developed and tested, it is ready for
                  launch. The launch maintenance phase involves deploying the
                  project to its intended audience or users. During this phase,
                  continuous monitoring and maintenance are performed to address
                  any issues, provide support, and make necessary improvements
                  or updates based on user feedback and changing requirements.
                  The goal is to ensure the project&apos;s smooth operation and
                  long-term success. These descriptions should help provide a
                  general overview of each step within the project life cycle.
                  Feel free to customize or expand upon them based on the
                  specific details and context of your website.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:block absolute top-[120px] left-[16px] z-[-1]">
            <img
              src="/img/home/waves-img.png"
              width={1088}
              height={210}
              alt="waves img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLifeCycle;
