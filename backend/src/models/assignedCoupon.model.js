const mongoose = require("mongoose");

const assignedCouponSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  couponCode: {
    type: String,
    required: true,
  },
  assignedAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("AssignedCoupon", assignedCouponSchema);