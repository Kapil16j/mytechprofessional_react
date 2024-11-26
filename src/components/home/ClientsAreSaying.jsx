 ;
import { Staricon } from "../common/icon";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
const ClientsAreSaying = () => {
  return (
    <div>
      <div className="max-w-[1140px] mb-40 mt-40 mx-auto px-3 xl:px-0 w-full">
        <h1 className="text-[30px] text-center sm:text-[44px] mb-20 font-bold leading-[34px] sm:leading-[60px] text-black">
          Check What Our{" "}
          <span className=" about_us_color ">Clients Are Saying</span>
        </h1>
        <Swiper spaceBetween={70} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="flex lg:h-[700px] lg:space-x-3 w-full flex-col lg:flex-row justify-between items-center">
              <div className="max-w-[402px] mt-20 relative w-full h-[456px] ml-20 bg-[#DDE7F6] rounded-[8px]">
                <img
                  className="absolute bottom-0"
                  src="/img/home/client-img.png"
                  width={364}
                  height={490}
                  alt="Client img"
                />
                <img
                  className="absolute z-[9999] hidden sm:block bottom-[-80px] right-[-80px]"
                  src="/img/home/client-bg-img-1.png"
                  width={133}
                  height={133}
                  alt="client bg img"
                />
                <img
                  className="absolute top-[-70px] hidden sm:block left-[-70px] z-[9999]"
                  src="/img/home/client-bg-img-2.png"
                  width={133}
                  height={133}
                  alt="client bg img"
                />
                <img
                  className="absolute z-[-1] top-[-40px] right-[-40px]"
                  src="/img/home/client-bg-img-3.png"
                  width={133}
                  height={133}
                  alt="client bg img"
                />
              </div>
              <div className="max-w-[554px] mt-5 lg:mt-0 w-full">
                <div>
                  <img
                    src="/img/home/semicolumn-img.png"
                    width={31}
                    height={27}
                    alt="semicolumn img"
                  />
                </div>
                <div className="flex items-center mt-5">
                  <Staricon />
                  <Staricon />
                  <Staricon />
                  <Staricon />
                  <Staricon />
                </div>
                <div className="mt-5">
                  <p className="text-[30px] font-normal text-black leading-[41px]">
                    Is be upon sang fond must shew. Really boy law county she
                    unable her sister. Feet you off its like like six. Among sex
                    are leave law built now.
                  </p>
                  <p className="text-[20px] mt-7 font-bold text-[#3671CA] leading-[30px]">
                    Jane Cooper
                  </p>
                  <p className="text-[16px] font-normal leading-6 text-[#231E62]">
                    Designer, Manager
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex lg:h-[700px] lg:space-x-3 w-full flex-col lg:flex-row justify-between items-center">
              <div className="max-w-[402px] mt-20 relative w-full h-[456px] ml-20 bg-[#DDE7F6] rounded-[8px]">
                <img
                  className="absolute bottom-0"
                  src="/img/home/client-img.png"
                  width={364}
                  height={490}
                  alt="Client img"
                />
                <img
                  className="absolute z-[9999] hidden sm:block bottom-[-80px] right-[-80px]"
                  src="/img/home/client-bg-img-1.png"
                  width={133}
                  height={133}
                  alt="client bg img"
                />
                <img
                  className="absolute top-[-70px] hidden sm:block left-[-70px] z-[9999]"
                  src="/img/home/client-bg-img-2.png"
                  width={133}
                  height={133}
                  alt="client bg img"
                />
                <img
                  className="absolute z-[-1] top-[-40px] right-[-40px]"
                  src="/img/home/client-bg-img-3.png"
                  width={133}
                  height={133}
                  alt="client bg img"
                />
              </div>
              <div className="max-w-[554px] mt-5 lg:mt-0 w-full">
                <div>
                  <img
                    src="/img/home/semicolumn-img.png"
                    width={31}
                    height={27}
                    alt="semicolumn img"
                  />
                </div>
                <div className="flex items-center mt-5">
                  <Staricon />
                  <Staricon />
                  <Staricon />
                  <Staricon />
                  <Staricon />
                </div>
                <div className="mt-5">
                  <p className="text-[30px] font-normal text-black leading-[41px]">
                    Is be upon sang fond must shew. Really boy law county she
                    unable her sister. Feet you off its like like six. Among sex
                    are leave law built now.
                  </p>
                  <p className="text-[20px] mt-7 font-bold text-[#3671CA] leading-[30px]">
                    Jane Cooper
                  </p>
                  <p className="text-[16px] font-normal leading-6 text-[#231E62]">
                    Designer, Manager
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsAreSaying;
