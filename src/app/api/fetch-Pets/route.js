const connectToDatabase = require("../../database");
const { User } = require("../../model");

export const config = {
  api: {
    bodyParser: false,
  },
};

export const GET = async (req) => {
  try {
    await connectToDatabase();
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    console.log(userId)
    if (!userId) {
      return new Response(JSON.stringify({ error: "User ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const pets = user.pets;

    console.log("Pets fetched successfully:", pets);
    return new Response(JSON.stringify({ pets }), {
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
};
