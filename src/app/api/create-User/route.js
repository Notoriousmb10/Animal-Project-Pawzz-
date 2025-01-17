const connectToDatabase = require("../../database");
const { User } = require("../../model");
const { NextResponse } = require("next/server");

export const POST = async (req) => {
  try {
    await connectToDatabase();
    const { user } = await req.json();
    console.log("User:", user);
    if (!user) {
      console.error("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const loggedInUser = {
      name: user.given_name,
      email: user.email,
      _id: user.sub,
    };
    const newUser = new User(loggedInUser);
    await newUser.save();
  } catch (err) {
    console.error("Failed to create User:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
