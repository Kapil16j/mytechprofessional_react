import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="max-w-[1140px] mt-[90px] mx-auto px-3 xl:px-0 w-full">
        <div className="flex justify-between lg:flex-row flex-col items-center">
          <div className="lg:order-1 order-2 mt-5 sm:mt-10 lg:mt-">
            <img
              src="/img/home/why-choose-us.png"
              alt="why choose us "
              width={490}
              height={305}
            />
          </div>
          <div className="max-w-[520px] w-full lg:order-2 order-1">
            <h1 className="text-[30px] sm:text-[44px] font-bold leading-[34px] sm:leading-[48px] text-black">
              Why <span className=" about_us_color ">Choose Us</span>
            </h1>
            <p className="text-[16px] font-normal mt-5 text-black leading-[25px] ">
              Choose My Tech Professionals,for reliable and innovative IT solutions. With our
              experienced team and commitment to excellence, we deliver
              customized software development, web design, mobile app
              development, and cloud solutions. Let us help you harness the
              power of technology to drive your business forward.
            </p>
            <button className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]">
              Learn More
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
