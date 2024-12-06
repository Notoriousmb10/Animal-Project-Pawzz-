export const fetchAppointments = async () => {
  const response = await fetch("/api/fetch-Appointments", {
    method: "GET",
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
  } else {
    console.error("Failed to fetch appointments: ", data);
  }
  return data;
};

export const fetchPets = async () => {
  const response = await fetch("/api/fetch-Pets", {
    method: "GET",
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
  } else {
    console.error("Failed to fetch pets: ", data);
  }
  return data;
};
