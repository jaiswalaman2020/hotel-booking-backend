const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    minBookinglength: Number,
    maxBookinglength: Number,
    maxGuestsPerBooking: Number,
    breakfastprice: Number,
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", settingsSchema);
module.exports = Settings;
