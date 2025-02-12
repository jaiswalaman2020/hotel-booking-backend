const factory = require("./factoryFunction");
const cabinModel = require("../Model/CabinsModel");

exports.getAllCabins = factory.getAll(cabinModel);

exports.getCabin = factory.getOne(cabinModel);

exports.createCabin = factory.createOne(cabinModel);

exports.updateCabin = factory.updateOne(cabinModel);

exports.deleteCabin = factory.deleteOne(cabinModel);
