const express = require("express");
const assignedCoupon = require("../controllers/assignCoupon.controller");
const validateCoupon = require("../controllers/validateCoupon.controller");

const router = express.Router();

// Assign a coupon
router.post("/assign-coupon", assignedCoupon);

// Validate a coupon
router.post("/validate-coupon", validateCoupon);

module.exports = router;