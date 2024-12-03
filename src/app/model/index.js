const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  clinicName: { type: String, required: true },
  date: { type: String, required: true },
  reason: { type: String, required: true },
});

const appointment = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema);

module.exports = appointment;
