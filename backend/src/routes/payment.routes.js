const express = require("express");
const CreateOrder = require("../controllers/payment.controller");
const router = express.Router();

router.post("/create-order", CreateOrder);

module.exports = router;