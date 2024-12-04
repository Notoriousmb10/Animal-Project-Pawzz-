const connectToDatabase = require("../../database");
const Appointment = require("../../model");

export const POST = async (req) => {
  if (req.method === "POST") {
    try {
      console.log("Connecting to database...");
      await connectToDatabase();
      console.log("Database connected.");

      const { petName, clinicName, date, reason } = await req.json();
      console.log("Request payload:", { petName, clinicName, date, reason });

      if (!petName || !clinicName || !date || !reason) {
        console.error("Missing required fields");
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const newAppointment = new Appointment({
        petName,
        clinicName,
        date,
        reason,
        approval: "Pending",
      });

      await newAppointment.save();
      console.log("New appointment:", newAppointment);
      console.log("Appointment saved.");

      return new Response(
        JSON.stringify({ message: "Appointment created successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      console.error("Failed to create appointment:", err);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }
};