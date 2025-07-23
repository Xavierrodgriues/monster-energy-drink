import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/CartSlice";
import { applyCoupon, removeCoupon } from "../redux/couponSlice";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "@clerk/clerk-react";
import OrderSummary from "../components/OrderSummary";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { coupon } = useSelector((state) => state.coupon);
  const { user } = useUser();

  const [couponCode, setCouponCode] = useState("");

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    const newQuantity = item.quantity + delta;
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      return toast.error("Please enter a coupon code");
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/coupons/validate-coupon`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user?.primaryEmailAddress?.emailAddress,
            code: couponCode,
          }),
        }
      );

      const data = await res.json();

      if (data.valid) {
        dispatch(applyCoupon({ code: couponCode, discount: data.discount }));
        toast.success(`Coupon applied! ${data.discount}% discount`);
      } else {
        toast.error(data.message || "Invalid or expired coupon");
      }
    } catch (err) {
      console.error("Coupon validation failed:", err);
      toast.error("Something went wrong while applying coupon");
    }
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const discountPercent = coupon?.discount || 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalCost = subtotal - discountAmount + shipping;

  return (
    <div className="bg-[#090701]">
      <Navbar />
      <div className="min-h-screen text-white px-4 md:px-12 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 bg-[#131313] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-semibold">{totalItems} Items</p>
              <button
                className="text-red-500 cursor-pointer hover:underline text-sm"
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(removeCoupon());
                  setCouponCode("");  
                }}
              >
                Clear Cart
              </button>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.packSize}</p>
                    <button
                      className="text-red-500 cursor-pointer text-sm mt-1 hover:underline"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between sm:ml-auto w-full sm:w-auto">
                  <div className="flex items-center gap-2 justify-start">
                    <button
                      className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-700 rounded"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-700 rounded"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right min-w-[100px]">
                    <p>₹{item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-400">
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            discountPercent={discountPercent}
            discountAmount={discountAmount}
            totalCost={totalCost}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            handleApplyCoupon={handleApplyCoupon}
            isCouponApplied={coupon?.code ? true : false}
            setIsCouponApplied={() => dispatch(removeCoupon())} // ✅ Add this line
            setDiscountPercent={() => dispatch(removeCoupon())}  // ✅ Add this line
          />
        </div>

        <div className="mt-6">
          <NavLink
            to={"/drinks"}
            className="text-lime-500 hover:underline text-sm"
          >
            ← Continue Shopping
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartPage;