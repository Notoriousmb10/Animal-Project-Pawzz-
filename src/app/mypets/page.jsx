"use client";
import React, { useEffect, useState } from "react";
import MyPets from "../../components/uicomponents/MyPetsPage/MyPets";
import AddPets from "../../components/uicomponents/MyPetsPage/AddPets";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
const MyPetsPage = () => {
  const [petArray, setPetArray] = useState([]);

  const addPet = (newPet) => {
    setPetArray((prev) => [...prev, newPet]);
  }

  return (
    <>
      <HomeNavbar />
      <AddPets addPet={addPet} />

      <MyPets petArray={petArray}/>
    </>
  );
};

export default MyPetsPage;
