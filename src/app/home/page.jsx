'use client'

import React, {useState} from "react";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import HomeHeader from "@/components/uicomponents/HomePage/HomeHeader";
import HomeEmergency from "@/components/uicomponents/HomePage/HomeEmergency";
import HomeNgo from "@/components/uicomponents/HomePage/HomeNgo";
import HomeAdoption from "@/components/uicomponents/HomePage/HomeAdoption";
import AppSidebar from "@/components/uicomponents/Sidebar";
import useSidebarStore from "../Store/useStore";
const Home = () => {
  
  const {isOpen} = useSidebarStore();

  return (
    <div className="relative z-30">
     
      <HomeNavbar />
      <HomeHeader />
      <HomeEmergency />
    </div>
  );
};

export default Home;
