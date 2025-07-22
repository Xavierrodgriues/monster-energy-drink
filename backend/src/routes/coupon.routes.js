const express = require("express");
const {assignedCoupon, validateCoupon} = require("../controllers/coupon.controller");

const router = express.Router();

// Assign a coupon
router.post("/assign-coupon", assignedCoupon);

// Validate a coupon
router.post("/validate-coupon", validateCoupon);

module.exports = router;