import Achievements from "@/components/uicomponents/LandingPage/Achievements";
import OurServices from "@/components/uicomponents/LandingPage/OurServices";
import Partnerships from "@/components/uicomponents/LandingPage/Patnerships";
import Header from "@/components/uicomponents/LandingPage/Header";
import Navbar from "@/components/uicomponents/LandingPage/NavBar";
import React from "react";

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Achievements/>
    <OurServices/>
    <Partnerships/>
    </>
  );
};

export default LandingPage;
