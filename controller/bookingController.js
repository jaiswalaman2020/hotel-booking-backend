const booking = require("../Model/bookingsModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllBookings = catchAsync(async (req, res) => {
  const bookings = await booking.find().select("-__v");
  res.status(200).json({
    status: "success",
    results: bookings.length,
    data: {
      bookings,
    },
  });
});

exports.createBooking = catchAsync(async (req, res) => {
  const newBooking = await booking.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      newBooking,
    },
  });
});

exports.getBooking = catchAsync(async (req, res) => {
  const bookings = await booking.findById(req.params.id).select("-__v");
  res.status(200).json({
    status: "success",
    data: {
      bookings,
    },
  });
});

exports.updateBooking = catchAsync(async (req, res, next) => {
  const bookings = await booking.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bookings) {
    return next(new AppError("No booking found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      bookings,
    },
  });
});

module.exports.deleteBooking = catchAsync(async (req, res, next) => {
  const bookings = await booking.findByIdAndDelete(req.params.id);
  if (!bookings) {
    return next(new AppError("No booking found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
