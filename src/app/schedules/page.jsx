"use client";

import React, { useState, useEffect } from "react";
import HomeNavbar from "@/components/uicomponents/HomePage/HomeNavbar";
import CreateAppointment from "../../components/uicomponents/SchedulePage/CreateAppointment";
import ManageAppointments from "../../components/uicomponents/SchedulePage/ManageAppointments";
import { fetchAppointments } from "../serverfetching";
const SchedulesPage = () => {
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const fetchedData = await fetchAppointments();
    setAppointments(fetchedData);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div>
      <HomeNavbar />
      <CreateAppointment loadAppointments={loadAppointments} />

      <ManageAppointments appointments={appointments} />
    </div>
  );
};

export default SchedulesPage;
