

import React from "react";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import HomeHeader from "@/components/uicomponents/HomePage/HomeHeader";
import HomeEmergency from "@/components/uicomponents/HomePage/HomeEmergency";
import HomeNgo from "@/components/uicomponents/HomePage/HomeNgo";
const Home = () => {
  
  return (
    <div className="">
      <HomeNavbar/>
      <HomeHeader/>
      <HomeEmergency/>
      <HomeNgo/>
    </div>
  );
};

export default Home;
