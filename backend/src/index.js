require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/dbConfig");
const couponRouter = require("./routes/coupon.routes");
const app = express();
const PORT = process.env.PORT || 8000;
const paymentRoutes = require("./routes/payment.routes");
const orderRoutes = require("./routes/order.routes");
const myOrdersRoutes = require("./routes/myOrders.routes");

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
app.use("/api/payment", paymentRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/orders", myOrdersRoutes);


// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
