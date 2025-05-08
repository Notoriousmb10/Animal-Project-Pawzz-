"use client";
import React, { useState, useEffect } from "react";
import MyPets from "../../components/uicomponents/MyPetsPage/MyPets";
import AddPets from "../../components/uicomponents/MyPetsPage/AddPets";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import { fetchPets } from "../serverfetching";
import DogFallBack from "../../../public/DogFallBack.jpg";
import { useUserStore } from "../Store/useStore";
import { useUser } from "@auth0/nextjs-auth0/client";

const MyPetsPage = () => {
  const { user } = useUser();
  const [pets, setPets] = useState([]);
  const { userId, setUser } = useUserStore();

  useEffect(() => {
    const loadUserId = async () => {
      setUser(user.sub);
    };
    loadUserId();
  }, [user, setUser]);

  const loadPets = async () => {
    const petDetails = await fetchPets(userId);
    console.log(petDetails);
    const petArray = petDetails.map((pet) => {
      const photo = sessionStorage.getItem(`${pet.petName}`);
      console.log(`Pet Name: ${pet.petName}, Photo: ${photo}`);

      return {
        ...pet,
        photo: photo ? JSON.parse(photo) : DogFallBack.src,
      };
    });
    setPets(petArray);
  };

  useEffect(() => {
    loadPets();
  }, [loadPets]);

  return (
    <>
      <HomeNavbar />
      <AddPets loadPets={loadPets} />
      <MyPets myPets={pets} />
    </>
  );
};

export default MyPetsPage;
