"use client";

import { useEffect, useState } from "react";
import { useDetailsStore } from "@/app/Store/useStore";
import { set } from "mongoose";
export default function GetLocation({ onLocationChange, label }) {
  const { details } = useDetailsStore();
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState("idle");

  const fetchLocation = ({}) => {
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
          onLocationChange(newLocation);
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

  useEffect(() => {
    setFetching("idle");
  }, []);

  return (
    <div className="text-center flex flex-row gap-4 justify-between ml-1">
      <h2 className="text-[14px] font-semibold mt-2">{label}n</h2>
      <div>
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
        {currentLocation.latitude && currentLocation.longitude && (
          <p className="text-[12px] mt-2">
            {details.reportDetails.location
              ? details.reportDetails.location
              : `Latitude: ${currentLocation.latitude} Longitude: ${currentLocation.longitude}`}
          </p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
