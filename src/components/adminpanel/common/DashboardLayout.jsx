import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = ({ children, text }) => {
  const [items, setItems] = useState(false);
  return (
    <div className="flex gap-4 h-screen  overflow-hidden mx-auto">
      <div
        className={`w-[264px] z-30 max-lg:absolute overflow-auto  max-w-full  h-full ${
          items ? "left-0" : "left-[-105%]"
        }`}
      >
        <Sidebar />
      </div>
      <div className="w-full px-3  max-w-[1660px] h-full overflow-auto  bg-[#F6FAFF]">
        <DashboardHeader text={text} items={items} setItems={setItems} />

        <div className=" px-3 xl:px-[44px] h-[90%]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
