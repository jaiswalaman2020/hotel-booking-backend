const mongoose = require("mongoose");
const validator = require("validator");

const guestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  nationality: {
    type: String,
    required: [true, "Please enter your nationallity"],
  },
  countryFlag: {
    type: String,
    required: [true, "Please enter your country flag"],
  },
  nationalID: {
    type: String,
    required: [true, "Please enter your national ID"],
  },
});

const Guests = mongoose.model("Guests", guestSchema);
module.exports = Guests;
