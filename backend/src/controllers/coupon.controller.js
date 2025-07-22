const Coupon = require("../models/coupons.model");
const AssignedCoupon = require("../models/assignedCoupon.model");
const nodemailer = require("nodemailer");
// Set up Nodemailer transporter (use your real credentials or environment variables)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER, // e.g. "yourgmail@gmail.com"
    pass: process.env.MAIL_PASS, // app password if using Gmail
  },
});

const assignedCoupon = async (req, res) => {
  const { email } = req.body;

  try {
    const now = new Date();
    const validCoupons = await Coupon.find({ expiresAt: { $gt: now } });

    if (validCoupons.length === 0) {
      return res.status(404).json({ message: "No coupons available" });
    }

    const randomIndex = Math.floor(Math.random() * validCoupons.length);
    const selectedCoupon = validCoupons[randomIndex];

    const expiresAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // valid for 3 days

    const assignedCoupon = new AssignedCoupon({
      userEmail: email,
      couponCode: selectedCoupon.code,
      expiresAt,
    });

    await assignedCoupon.save();

    // Send email to user
    await transporter.sendMail({
      from: `"Coupon Service" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "🎉 You've Received a Coupon!",
      text: `Congratulations! You've received a coupon code: ${selectedCoupon.code}. It will expire in 3 days.`,
      html: `<p>Hi,</p><p>You've been assigned a coupon:</p><h3>${selectedCoupon.code}</h3><p><strong>Note:</strong> This coupon will expire in <b>3 days</b>.</p>`,
    });

    res.status(200).json({
      message: "Coupon assigned and email sent",
      coupon: selectedCoupon.code,
    });
  } catch (err) {
    console.error("Error assigning coupon:", err);
    res.status(500).json({ message: "Failed to assign coupon", error: err });
  }
}



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

module.exports = {assignedCoupon, validateCoupon};