const mongoose = require("mongoose");

const cabinSchema = new mongoose.Schema({
  name: String,
  maxCapacity: Number,
  regularPrice: Number,
  discount: Number,
  description: String,
  image: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Cabins = mongoose.model("Cabins", cabinSchema);
module.exports = Cabins;
