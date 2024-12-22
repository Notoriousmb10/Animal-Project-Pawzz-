import React from "react";
import NormalButton from "@/components/uicomponents/NormalButton";
import { CalendarForm } from "@/components/uicomponents/Calendar";

const SchedulePickup = () => {
  const [schedulePickup, setSchedulePickup] = React.useState({
    date: "",
    time: "",
  });


  return (
    <div className="px-4 py-3 flex flex-col gap-4 justify-evenly">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
          Schedule Pickup
        </h1>

        <p className="font-bold text-left text-[12px]  flex items-center text-slate-400 ">
          Share your current location to help responders reach the site quickly.{" "}
          <br /> You can also manually add the location where the animal was
          found
        </p>
      </div>

      <div className="text-[16px] text-slate-500 flex flex-col gap-8">
        <h3 className="text-black">Choose when responders can arrive.</h3>
        <div className="max-w-[250px] flex flex-col gap-4 ">
          <CalendarForm label={"Schedule Date"} />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="time"
              className="block text-[16px] font-medium text-slate-500"
            >
              Select Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="mt-1  block w-full px-3 hover:bg-gray-100 cursor-pointer    py-2 border border-gray-300 h-9 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="text-[12px] text-red-500">
          <p>
            A rescue team will contact you shortly. Please remain available to
            guide them upon arrival.
          </p>
        </div>
        <div className="relative left-[380px] top-28">
          <NormalButton
            label={"Next"}
            className="text-[14px] rounded-[5] w-16 h-8"
          />
        </div>
      </div>
    </div>
  );
};
export default SchedulePickup;