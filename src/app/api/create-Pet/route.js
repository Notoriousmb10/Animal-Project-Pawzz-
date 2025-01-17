const connectToDatabase = require("../../database");
const { User } = require("../../model");

export const POST = async (req) => {
  console.log("Received a request to add a new pet.");

  try {
    await connectToDatabase();
    console.log("Database connection established successfully.");

    const { petName, animal, breed, description, userId } = await req.json();
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found!");
    }

    const newPet = new Pet({ petName, animal, breed, description });
    User.pets.push(newPet);
    await user.save();
    console.log("New pet added successfully:", newPet);

    return new Response(JSON.stringify({ message: "Pet added successfully" }), {
      status: 201, // Changed to 201 for resource creation
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error occurred while adding a new pet:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
