"use client";

import React, { useState } from "react";
import Image from "next/image";
import { successStories, upForAdoptions } from "../dataArray";
import { browseAnimalSections, adoptedPets } from "@/app/dataArray";
import NormalButton from "@/components/uicomponents/NormalButton";
import AdoptedPets from "@/components/uicomponents/BrowseAnimals/AdoptedPets";
import Adoption from "@/components/uicomponents/BrowseAnimals/Adoption";
import SuccessStories from "@/components/uicomponents/BrowseAnimals/SuccessStories";
import AdoptionSidebar from "@/components/uicomponents/BrowseAnimals/AdoptionSidebar";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
const page = () => {
  const [selectedTab, setSelectedTab] = useState("Adoptions");

  return (
    <>
      <HomeNavbar />
      <div className="mx-20 my-10 flex flex-col gap-24">
        <SuccessStories />
        <div className="flex flex-row gap-12 border-2 p-6 rounded-lg">
          <div className="sticky top-0">
            <AdoptionSidebar currentTab={(value) => setSelectedTab(value)} />
          </div>
          <div>
            {selectedTab === "Adoptions" && <Adoption />}
            {selectedTab === "Adopted" && <AdoptedPets />}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
