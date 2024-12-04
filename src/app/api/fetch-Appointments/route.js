const connectToDatabase = require("../../database");
const Appointment = require("../../model");


export const GET = async (req) => {
  if (req.method === "GET") {
    try {
      console.log("Connecting to database...");
      await connectToDatabase();
      console.log("Database connected.");

      const appointments = await Appointment.find();
      console.log("Appointments found:", appointments);

      return new Response(JSON.stringify(appointments), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
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
}