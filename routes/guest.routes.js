const express = require("express");
const guestController = require("../controller/guestController");

const router = express.Router();

router
  .route("/")
  .get(guestController.getAllGuests)
  .post(guestController.createGuest);

router
  .route("/:id")
  .get(guestController.getGuest)

  .patch(guestController.updateGuest)
  .delete(guestController.deleteGuest);

module.exports = router;
