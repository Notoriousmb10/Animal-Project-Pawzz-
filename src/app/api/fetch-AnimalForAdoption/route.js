const connectToDatabase = require("../../database");
const { Adoption } = require("../../model");

export const GET = async (req, res) => {
  try {
    const adoption = await Adoption.find();
    return new Response(JSON.stringify(adoption), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
