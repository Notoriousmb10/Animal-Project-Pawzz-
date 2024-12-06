const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  clinicName: { type: String, required: true },
  date: { type: String, required: true },
  reason: { type: String, required: true },
  approval: { type: String, required: true },
});


const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  animal: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

module.exports = { Appointment, Pet };
