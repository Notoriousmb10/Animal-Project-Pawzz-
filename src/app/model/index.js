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


const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
