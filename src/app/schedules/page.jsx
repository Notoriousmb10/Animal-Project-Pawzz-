"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DogSchedule from "../../../public/DogSchedule.jpg";
import { Search } from "lucide-react";
import React from "react";
import DataTable from "../../components/uicomponents/Table";
import DropDown from "../../components/uicomponents/Select";
const Schedules = () => {
  const [petNames, setPetNames] = useState([]);
  useEffect(() => {
    const storedPetData = localStorage.getItem("petDetails");
    if (storedPetData) {
      const parsedData = JSON.parse(storedPetData);
      const names = parsedData
        .map((data) => {
          if (data.petName) {
            return { value: data.petName, label: data.petName };
          }
          return null;
        })
        .filter(Boolean);
      setPetNames(names);
    }
  }, []);

  const reasons = [
    { value: "Vaccination", label: "Vaccination" },
    { value: "Injury", label: "Injury" },
    { value: "Regular Checkup", label: "Regular Checkup" },
    { value: "Skin Issues", label: "Skin Issues" },
    { value: "Dental Care", label: "Dental Care" },
    { value: "Allergies", label: "Allergies" },
    { value: "Parasite Control", label: "Parasite Control" },
    { value: "Spaying/Neutering", label: "Spaying/Neutering" },
    { value: "Behavioral Issues", label: "Behavioral Issues" },
    { value: "Emergency Treatment", label: "Emergency Treatment" },
    { value: "Pregnancy Care", label: "Pregnancy Care" },
    { value: "Digestive Issues", label: "Digestive Issues" },
    { value: "Respiratory Problems", label: "Respiratory Problems" },
    { value: "Post-Surgery Follow-Up", label: "Post-Surgery Follow-Up" },
    { value: "Chronic Illness Management", label: "Chronic Illness Management" },
    { value: "Vaccination Update", label: "Vaccination Update" },
    { value: "Weight Management", label: "Weight Management" },
    { value: "Microchipping", label: "Microchipping" },
    { value: "Ear Infections", label: "Ear Infections" },
    { value: "Eye Problems", label: "Eye Problems" }
  ];
  


  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Create Appointment</h1>
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="bg-gray-200 p-6 flex flex-col md:flex-row gap-6 items-center justify-center rounded-[50]">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div>
              <label htmlFor="pet" className="block text-sm font-medium">
                Select Pet
              </label>
              <div className="w-full md:w-64 bg-white rounded-md">
                <DropDown
                  className="bg-white"
                  placeholder="Select a pet"
                  data={petNames}
                />
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium">
                Select Reason
              </label>
              <div className="w-full md:w-64 bg-white rounded-md">
                <DropDown
                  className="bg-white w-full md:w-64 focus:outline-none"
                  placeholder="Select a pet"
                  data={reasons}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative">
              <label
                htmlFor="search-clinic"
                className="block text-sm font-medium"
              >
                Search Nearby Clinics
              </label>
              <input
                type="text"
                id="search-clinic"
                placeholder="Value"
                className="w-full md:w-64 p-2 border  rounded-lg focus:outline-none"
              />
              <button className="absolute bottom-3 right-3  text-gray-600 ">
                <Search />
              </button>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full md:w-64 p-2 border rounded"
              />
            </div>
          </div>
        </div>
        <div
          className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-[50] relative cursor-pointer hover:opacity-50 transition-opacity z-10 bg-cover "
          style={{ backgroundImage: `url(${DogSchedule.src})` }}
          title="Create"
        >
          <span className="text-3xl  relative z-20 -bottom-14 right-9">Create</span>
        </div>
      </div>

      <p className="text-sm mt-4 text-gray-600">
        Time will be scheduled based on clinic's appointment schedules.
      </p>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mt-10 mb-6">Manage Schedules</h2>
        <div className="bg-gray-200 h-full rounded-lg max-w-[1000px] w-full p-2 flex justify-center items-center">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Schedules;
