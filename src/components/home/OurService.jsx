import React from "react";
import { ourServiceData } from "../common/helper";
import {  Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurService = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed
    slidesToShow: 4, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Auto-play speed in ms
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="max-w-[1140px] px-3 xl:px-0 mx-auto w-full">
        <h1 className="text-[44px] text-center font-bold leading-[48px] text-black">
          Our <span className=" about_us_color ">Services</span>
        </h1>

        {/* Slider for Services */}
        <div className="pt-[75px]">
          <Slider {...settings}>
            {ourServiceData.map((item, index) => (
              <div key={index} className="px-3">
                <div className="max-w-[364px] mx-auto rounded-[18px] transition duration-300 ease-in-out group hover:bg-[linear-gradient(222.96deg,#231E62_2.41%,#3671CA_99.1%)] animation bg-white pt-[27px] shadow-[0px_6px_29px_rgba(54,113,202,0.12)] w-full">
                  <div className="mx-auto max-w-[207px] h-[208px] flex justify-end items-end">
                    {item.svg}
                  </div>
                  <div className="mt-2 sm:mt-[18px] px-3 sm:px-[29px] pb-8">
                    <h3 className="font-bold text-center leading-7  group-hover:text-white text-[20px] sm:text-[24px] text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] line-clamp-4 font-normal group-hover:text-white text-center leading-[25px] text-black">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-[50px] flex justify-center">
          <Link href="/our-services">
            <button className="text-[16px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[173px] bg-[#231E62] h-[49px] rounded-[10px]">
              View All Services
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 z-[-1] right-0">
        <img
          src="/img/home/ourservice-img.png"
          width={148}
          height={148}
          alt="our service img"
        />
      </div>
    </div>
  );
};

export default OurService;
