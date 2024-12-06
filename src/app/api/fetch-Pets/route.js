const connectToDatabase = require("../../database");
const {Pet} = require("../../model");

export const GET = async (req) => {
  if (req.method === "GET") {
    try {
      await connectToDatabase();
      console.log("Database connected.");
      const pets = await Pet.find();
      return new Response(JSON.stringify(pets), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("Failed to fetch pets:", err);
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
