require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/dbConfig");
const couponRouter = require("./routes/coupon.routes");
const app = express();
const PORT = process.env.PORT || 3100;

// Middleware
app.use(cors());
app.use(express.json());

//Database Connection 
dbConnection();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to server");
})

// Routes
app.use("/api/coupons", couponRouter);


// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
