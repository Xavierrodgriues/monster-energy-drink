const mongoose = require("mongoose");

const dbConnection = async () => {
  // MongoDB Connection
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}; 


module.exports = dbConnection;