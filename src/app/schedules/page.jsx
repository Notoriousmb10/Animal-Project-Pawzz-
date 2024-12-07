"use client";

import React, { useState, useEffect } from "react";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import CreateAppointment from "../../components/uicomponents/SchedulePage/CreateAppointment";
import ManageAppointments from "../../components/uicomponents/SchedulePage/ManageAppointments";
import { fetchAppointments, fetchPets } from "../serverfetching";
const SchedulesPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [pets, setPets] = useState([]);

  const loadAppointments = async () => {
    const fetchedData = await fetchAppointments();
    const petDetails = await fetchPets();
    setAppointments(fetchedData);
    setPets(petDetails);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div>
      <HomeNavbar />
      <CreateAppointment loadAppointments={loadAppointments} loadPets={pets} />

      <ManageAppointments appointments={appointments} />
    </div>
  );
};

export default SchedulesPage;
