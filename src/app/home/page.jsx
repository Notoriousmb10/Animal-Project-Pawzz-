

import React from "react";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import HomeHeader from "@/components/uicomponents/HomePage/HomeHeader";
import HomeEmergency from "@/components/uicomponents/HomePage/HomeEmergency";
import HomeNgo from "@/components/uicomponents/HomePage/HomeNgo";
import HomeAdoption from "@/components/uicomponents/HomePage/HomeAdoption";
const Home = () => {
  
  return (
    <div className="">
      
      <HomeNavbar/>
      <HomeHeader/>
      <HomeEmergency/>
      <HomeAdoption/>
      <HomeNgo/>
    </div>
  );
};

export default Home;
