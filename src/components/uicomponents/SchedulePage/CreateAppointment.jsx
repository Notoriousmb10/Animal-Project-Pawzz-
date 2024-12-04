"use client";

import { useEffect, useState } from "react";
import DogSchedule from "../../../../public/DogSchedule.jpg";
import { Search } from "lucide-react";
import React from "react";
import DropDown from "../../../components/uicomponents/Select";
import { reasons } from "../../../app/dataArray";
const Schedules = ({loadAppointments}) => {
  const [petNames, setPetNames] = useState([]);
  const [petDetails, setPetDetails] = useState({
    petName: "",
    clinicName: "",
    date: "",
    reason: "",
  });
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

  useEffect(() => {
    console.log(petDetails);
  }, [petDetails]);

  const createAppointment = async () => {
    if (
      !petDetails.petName ||
      !petDetails.clinicName ||
      !petDetails.date ||
      !petDetails.reason
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      console.log(petDetails);
      const response = await fetch("/api/create-Appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petDetails),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setPetDetails({
          petName: "",
          clinicName: "",
          date: "",
          reason: "",
        });
        loadAppointments();
      } else {
        console.error("Failed to create appointment: ", data);
      }
    }
  };
  
  

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
                  onChange={(value) =>
                    setPetDetails({ ...petDetails, petName: value })
                  }
                  value={petDetails.petName}
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
                  onChange={(value) =>
                    setPetDetails({ ...petDetails, reason: value })
                  }
                  value={petDetails.reason}
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
                onChange={(e) =>
                  setPetDetails({ ...petDetails, clinicName: e.target.value })
                }
                value={petDetails.clinicName}
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
                onChange={(e) =>
                  setPetDetails({ ...petDetails, date: e.target.value })
                }
                value={petDetails.date}
              />
            </div>
          </div>
        </div>
        <div
          className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-[50] relative cursor-pointer hover:opacity-50 transition-opacity z-10 bg-cover "
          style={{ backgroundImage: `url(${DogSchedule.src})` }}
          title="Create"
          onClick={createAppointment}
        >
          <span className="text-3xl  relative z-20 -bottom-14 right-9">
            Create
          </span>
        </div>
      </div>

      <p className="text-sm mt-4 text-gray-600">
        Time will be scheduled based on clinic's appointment schedules.
      </p>
      
    </div>
  );
};

export default Schedules;
