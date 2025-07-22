const mongoose = require("mongoose");

const dbConnection = async () => {
  // MongoDB Connection
  await mongoose
    .connect(process.env.DB_URL || "mongodb://localhost:27017/monster_energy_drink")
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}; 


module.exports = dbConnection;