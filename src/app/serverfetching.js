





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