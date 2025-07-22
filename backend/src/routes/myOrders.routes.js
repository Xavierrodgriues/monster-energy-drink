const express = require("express");
const router = express.Router();
const myOrder = require("../controllers/myOrders.controller");

// Get all orders for a specific user
router.get("/user/:userId", myOrder);

module.exports = router;