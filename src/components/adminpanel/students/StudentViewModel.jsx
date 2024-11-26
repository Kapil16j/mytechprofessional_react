import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Usericon } from "../common/Icon";
 ;

const StudentViewModel = ({ data }) => {
  const [fees, setFees] = useState("");
  console.log(data);
  const dateOfBirth = new Date(data.dob).toLocaleDateString("en-US");
  let [isOpen, setIsOpen] = useState(false);
  const courses = data.course[0];
  useEffect(() => {
    switch (courses) {
      case "frontend":
        setFees("1000");
        break;
      case "backend":
        setFees("2000");
        break;
      case "ui/ux":
        setFees("3000");
        break;
      case "mobileapp":
        setFees("4000");
        break;
      case "fullstack":
        setFees("5000");
        break;
    }
  }, []);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="w-10  justify-center h-10 flex items-center  rounded-[39px] bg-[#EDEDF0] "
        >
          <Usericon />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[99999999999]"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    Student Details
                  </Dialog.Title>
                  <div className="mt-2 max-h-[500px] pr-2 overflow-auto h-full flex flex-col gap-4">
                    <div className="flex justify-center">
                      <img
                        className="rounded-[50%] w-[150px] h-[150px] object-fit"
                        src={data.profilePhoto}
                        alt="Student img"
                      />
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Name
                      </p>
                      <p className="text-[18px] w-[250px] line-clamp-1 text-end font-semibold font-poppins leading-6">
                        {data?.firstName}
                        {data.lastName}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Parent Name
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {data?.fatherName}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Course Name
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {data?.course}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Email
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {data?.email}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Date of Birth
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {dateOfBirth}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Contact Number
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {data.contactNo}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Pin code
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {data.pincode}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Contact Number
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {data.contactNo}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        City
                      </p>
                      <p className="text-[18px] font-semibold font-poppins leading-6">
                        {data.city}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Address
                      </p>
                      <p className="text-[18px] w-[250px] line-clamp-1 text-end   font-semibold font-poppins leading-6">
                        {data.address}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Total Fees
                      </p>
                      <p className="text-[18px] w-[250px] line-clamp-1 text-end   font-semibold font-poppins leading-6">
                        {fees}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Paid Fees
                      </p>
                      <p className="text-[18px] w-[250px] line-clamp-1 text-end   font-semibold font-poppins leading-6">
                        {data.paymentAmount}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px] font-normal font-poppins leading-5">
                        Pending Fees
                      </p>
                      <p className="text-[18px] w-[250px] line-clamp-1 text-end   font-semibold font-poppins leading-6">
                        {fees - data.paymentAmount}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                      <p className="text-[16px]  font-normal font-poppins leading-5">
                        Fees Amount Received
                      </p>
                      <p className="text-[18px]  line-clamp-1 text-end   font-semibold font-poppins leading-6">
                        {data.paymentMethod}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      closeModal
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default StudentViewModel;
