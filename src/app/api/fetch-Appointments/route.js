const connectToDatabase = require("../../database");
const {Appointment} = require("../../model");

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      console.log("Connecting to database...");
      await connectToDatabase();
      console.log("Database connected.");

      const appointments = await Appointment.find();
      console.log("Appointments found:", appointments);

      res.status(200).json(appointments);
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

module.exports = handler;