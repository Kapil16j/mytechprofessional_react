import { useRouter } from "next/router";
import React from "react";
import { PricingIcon } from "../common/icon";

const PricingHero = () => {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-[1140px] mx-auto w-full px-3 xl:px-0">
        <div className="flex justify-between flex-col lg:flex-row items-center">
          <div className="">
            <PricingIcon />
          </div>
          <div className="flex items-center lg:ml-3  flex-col lg:items-start mt-5 lg:mt-0">
            <p className="text-[35px] sm:text-[48px] leading-[56px]  font-bold  about_us_color  ">
              Pricing
            </p>
            <p className="text-[16px] font-normal leading-6 text-center lg:text-start text-black max-w-[512px]">
              For detailed pricing information regarding our services at
              My Tech Professionals, please contact us directly. We offer competitive pricing
              tailored to your specific requirements. Our team will work closely
              with you to understand your needs and provide a transparent and
              cost-effective pricing structure that fits your budget.
            </p>
            <button
              onClick={() => router.push("/contact-us")}
              className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]"
            >
              Contact Us
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

export default PricingHero;
