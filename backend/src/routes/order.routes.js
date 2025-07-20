const express = require("express");
const Order = require("../models/order.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ success: true, message: "Order saved", order: newOrder });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving order", error: err.message });
  }
});

module.exports = router;