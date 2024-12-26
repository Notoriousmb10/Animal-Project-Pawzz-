"use client";

import React, { useState } from "react";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import HomeHeader from "@/components/uicomponents/HomePage/HomeHeader";
import HomeEmergency from "@/components/uicomponents/HomePage/HomeEmergency";
const Home = () => {
  return (
    <div className="relative z-30">
      <HomeNavbar />
      <HomeHeader />
      <HomeEmergency />
    </div>
  );
};

export default Home;
