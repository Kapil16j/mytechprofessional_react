import React from "react";

const Hero = ({ title }) => {
  return (
   
    <div className="bg-center bg-origin-content bg-no-repeat  h-[480px] w-full bg-cover">
      <div className="max-w-[1140px] h-full flex flex-col justify-center items-center mx-auto px-3 xl:px-0">
        <h1 className="font-extrabold leading-[44px] sm:leading-[70px] text-[40px] sm:text-[63px] text-black">
          {title}
        </h1>
        <h2 className="text-[16px] mt-5 font-bold leading-[30px] text-blaCK">
          <span className="text-black/60 font-normal"> Home</span> / {title}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
