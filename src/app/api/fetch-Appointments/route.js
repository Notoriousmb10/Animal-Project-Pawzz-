const connectToDatabase = require("../../database");
const { Appointment } = require("../../model");
export const GET = async (req, res) => {
  if (req.method === "GET") {
    try {
      console.log("Connecting to database...");
      await connectToDatabase();
      console.log("Database connected.");

      const appointments = await Appointment.find();
      console.log("Appointments found:", appointments);

      console.log("Response object:", res); // Debug log
      return new Response(JSON.stringify(appointments), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
      console.log("Response object:", res); // Debug log
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }
};
