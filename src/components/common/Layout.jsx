import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import GetTouchWithUs from "./GetTouchWithUs";
import { DownToUpLogo } from "./icon";
import {  Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    if (yOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        onClick={scrollToTop}
        className="animate-bounce  cursor-pointer z-[99999999999] fixed right-5 bottom-5"
      >
        <DownToUpLogo />
      </div>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
      {children}
      <GetTouchWithUs />
      <Footer />
    </>
  );
};

export default Layout;
