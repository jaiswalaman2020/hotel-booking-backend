const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now(),
  },
  startDate: Date,
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
});

const Bookings = mongoose.model("Bookings", bookingSchema);
module.exports = Bookings;
