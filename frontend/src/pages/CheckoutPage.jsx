import React from "react";
import { useSelector } from "react-redux";
import OrderSummary from "../components/OrderSummary";
import PersonDetails from "../components/PersonDetails";

const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { coupon } = useSelector((state) => state.coupon);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const discountPercent = coupon?.discount || 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalCost = subtotal - discountAmount + shipping;

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 md:px-12 py-8 flex flex-col lg:flex-row gap-8">
      {/* Left: Delivery Form */}
      <PersonDetails totalCost={totalCost} />

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
        showCheckout={false}
      />

      
    </div>
  );
};

export default CheckoutPage;
