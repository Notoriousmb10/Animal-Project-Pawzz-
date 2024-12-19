"use client";

import { useState } from "react";

export default function GetLocation({ onLocationChange }) {
  const [currentLocation, setCurrentLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState("");

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setCurrentLocation(newLocation);
          setError("");
          onLocationChange(newLocation); // Call the callback with the new location
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

  return (
    <div className="text-center flex flex-row gap-4 justify-between ml-1">
      <h2 className="text-[12px] mt-2">Fetch Your Current Location</h2>
      <div>
        <button onClick={fetchLocation} className="border rounded-[10] bg-[#F5F5F5] h-8" style={{ padding: "10px 20px" }}>
          Get Location
        </button>
        {currentLocation.latitude && currentLocation.longitude && (
          <p className="text-[12px] mt-2">
            Latitude: {currentLocation.latitude} <br /> Longitude: {currentLocation.longitude}
          </p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}