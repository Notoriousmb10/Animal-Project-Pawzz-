import React, { useState } from "react";
import DataTable from "./Table";
const ManageAppointments = ({ appointments }) => {
  return (
    <div className="w-full flex flex-col items-center mb-20 ">
      <h2 className="text-2xl font-bold mt-10 mb-6">Manage Schedules</h2>
      <div className=" h-full bg-[#f0f8ff] rounded-lg max-w-[1000px] w-full p-2 flex justify-center items-center">
        <DataTable data={appointments} />
      </div>
    </div>
  );
};

export default ManageAppointments;
