import React from "react";
import { useNavigate } from "react-router";

const OrderSummary = ({
  subtotal,
  shipping,
  discountPercent,
  discountAmount,
  totalCost,
  couponCode,
  setCouponCode,
  handleApplyCoupon,
  isCouponApplied,
  setIsCouponApplied,
  setDiscountPercent,
  showActions = true,
  showCheckout = true,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:w-1/3 bg-[#1e1e1e] p-6 rounded-lg h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between py-2 border-b border-gray-700">
        <p>Items</p>
        <p>₹{subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-700">
        <p>Shipping</p>
        <p>₹{shipping.toFixed(2)}</p>
      </div>

      {/* Promo Code */}
      {showActions && (
        <div className="py-4">
          <label className="block mb-2">Promo Code</label>
          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter your code"
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 focus:border-lime-600 outline-none rounded"
            />

            {isCouponApplied && (
              <button
                onClick={() => {
                  setDiscountPercent(0);
                  setIsCouponApplied(false);
                  setCouponCode("");
                }}
                className="bg-red-500 hover:bg-red-500/80 px-4 py-2 rounded text-black font-bold"
              >
                Remove
              </button>
            )}

            <button
              onClick={handleApplyCoupon}
              className="bg-lime-400 hover:bg-lime-400/80 cursor-pointer px-4 py-2 rounded text-black font-bold"
            >
              Apply
            </button>
          </div>
          {isCouponApplied && (
            <p className="text-sm text-green-400 mt-2">Coupon applied!</p>
          )}
        </div>
      )}

      {/* Discount */}
      {isCouponApplied && (
        <div className="flex justify-between text-sm text-green-400">
          <p>Discount ({discountPercent}%)</p>
          <p>- ₹{discountAmount.toFixed(2)}</p>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between text-lg font-bold mt-4 mb-2">
        <p>Total Cost</p>
        <p>₹{totalCost.toFixed(2)}</p>
      </div>

      {showCheckout && (
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-[#EE440E] cursor-pointer hover:bg-[#EE440E]/80 py-3 rounded text-white font-bold mt-4"
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default OrderSummary;
