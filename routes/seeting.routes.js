const express = require("express");
const seetingController = require("../controller/seetingController");
const router = express.Router();

router
  .route("/")
  .get(seetingController.getAllSeetings)
  .post(seetingController.createSeeting);

router
  .route("/:id")
  .get(seetingController.getSeeting)
  .patch(seetingController.updateSeeting)
  .delete(seetingController.deleteSeeting);

module.exports = router;
