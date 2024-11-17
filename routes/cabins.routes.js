const express = require("express");
const cabinController = require("../controller/cabinsController");
const router = express.Router();

router.route("/").get(cabinController.getAllCabins);

router.route("/new").post(cabinController.createCabin);
//   .post(cabinController.createCabin);

router
  .route("/:id")
  .get(cabinController.getCabin)
  .patch(cabinController.updateCabin)
  .delete(cabinController.deleteCabin);

module.exports = router;
