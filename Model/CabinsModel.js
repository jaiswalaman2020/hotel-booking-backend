const mongoose = require("mongoose");

const cabinSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A cabin must have a name"],
      unique: true,
    },
    maxCapacity: {
      type: Number,
      required: [true, "A cabin must have a maximum capacity"],
    },
    regularPrice: {
      type: Number,
      required: [true, "A cabin must have a regular price"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: [true, "A cabin must have a description"],
    },
    image: {
      type: String,
      required: [true, "A cabin must have an image"],
    },
  },
  {
    timestamps: true,
  }
);

const Cabins = mongoose.model("Cabins", cabinSchema);
module.exports = Cabins;
