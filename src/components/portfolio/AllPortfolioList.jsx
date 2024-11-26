import React, { useState } from "react";
import PortifolioSidebar from "./PortfolioSidebar";
import PortifolioCard from "./PortfolioCard";

const AllPortfolioList = () => {
  const [active, setActive] = useState("All Portofolio");

  return (
    <div className="mt-10 max-w-[1140px] w-full mx-auto px-3 xl:px-0">
      <PortifolioSidebar active={active} setActive={setActive} />
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />

        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
        <PortifolioCard />
      </div>
    </div>
  );
};

export default AllPortfolioList;
