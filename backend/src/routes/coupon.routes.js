const sendCoupon = require("../controllers/coupon.controller");

const express = require("express");
const router = express.Router();


router.post("/send-coupon", sendCoupon);

module.exports = router;