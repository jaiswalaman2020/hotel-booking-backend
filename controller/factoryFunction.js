const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.find();
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc,
      },
    });
  });

exports.getOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findById(id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    return res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
};

exports.createOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    return res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
};

exports.updateOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    return res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
};

exports.deleteOne = (Model) => {
  return catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }
    return res.status(204).json({
      status: "success",
      data: null,
    });
  });
};
