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
  },
});

const emergencyReportSchema = new mongoose.Schema({
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
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

const EmergencyReport =
  mongoose.models.EmergencyReport ||
  mongoose.model("EmergencyReport", emergencyReportSchema);

module.exports = { Appointment, Pet, EmergencyReport };
