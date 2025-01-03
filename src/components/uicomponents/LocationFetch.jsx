"use client";

import { useEffect, useState } from "react";
import { useDetailsStore } from "@/app/Store/useStore";
import { toast } from "sonner";
export default function GetLocation({ onLocationChange, label }) {
  const { details } = useDetailsStore();
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState("idle");

  const fetchLocation = () => {
    setFetching("fetching");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          setCurrentLocation(newLocation);
          setFetching("fetched");
          setError("");
          onLocationChange(newLocation) 
          Sonner(newLocation.latitude, newLocation.longitude);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("Permission denied. Please allow location access.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            default:
              setError("An unknown error occurred.");
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const Sonner = async (latitude, longitude) => {
    if (latitude === null || longitude === null) {
      toast("Location Not Fetched :(", {
        className: "bg-Yellow-500",
        description: `Try Again`,
        action: {
          label: "Okay",
          onClick: () => console.log("Okay"),
        },
      });
    } else {
      toast("Location Fetched", {
        className: "bg-green-500",
        description: `lat: ${latitude}, long: ${longitude}`,
        action: {
          label: "Okay",
          onClick: () => console.log("Okay"),
        },
      });
    }
  };

  useEffect(() => {
    setFetching("idle");
  }, []);

  return (
    <div className="text-center flex flex-row gap-4 justify-between">
      <h2 className="text-[14px] font-semibold mt-2">{label}</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={fetchLocation}
          className={`border rounded-[10]  h-8 text-[12px] p-2 ${
            fetching === "fetching"
              ? "bg-yellow-200"
              : fetching === "fetched"
              ? "bg-green-200"
              : "bg-[#F5F5F5]"
          }`}
        >
          Get Location
        </button>
        <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      </div>
      
    </div>
  );
}
