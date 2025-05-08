import React, {useEffect} from "react";
import NormalButton from "@/components/uicomponents/NormalButton";
import { CalendarForm } from "@/components/uicomponents/Calendar";
import { useDetailsStore } from "@/app/Store/useStore";
import { format, parseISO } from "date-fns";
import { useProgressStore } from "@/app/Store/useStore";
const SchedulePickup = () => {
  const { setProgress } = useProgressStore();
  const { details, setDetails } = useDetailsStore();
  const handleDateChange = (date) => {
    setDetails({
      scheduledPickup: {
        ...details.scheduledPickup,
        date: format(date, "PPP"),
      },
    });
  };

  useEffect(() => {
      setProgress(75);
    }, [setProgress]);

  const handleNavigation = async () => {
    if (
      details.scheduledPickup.date !== "" ||
      details.scheduledPickup.time !== ""
    ) {
      sessionStorage.setItem("selectedTab", "Advance Options");
      window.location.reload()
      setProgress(90);
    } else {
      alert("Please fill in the date and time for the pickup");
    }
  };
  

  return (
    <>
      <div className="px-4 py-3 flex flex-col gap-4 justify-evenly">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-sm font-medium text-left flex items-center gap-2 ">
            Schedule Pickup
          </h1>

          <p className="font-bold text-left text-[12px]  flex items-center text-slate-400 ">
            Share your current location to help responders reach the site
            quickly. <br /> You can also manually add the location where the
            animal was found
          </p>
        </div>

        <div className="text-[16px] text-slate-500 flex flex-col gap-8">
          <h3 className="text-black">Choose when responders can arrive.</h3>
          <div className="max-w-[250px] flex flex-col gap-4 ">
            <CalendarForm
              label={"Schedule Date"}
              onDateChange={handleDateChange}
              
            />
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
                onChange={(e) =>
                  setDetails({
                    scheduledPickup: {
                      ...details.scheduledPickup,
                      time: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="text-[12px] text-red-500">
            <p>
              A rescue team will contact you shortly. Please remain available to
              guide them upon arrival.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-14 right-[360px] ">
        <NormalButton
          label={"Next"}
          className="text-[14px] rounded-[5] w-16 hover:bg-blue-400 h-8 bg-blue-500"
          onClick={handleNavigation}
        />
      </div>
    </>
  );
};
export default SchedulePickup;
