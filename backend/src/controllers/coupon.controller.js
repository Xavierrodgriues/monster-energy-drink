const nodemailer = require("nodemailer");

const sendCoupon = async (req, res) => {
  const { email, code, discount } = req.body;

  if (!email || !code || !discount) {
    return res
      .status(400)
      .json({ error: "Email, code and discount are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Monster Energy" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "🎁 Your Monster Energy Coupon Code",
      html: `
        <h2>Congratulations!</h2>
        <p>Your exclusive coupon code is:</p>
        <h1 style="color: limegreen;">${code}</h1>
        <p>Use this code to get a ${discount}% discount on your next order. 💸</p>
      `,
    });

    res.json({
      success: true,
      message: "Coupon sent successfully.",
    });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send coupon email." });
  }
}

module.exports = sendCoupon;