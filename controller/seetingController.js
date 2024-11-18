const seeting = require("../Model/seetingsModel");

const factory = require("./factoryFunction");

exports.getAllSeetings = factory.getAll(seeting);

exports.getSeeting = factory.getOne(seeting);

exports.createSeeting = factory.createOne(seeting);

exports.updateSeeting = factory.updateOne(seeting);

exports.deleteSeeting = factory.deleteOne(seeting);
