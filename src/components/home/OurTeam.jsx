import React from "react";
import { ourteam } from "../common/helper";

const OurTeam = () => {
  return (
    <div
      className=" 
     bg-[linear-gradient(222.94deg,#231E62_2.41%,#3671CA_99.13%)] bg-no-repeat bg-cover  mt-40 xl:py-44 "
    >
      <div className="max-w-[1140px]  mx-auto w-full px-3 xl:px-0">
        <h2 className="text-[44px] text-center pt-10 leading-[48px] font-bold text-white">
          Our Team
        </h2>
        <div className=" sm:mt-[81px] pb-10 flex justify-around  flex-wrap">
          {ourteam.map((item, index) => (
            <div key={index} className="profile-card  ">
              <div className="img">
                <img src={item.img} width={150} height={150} alt="hello" />
              </div>
              <div className="mt-2 caption">
                <h2 className="text-[24px] font-medium text-center leading-[28px] text-primary">
                  {item.name}
                </h2>
                <p className="text-[18px] mt-1 text-center font-normal leading-[21px] text-black">
                  {item.job}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
