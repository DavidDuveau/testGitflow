const express = require("express");

const router = express.Router();

const carController = require("../controllers/carController");

router.post("/car", carController.newCar);
router.get("/cars", carController.getCars);

module.exports = router;
