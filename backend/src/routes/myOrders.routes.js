const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

// Get all orders for a specific user
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;