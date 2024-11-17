const cabinModel = require("../Model/CabinsModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllCabins = catchAsync(async (req, res) => {
  const cabins = await cabinModel.find().select("-__v");
  res.status(200).json({
    status: "success",
    results: cabins.length,
    data: {
      cabins,
    },
  });
});

exports.getCabin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const cabins = await cabinModel.findById(id).select("-__v");
  res.status(200).json({
    status: "success",
    data: {
      cabins,
    },
  });
});

exports.createCabin = catchAsync(async (req, res, next) => {
  // Check if a cabin with the same name already exists
  const existingCabin = await cabinModel.findOne({ name: req.body.name });
  if (existingCabin) {
    return next(new AppError("A cabin with this name already exists", 400));
  }

  // Create a new cabin if no duplicate is found
  const cabin = await cabinModel.create(req.body);
  return res.status(201).json({
    status: "success",
    data: {
      cabin,
    },
  });
});

exports.updateCabin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const cabin = await cabinModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!cabin) {
    return next(new AppError("No cabin found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      cabin,
    },
  });
});

exports.deleteCabin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const cabin = await cabinModel.findByIdAndDelete(id);
  if (!cabin) {
    return next(new AppError("No cabin found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
