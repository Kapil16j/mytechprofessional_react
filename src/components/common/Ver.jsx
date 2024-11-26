 ;
import React, { useState } from "react";
import PDF from "../certificate/PDF";

const Ver = () => {
  const data = [
    {
      name: "Dinesh",
      courseName: "Front-End Developer",
      startDate: "2023-07-03",
      endDate: "2024-01-03",
      certId: "OC-20230703-FE002",
    },
    {
      name: "Narpat Singh",
      courseName: "Front-End Developer",
      startDate: "2023-07-03",
      endDate: "2024-01-03",
      certId: "OC-20230703-FE001",
    },
    {
      name: "Kanwal",
      courseName: "Front-End Developer",
      startDate: "2023-07-13",
      endDate: "2024-01-13",
      certId: "OC-20230713-FE003",
    },
    {
      name: "Ankit",
      courseName: "Front-End Developer",
      startDate: "2023-06-26",
      endDate: "2023-12-26",
      certId: "OC-20230626-FE004",
    },
    {
      name: "Ankit",
      courseName: "Front-End Developer",
      startDate: "2023-06-26",
      endDate: "2023-12-26",
      certId: "OC-20230626-FE004",
    },
    {
      name: "Sourabh",
      courseName: "Front-End Developer",
      startDate: "2023-06-24",
      endDate: "2023-12-24",
      certId: "OC-20230624-FE005",
    },
    {
      name: "Akshay",
      courseName: "Front-End Developer",
      startDate: "2023-07-03",
      endDate: "2024-01-03",
      certId: "OC-20230703-FE006",
    },
    {
      name: "Hitesh",
      courseName: "Front-End Developer",
      startDate: "2023-07-13",
      endDate: "2024-01-13",
      certId: "OC-20230713-FE007",
    },
    {
      name: "Alka Verma",
      courseName: "UI/UX Designer",
      startDate: "2023-06-05",
      endDate: "2023-12-05",
      certId: "OC-20230605-UID002",
    },
    {
      name: "Ankush",
      courseName: "UI/UX Designer",
      startDate: "2023-06-05",
      endDate: "2023-12-05",
      certId: "OC-20230605-UID003",
    },
    {
      name: "Preeti",
      courseName: "UI/UX Designer",
      startDate: "2023-06-05",
      endDate: "2023-12-05",
      certId: "OC-20230605-UID001",
    },
    {
      name: "Komal",
      courseName: "PYTHON",
      startDate: "2023-08-23",
      endDate: "2023-11-30",
      certId: "OC-20230823-BE001",
    },
    {
      name: "Sahil",
      courseName: "Back-End Development",
      startDate: "2023-07-10",
      endDate: "2024-01-10",
      certId: "OC-20230710-BE002",
    },
  ];

  const [formData, setFormData] = useState({ name: "", certId: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = data.find(
      (item) =>
        item.name.toLowerCase() === formData.name.toLowerCase() &&
        item.certId === formData.certId
    );
    setResult(found);
  };

  return (
    <div>
      <div className="bg-[#FBFCFF] mt-5 sm:mt-20 md:mt-[150px]">
        <div className="max-w-[1136px] w-full mx-auto">
          <div className="flex max-lg:flex-col items-center gap-[57px]">
            <div className="max-w-[582px] w-full bg-white rounded-[32px] max-xl:px-3 px-[75px] pt-[45px] pb-[61px] max-md:pb-[45px] shadow-[rgba(0,0,0,0.07)] shadow-[-10px_0px_31.3px_0px]">
              <form
                className="flex flex-col items-center w-full mx-auto"
                onSubmit={handleSubmit}
              >
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="max-w-[432px] max-md:h-[40px] font-Poppins w-full rounded-lg border-[1px] border-[rgba(0,0,0,0.20)] h-[61px] px-[21px] placeholder:opacity-[0.6] outline-none"
                  placeholder="Full Name"
                />
                <input
                  required
                  type="text"
                  name="certId"
                  value={formData.certId}
                  onChange={handleChange}
                  className="max-w-[432px] max-md:h-[40px] font-Poppins w-full rounded-lg border-[1px] border-[rgba(0,0,0,0.20)] h-[61px] px-[21px] placeholder:opacity-[0.6] outline-none mt-[29px]"
                  placeholder="Certificate Id"
                />
                <button
                  type="submit"
                  className="max-md:mt-[29px] mt-[48px] py-3 px-12 bg-[#3671CA] shadow-[0px_2px_14px_0px_rgba(60,124,221,0.38)] text-white font-Poppins text-[16px] font-normal leading-[24px] border-[2px] border-[#3671CA] hover:bg-white hover:text-[#3671CA] duration-300 rounded-[100px]"
                >
                  Search
                </button>
              </form>
            </div>

            <img
              src="/img/student/verified.png"
              alt="verify-image"
              width={496}
              height={483}
            />
          </div>
        </div>
      </div>
      {result && (
        <div className="mt-10">
          <PDF
            certId={result.certId}
            name={result.name}
            courseName={result.courseName}
            startDate={result.startDate}
            endDate={result.endDate}
          />
        </div>
      )}
    </div>
  );
};

export default Ver;
