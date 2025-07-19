const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;