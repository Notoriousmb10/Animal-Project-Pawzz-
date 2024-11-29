"use client";
import React, { useState } from "react";
import MyPets from "../../components/uicomponents/MyPetsPage/MyPets";
import AddPets from "../../components/uicomponents/MyPetsPage/AddPets";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
const MyPetsPage = () => {
  const [petList, setPetList] = useState([]);
  const addPet = (newPet) => {
    setPetList((prevList) => [...prevList, newPet]);
  };
  return (
    <>
    <HomeNavbar/>
      <AddPets  addPet={addPet} />
      <MyPets petList={petList}/>
    </>
  );
};

export default MyPetsPage;
