import {  Link } from "react-router-dom";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const whatsappMessage = `Hi, I'm ${formData.name}. My email is ${formData.email}, my phone number is ${formData.phone}, and my message is: ${formData.message}`;
    const whatsappLink = `https://wa.me/+91999999999?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect the user to the WhatsApp message link
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="z-[999]">
        <div className="mt-[42px]">
          <input
            placeholder="Name"
            className="max-w-[432px] outline-none z-50 w-full border rounded-[8px] h-[61px] p-5"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6">
          <input
            placeholder="Email"
            className="max-w-[432px] outline-none z-50 w-full border rounded-[8px] h-[61px] p-5"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6">
          <input
            placeholder="Mobile Number"
            className="max-w-[432px] outline-none z-50 w-full border rounded-[8px] h-[61px] p-5"
            type="Mobile Number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6">
          <textarea
            className="max-w-[432px] outline-none z-50 w-full border rounded-[8px] h-[61px] p-5"
            id="Message"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]"
        >
          Submit
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </form>
      <div className="mt-[27px]">
        <p className="max-w-[432px] outline-none z-50 w-full text-[16px] font-normal text-black">
          Your information is kept private. By clicking &quot;Submit&quot;, you
          agree to our{" "}
          <Link
            className="text-[#3671CA] hover:text-black"
            href="/terms&conditions"
          >
            <u>Terms of services</u>
          </Link>{" "}
          and{" "}
          <Link
            className="text-[#3671CA]  hover:text-black"
            href="/privacypolicy"
          >
            <u>Privacy Policy.</u>
          </Link>
        </p>
      </div>
    </>
  );
};

export default ContactForm;
