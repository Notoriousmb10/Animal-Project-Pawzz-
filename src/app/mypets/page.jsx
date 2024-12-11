"use client";
import React, { useState, useEffect } from "react";
import MyPets from "../../components/uicomponents/MyPetsPage/MyPets";
import AddPets from "../../components/uicomponents/MyPetsPage/AddPets";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import { fetchPets } from "../serverfetching";
import DogFallBack from '../../../public/DogFallBack.jpg'
const MyPetsPage = () => {
  const [pets, setPets] = useState([]);

  const loadPets = async () => {
    const petDetails = await fetchPets();
    console.log(petDetails); // Log the pet details
    const petArray = petDetails.map((pet) => {
      const photo = localStorage.getItem(`${pet.petName}`);
      console.log(`Pet Name: ${pet.petName}, Photo: ${photo}`); // Log the photo

      return{
        ...pet, 
        photo: photo ? JSON.parse(photo): DogFallBack.src,
      }
    });
    setPets(petArray);
  };

  useEffect(() => {
    loadPets();
  }, []);
  return (
    <>
      <HomeNavbar />
      <AddPets loadPets={loadPets} />

      <MyPets myPets={pets} />
    </>
  );
};

export default MyPetsPage;
