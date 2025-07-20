import React from "react";
import { useSelector } from "react-redux";
import OrderSummary from "../components/OrderSummary";
import { useNavigate } from "react-router";

const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { coupon } = useSelector((state) => state.coupon); // ✅ Get coupon from redux

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const discountPercent = coupon?.discount || 0; // ✅ Use redux discount
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalCost = subtotal - discountAmount + shipping;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 md:px-12 py-8 flex flex-col lg:flex-row gap-8">
      {/* Left: Delivery Form */}
      <div className="flex-1 bg-[#1E1E1E] px-8 py-5 rounded-2xl shadow-xl border border-[#2e2e2e]">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Delivery Information
        </h2>
        <form className="space-y-8">
          {/* PERSONAL DETAILS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              YOUR PERSONAL DETAILS
            </h3>
            <input
              type="text"
              placeholder="National Identity Number / D-number"
              maxLength={11}
              required
              className="w-full p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              This should be 11 digits long
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              YOUR RESIDENTIAL ADDRESS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <input
                type="text"
                placeholder="Street Address (optional)"
                className="p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                placeholder="Post Code"
                className="p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <input
                type="text"
                placeholder="City"
                className="p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <input
                type="text"
                placeholder="Country"
                className="p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">
              CONTACT DETAILS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="flex items-center gap-2">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-3 bg-[#121212] border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex gap-4 justify-end">
            <button
              onClick={() => navigate(-1)}
              className="p-4 bg-zinc-500 text-black font-bold py-3 rounded-xl active:scale-95 transition-transform duration-300 shadow-lg"
            >
              Go Back
            </button>
            <button
              type="submit"
              className="p-4 bg-gradient-to-r from-lime-500 to-lime-400 hover:to-lime-500 text-black font-bold py-3 rounded-xl active:scale-95 transition-transform duration-300 shadow-lg"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>

      {/* Right: Order Summary */}
      <OrderSummary
        subtotal={subtotal}
        shipping={shipping}
        discountPercent={discountPercent}
        discountAmount={discountAmount}
        totalCost={totalCost}
        couponCode={coupon?.code || ""}
        setCouponCode={() => {}}
        handleApplyCoupon={() => {}}
        isCouponApplied={!!coupon?.code}
        setIsCouponApplied={() => {}}
        setDiscountPercent={() => {}}
        showActions={false}
      />
    </div>
  );
};

export default CheckoutPage;