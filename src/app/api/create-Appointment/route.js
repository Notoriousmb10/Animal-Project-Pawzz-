const { connectToDatabase } = require("../../database");
const { appointment } = require("../../model");

export const POST = async (req) => {
  if (req.method === "POST") {
    try {
      await connectToDatabase();
      const { petName, clinicName, date, reason } = await req.json();
      const newAppointment = new appointment({
        petName,
        clinicName,
        date,
        reason,
      });


      console.log(newAppointment);
      await newAppointment.save();
      return new Response(
        JSON.stringify({ message: "Appointment created successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );


    } catch (err) {
      console.error("Failed to create appointment: ", err);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }


  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};
