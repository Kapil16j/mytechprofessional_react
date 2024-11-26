import React, { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";
import {
  getStudentDataForCertificate,
  createCertificateForStudent,
} from "@/services/Url.service";

const Certificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      getStudentDataAndGenerateCertificate();
    }
  }, [id]);

  const getStudentDataAndGenerateCertificate = async () => {
    try {
      const response = await axios.get(`${getStudentDataForCertificate}${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
      if (response.data.success) {
        const data = response.data.studentData;
        // setCourse(data.course);
        setName(data.name);
        const courseOptionLabel = getCourseOptionLabel(data.course[0]);
        setCourse(courseOptionLabel);
        setCertificateId(data.certificateId);
        setStartDateAndEndDate(data.startDate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setStartDateAndEndDate = (newStartDate) => {
    const startDateFormat = new Date(newStartDate);
    let endDateFormat = new Date(startDateFormat);

    // Check if the course includes "fullstack" in the array
    console.log("course: ", course);
    if (course.includes("FullStack Development")) {
      // Set end date to 1 year later
      endDateFormat.setFullYear(startDateFormat.getFullYear() + 1);
    } else {
      // Set end date to 6 months later
      endDateFormat.setMonth(startDateFormat.getMonth() + 6);
    }

    const endFormattedDate = endDateFormat.toISOString().split("T")[0];

    setStartDate(newStartDate);
    setEndDate(endFormattedDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const startFormatedDate = startDate.split("T")[0];
      const endFormatedDate = endDate.split("T")[0];
      console.log("startFormatedDate: ", startFormatedDate);
      console.log("endFormatedDate: ", endFormatedDate);

      if (!certificateId || !name || !startDate || !endDate || !course) {
        return toast.error("Please fill all the fields");
      }

      const startDateFormat = new Date(startDate);
      const endDateFormat = new Date(endDate);
      // Calculate the difference in milliseconds
      const dateDifference = endDateFormat - startDateFormat;

      // Calculate the difference in months
      const monthsDifference = dateDifference / (1000 * 60 * 60 * 24 * 30);

      // Check if the difference is at least 6 months
      if (monthsDifference < 6) {
        return toast.error(
          "The difference between start and end dates must be at least 6 months"
        );
      }

      const certificateData = {
        certificateId,
        name,
        startDate: startFormatedDate,
        endDate: endFormatedDate,
        courseName: course,
      };
      const response = await axios.post(
        `${createCertificateForStudent}${id}`,
        certificateData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response: ", response);
      if (response.data.success) {
        console.log("Certificate created successfully");
        toast.info(response.data.message);
        setCertificateId("");
        setName("");
        setStartDate("");
        setEndDate("");
        setCourse("");
        router.push("/admin/student/list");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    setCertificateId("");
    setName("");
    setStartDate("");
    setEndDate("");
    setCourse("");
  };
  const getCourseOptionLabel = (courseValue) => {
    switch (courseValue) {
      case "backend":
        return "Backend Development";
      case "frontend":
        return "Frontend Development";
      case "ui/ux":
        return "UI/UX Development";
      case "mobile":
        return "Mobile App Development";
      case "fullstack":
        return "FullStack Development";
      default:
        return "";
    }
  };
  return (
    <div>
      <div className="max-w-[1660px] w-full h-full py-10 px-4 lg:p-[100px] overflow-auto  ">
        <div className="lg:flex justify-between gap-[20px] ">
          <div className="w-full">
            <div className="lg:max-w-[600px] w-full border border-[#152B4D] pt-[17px] pb-[14px] pl-[26px]   rounded-[8px]  relative ">
              <input
                className="lg:max-w-[690px] w-full outline-none"
                type="text"
                placeholder="0123456789"
                id="certificateId"
                name="certificateId"
                value={certificateId}
                disabled
                onChange={(e) => setCertificateId(e.target.value)}
              />
              <div className="w-fit px-2  text-[16px] font-[500] text-[#152B4D] bg-[white] absolute top-[-14px]  flex items-center">
                Certificate ID
              </div>
            </div>
            <div className="lg:max-w-[600px] h-[60px] w-full border border-[#152B4D] pt-[17px] pb-[14px] pl-[26px]  mt-10 lg:mt-[88px]  rounded-[8px]  relative ">
              <select
                name="course"
                id="course"
                value={course}
                disabled
                onChange={(e) => setCourse(e.target.value)}
                className="lg:max-w-[690px] w-full  outline-none pe-4"
              >
                <option value="UI/UX Development">UI/UX Development</option>
                <option value="Frontend Development">
                  Front-end Development
                </option>
                <option value="Backend Development">Backend Development</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="FullStack Development">
                  FullStack Development
                </option>
              </select>
              <div className="w-fit px-2 text-[16px] font-[500] text-[#152B4D] bg-[white] absolute top-[-14px]  flex items-center  pe-4">
                Course Name
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className=" w-full border border-[#152B4D] pt-[17px] pb-[14px] pl-[26px]  max-lg:mt-10 rounded-[8px]  relative ">
              <input
                className="max-w-[690px] w-full outline-none"
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              <div className="w-fit px-2  text-[16px] font-[500] text-[#152B4D] bg-[white] absolute top-[-14px]  flex items-center">
                Name
              </div>
            </div>
            <div className="flex max-sm:flex-col gap-y-8  w-full justify-between mt-10 lg:mt-[88px] gap-x-4">
              <div className="sm:max-w-[294px] w-full border border-[#152B4D] pt-[17px] pb-[14px] pl-[26px]   rounded-[8px]  relative ">
                <input
                  className="sm:max-w-[294px] w-full outline-none pe-4"
                  type="Date"
                  id="startDate"
                  name="startDate"
                  value={startDate}
                  // onChange={(e) => setStartDate(e.target.value)}
                  onChange={(e) => setStartDateAndEndDate(e.target.value)}
                  placeholder="01/06/2023"
                />
                <div className="w-fit px-2  text-[16px] font-[500] text-[#152B4D] bg-[white] absolute top-[-14px]  flex items-center">
                  Start Date
                </div>
              </div>
              <div className="sm:max-w-[294px] w-full  border border-[#152B4D] pt-[17px] pb-[14px] pl-[26px]   rounded-[8px]  relative ">
                <input
                  className="sm:max-w-[294px] w-full outline-none  pe-4"
                  type="date"
                  id="endDate"
                  name="endDate"
                  disabled
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="01/12/2023"
                />
                <div className="w-fit px-2  text-[16px] font-[500] text-[#152B4D] bg-[white] absolute top-[-14px]  flex items-center">
                  End Date
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-[50px]  pl-[20px] justify-end mt-[69px] lg:mt-[202px] max-w-[1480px]  gap-[15px] pr-[20px] ">
          <button
            onClick={handleSubmit}
            className="w-[139px]  !rounded-[8px] h-[50px]  bg-[#E6EBEE] hover:bg-[#152B4D]  text-[black] hover:text-[white] text-center"
          >
            SAVE
          </button>

          <button
            onClick={handleCancel}
            className="w-[139px]  !rounded-[8px] h-[50px]  bg-[#E6EBEE] hover:bg-[#152B4D]  hover:text-[white] text-[black] text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
