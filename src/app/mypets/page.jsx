"use client";
import MyPets from "../../components/uicomponents/MyPetsPage/MyPets";
import AddPets from "../../components/uicomponents/MyPetsPage/AddPets";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
const MyPetsPage = () => {
  return (
    <>
      <HomeNavbar />
      <AddPets/>

      <MyPets  />
    </>
  );
};

export default MyPetsPage;
