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

const adoptionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  gender: { type: String, required: true },
  tags: { type: [String], required: true },
  location: { type: String, required: true },
  age: { type: String, required: true },
  healthStatus: { type: String, required: true },
  description: { type: String, required: true },
  urgency: { type: String, required: true },
});

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

const EmergencyReport =
  mongoose.models.EmergencyReport ||
  mongoose.model("EmergencyReport", emergencyReportSchema);

const Adoption =
  mongoose.models.Adoption || mongoose.model("Adoption", adoptionSchema);

module.exports = { Appointment, Pet, EmergencyReport, Adoption };
