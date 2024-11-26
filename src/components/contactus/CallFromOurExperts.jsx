import React from "react";
import ContactForm from "./ContactForm";
import {  Link } from "react-router-dom";

const CallFromOurExperts = () => {
  return (
    <div className="z-50">
      <div className="max-w-[1140px] z-[9999] mt-40 px-3 xl:px-0 mx-auto w-full">

      <h1 className="text-[30px] max-w-[644px] w-full mx-auto text-center sm:text-[44px]  font-bold leading-[34px] sm:leading-[60px] text-black">
          Book A Instant Call Back From
          <span className=" about_us_color ">Our Experts</span>
        </h1>

      <div className="py-[54px] rounded-[8px] px-3 xl:px-0 bg-white shadow-[0px_6px_29px_rgba(54,113,202,0.15)]">
      <div className="flex justify-between flex-col lg:flex-row max-w-[1036px] mx-auto items-center">
            <div className="flex h-[146px] justify-center lg:justify-start w-full lg:w-fit  items-center">
              <span className="mr-5"></span>
              <div>
                <p className="text-[16px] font-normal leading-6 text-black/60 ">
                  Mon to Sat: 9:00AM-6:00PM
                </p>
                <a
                  href="tel:+919999999999"
                  className="text-[20px] mt-2 hover:text-primary font-bold leading-[30px] text-black"
                >
                  +91 9999999999
                </a>
              </div>
            </div>
            <div className="flex h-[146px] lg:max-w-[351px] w-full justify-center lg:border-l border-y lg:border-y-0 lg:border-r border-black/20 mx-auto items-center">
              <span className="mr-5"></span>
              <div>
                <p className="text-[16px] font-normal leading-6 text-black/60 ">
                  Do you have a question?
                </p>
                <Link
                  href="/"
                  className="text-[20px] mt-2 hover:text-primary font-bold leading-[30px] text-black"
                >
                  mytechprofessionals.com
                </Link>
              </div>
            </div>
            <div className="flex h-[146px] justify-center lg:justify-start w-full lg:w-fit items-center">
              <span className="mr-5"></span>
              <div>
                <p className="text-[16px] font-normal leading-6 text-black/60 ">
                  Address
                </p>
                <Link
                  target="_blank"
                  href="https://goo.gl/maps/7K1CxoHWR5gFReo86"
                >
                  <p className="text-[16px] hover:text-primary mt-2 max-w-[250px]  font-bold leading-[20px] text-black">
                    SCO 73, xyz
                  </p>
                </Link>
              </div>
            </div>
          </div>
          </div>
        
        <div className="relative">
          {/* <div className="w-full mt-16 z-[-1]">
            <iframe
              className="z-[-1]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.1859767889057!2d75.72085147160695!3d29.146860179149012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912336103b3058b%3A0x72c31fc84a5cd632!2sokkcode!5e1!3m2!1sen!2sin!4v1685687262127!5m2!1sen!2sin"
              height="450"
              width="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
          <div
            className="max-w-[521px] w-full  z-[999] mt-10 rounded-[8px]
         shadow-[0px_6px_29px_rgba(54,113,202,0.15)] pt-5 sm:pt-[51px] pb-5 sm:pb-[35px] px-5 sm:px-[35px] "
          >
            <p className="font-bold leding-10 text-[36px] text-black">
              Book A Call
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallFromOurExperts;
