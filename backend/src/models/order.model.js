const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userName: String,
    email: String,
    phone: String,
    address: {
      street: String,
      postCode: String,
      city: String,
      country: String,
    },
    products: [
      {
        productId: String,
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    totalCost: Number,
    razorpayPaymentId: String,
    razorpayOrderId: String,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;