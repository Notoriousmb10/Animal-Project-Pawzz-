const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

module.exports = connectToDatabase;
