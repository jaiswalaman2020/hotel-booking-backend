const booking = require("../Model/bookingsModel");
const catchAsync = require("../utils/catchAsync");

const factory = require("./factoryFunction");

exports.getAllBookings = factory.getAll(booking);

exports.createBooking = factory.createOne(booking);
exports.getBooking = factory.getOne(booking);

exports.updateBooking = factory.updateOne(booking);

exports.deleteBooking = factory.deleteOne(booking);
// Compare this snippet from controller/factoryFunction.js:
