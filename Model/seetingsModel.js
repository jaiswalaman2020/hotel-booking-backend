const { maxHeaderSize } = require("http");
const mongoose = require("mongoose");
const { float } = require("webidl-conversions");

const settingsSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now(),
  },
  minBookinglength: Number,
  maxBookinglength: Number,
  maxGuestsPerBooking: Number,
  breakfastprice: Number,
});

const Settings = mongoose.model("Settings", settingsSchema);
module.exports = Settings;
