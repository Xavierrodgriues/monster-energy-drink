const Coupon = require("../models/coupons.model");
const AssignedCoupon = require("../models/assignedCoupon.model");

const validateCoupon = async (req, res) => {
  const { email, code } = req.body;

  try {
    const now = new Date();

    const assigned = await AssignedCoupon.findOne({
      userEmail: email,
      couponCode: code,
      expiresAt: { $gt: now },
    });

    if (!assigned) {
      return res.status(400).json({ valid: false, message: "Invalid or expired coupon" });
    }

    // Get the actual discount from the Coupon model
    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res.status(400).json({ valid: false, message: "Coupon details not found" });
    }

    res.status(200).json({
      valid: true,
      message: "Coupon is valid",
      discount: coupon.discount, // ✅ return actual discount
    });
  } catch (err) {
    console.error("Validation error:", err);
    res.status(500).json({ message: "Failed to validate coupon", error: err });
  }
}

module.exports = validateCoupon;