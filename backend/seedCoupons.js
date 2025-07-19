const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Coupon = require("./src/models/coupons.model");

dotenv.config();

const MONGO_URI = process.env.DB_URL;

const coupons = [
  { code: "ENERGY10", discount: 10 },
  { code: "MONSTER5", discount: 5 },
  { code: "FUELIT", discount: 8 },
  { code: "BUZZ10", discount: 10 },
  { code: "POWERUP", discount: 3 },
];

async function seedCoupons() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const couponsWithExpiry = coupons.map(coupon => ({
      ...coupon,
      expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    }));

    await Coupon.insertMany(couponsWithExpiry);
    console.log("Coupons seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding coupons:", error);
    process.exit(1);
  }
}

seedCoupons();