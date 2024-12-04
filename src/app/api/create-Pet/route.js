const connectToDatabase = require("../../database");
const Appointment = require("../../model");



export const POST = async (req) => {
    try{
        console.log("Connecting to database...");
        await connectToDatabase();
        console.log("Database connected.");

        const {photo, petName, animal, breed, description} = req.body;
        const newPet = new 
    }