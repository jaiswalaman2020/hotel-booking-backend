const mongoose = require("mongoose");
const Guest = require("./guestModel");
const Cabin = require("./CabinsModel");

const bookingSchema = new mongoose.Schema(
  {
    created_at: {
      type: Date,
      default: Date.now(),
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: Date,
    numGuests: Number,
    cabinPrice: Number,
    extraprice: Number,
    totalPrice: Number,
    status: String,
    hasBreakfast: Boolean,
    ispaid: Boolean,
    observasion: String,
    cabinId: {
      type: mongoose.Schema.ObjectId,
      ref: "Cabins",
    },
    guestId: {
      type: mongoose.Schema.ObjectId,
      ref: "Guests",
    },
  },
  {
    timestamps: true,
  }
);

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "cabinId",
    select: ["-_id", "name", "maxCapacity", "regularPrice", "discount"],
  }).populate({
    path: "guestId",
    select: ["-_id", "fullName", "email", "nationality"],
  });
  next();
});

const Bookings = mongoose.model("Bookings", bookingSchema);
module.exports = Bookings;
