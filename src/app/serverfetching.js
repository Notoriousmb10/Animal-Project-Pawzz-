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

export const fetchPets = async (userId) => {
  const response = await fetch(`/api/fetch-Pets?userId=${userId}`, {
    method: "GET",
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    return data.pets;
  } else {
    console.error("Failed to fetch pets: ", data);
    return [];
  }
};

export const fetchAnimalForAdoption = async () => {
  const response = await fetch("/api/fetch-AnimalForAdoption", {
    method: "GET",
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
  } else {
    console.error("Failed to fetch animals for adoption: ", data);
  }
  return data;
};
