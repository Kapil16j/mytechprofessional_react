import React from "react";
import {
  FacebooksIcon,
  InstagramsIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "../common/icon";
import {  Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <div className="max-w-[943px] px-3 xl:px-0 mt-10 mx-auto w-full">
        <p className="text-[16px] font-normal text-center text-black leading-6">
          To get more information about pricing for our services at{" "}
          <Link href="/">
            <span className="font-bold hover:text-primary">My Tech Professionals</span>
          </Link>
          , please reach out to us directly. You can contact us via phone at{" "}
          <Link href="tel:+91999999999">
            <span className="font-bold hover:text-primary">999999999</span>
          </Link>{" "}
          or send an email to{" "}
          <Link href="mailto:okk@gmail.com">
            <span className="font-bold hover:text-primary">
            My_Tech_Professionals@gmail.com
            </span>{" "}
          </Link>
          . Our team will be happy to discuss your specific requirements and
          provide you with detailed pricing information based on your needs. We
          look forward to hearing from you and assisting you with your pricing
          inquiries.
        </p>
        <div className="flex items-center justify-center mt-16 space-x-6">
          <Link
            href="https://www.facebook.com/profile.php?id=100093188432982&mibextid=ZbWKwL"
            target="_blank"
          >
            <span className="w-[60px] h-[60px] rounded-[50%] border border-[#3671CA] hover:scale-110 flex items-center justify-center">
              <FacebooksIcon />
            </span>
          </Link>
          <Link href="https://wa.me/+919800003072" target="_blank">
            <span className="w-[60px] h-[60px] rounded-[50%] border border-[#3671CA] hover:scale-110 flex items-center justify-center">
              <WhatsAppIcon />
            </span>
          </Link>
          <Link href="https://www.instagram.com/okk_code/" target="_blank">
            <span className="w-[60px] h-[60px] rounded-[50%] border border-[#3671CA] hover:scale-110 flex items-center justify-center">
              <InstagramsIcon />
            </span>
          </Link>

          <Link href="https://t.me/+919800003072" target="_blank">
            <span className="w-[60px] h-[60px] rounded-[50%] border border-[#3671CA] hover:scale-110 flex items-center justify-center">
              <TelegramIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
