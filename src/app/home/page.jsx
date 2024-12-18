'use client'

import React, {useState} from "react";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import HomeHeader from "@/components/uicomponents/HomePage/HomeHeader";
import HomeEmergency from "@/components/uicomponents/HomePage/HomeEmergency";
import HomeNgo from "@/components/uicomponents/HomePage/HomeNgo";
import HomeAdoption from "@/components/uicomponents/HomePage/HomeAdoption";
import AppSidebar from "@/components/uicomponents/Sidebar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("sidebar")) || false;
    }
    return false;
  });
  const handleToggle = (newState) => {
    setIsOpen(newState);
    localStorage.setItem("sidebar", JSON.stringify(newState));
  };

  return (
    <div className="relative z-30">
      <div className={`fixed z-40 `}>
        <AppSidebar onToggle={handleToggle}/>
      </div>
      <HomeNavbar />
      <HomeHeader />
      <HomeEmergency />
    </div>
  );
};

export default Home;
