const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  _id: {
    type: String,
  },
  appointments: [  
    {
      petName: { type: String, required: true },
      clinicName: { type: String, required: true },
      date: { type: String, required: true },
      reason: { type: String, required: true },
      approval: { type: String, required: true },
    }
  ],
  pets: [  
    {
      petName: { type: String, required: true },
      animal: { type: String, required: true },
      breed: { type: String, required: true },
      description: { type: String, required: true },
    }
  ],
  emergencyReports: [ 
    {
      advanceOptions: {
        methodOfContact: { type: String, required: true },
        shelterPref: { type: String, required: true },
      },
      reportDetails: {
        animal: { type: String, required: true },
        contact: { type: String, required: false },
        description: { type: String, required: true },
        location: { type: String, required: true },
        severity: { type: String, required: true },
      },
      scheduledPickup: {
        date: { type: String, required: true },
        time: { type: String, required: true },
      },
    }
  ],
});

const adoptionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  images: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "GridFSFile",
    required: true,
  },
  gender: { type: String, required: true },
  tags: { type: [String], required: false },
  location: { type: String, required: true },
  age: { type: String, required: false },
  healthStatus: { type: String, required: true },
  description: { type: String, required: false },
  urgency: { type: String, required: true },
});

// Models
const User = mongoose.models.User || mongoose.model("User", userSchema);
const Adoption = mongoose.models.Adoption || mongoose.model("Adoption", adoptionSchema);

module.exports = { User, Adoption };
