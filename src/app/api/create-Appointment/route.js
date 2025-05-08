const connectToDatabase = require("../../database");
const { User } = require("../../model");

export const POST = async (req) => {
  if (req.method === "POST") {
    try {
      console.log("Connecting to database...");
      await connectToDatabase();
      console.log("Database connected.");

      const { petName, clinicName, date, reason, userId } = await req.json();

      if ((!petName || !clinicName || !date || !reason, !userId)) {
        console.error("Missing required fields");
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        );
      }
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found!");
      }

      const newAppointment = {
        petName,
        clinicName,
        date,
        reason,
        approval: "Pending",
      };

      User.appointments.push(newAppointment);

      await user.save();
      console.log("New appointment:", newAppointment);
      console.log("Appointment saved.");

      return new Response(
        JSON.stringify({ message: "Appointment created successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
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
