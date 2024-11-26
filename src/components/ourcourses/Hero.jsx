import React from "react";

const Hero = ({ title }) => {
  return (
  
    <div className=" bg-center bg-origin-content bg-no-repeat xl:h-[650px] h-[500px] w-full bg-cover">
      <div className="max-w-[1140px] h-full flex flex-col justify-center items-center mx-auto px-3 xl:px-0">
        <h1 className="font-extrabold leading-[44px] sm:leading-[70px] max-w-[636px] text-center text-[40px] sm:text-[63px] text-black">
          {title.coursetitle}
        </h1>
        <p className="text-[16px] mt-5 font-bold leading-[30px] text-black">
          <span className="text-black/60 font-normal"> Home</span> /{" "}
          {title.coursetitle}
        </p>
        <p className="text-base text-center max-w-[750px] mx-auto  font-normal mt-3 text-black leading-6 ">
          {title.coursedescription}
        </p>
      </div>
    </div>
  );
};

export default Hero;
