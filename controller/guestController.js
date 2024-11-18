const factory = require("./factoryFunction");
const guestModel = require("../Model/guestModel");

exports.getAllGuests = factory.getAll(guestModel);

exports.getGuest = factory.getOne(guestModel);

exports.createGuest = factory.createOne(guestModel);

exports.updateGuest = factory.updateOne(guestModel);

exports.deleteGuest = factory.deleteOne(guestModel);
