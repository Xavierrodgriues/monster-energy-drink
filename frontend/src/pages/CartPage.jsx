import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/CartSlice";
import { NavLink } from "react-router";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

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

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const totalCost = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 md:px-12 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 bg-[#1e1e1e] p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-semibold">{totalItems} Items</p>
            <button
              className="text-red-500 hover:underline text-sm"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-gray-700"
            >
              {/* Item Info */}
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
                    className="text-red-500 text-sm mt-1 hover:underline"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Quantity + Price Block */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between sm:ml-auto w-full sm:w-auto">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 justify-start">
                  <button
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                {/* Price Info */}
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
          <div className="py-4">
            <label className="block mb-2">Promo Code</label>
            <div className="flex items-center justify-between">
              <input
              type="text"
              placeholder="Enter your code"
              className="w-70 p-2 bg-gray-800 text-white border border-gray-600 rounded"
            />
            <div className=" flex justify-end">

              <button className="bg-lime-400 hover:bg-lime-400/80 w-30 font-bold py-2 rounded text-black">
                Apply
              </button>
            </div>
            </div>
            

            
          </div>

          {/* Total */}
          <div className="flex justify-between text-lg font-bold mt-4 mb-2">
            <p>Total Cost</p>
            <p>₹{totalCost.toFixed(2)}</p>
          </div>

          <button className="w-full bg-[#EE440E] hover:bg-[#EE440E]/80 py-3 rounded text-white font-bold mt-4">
            Checkout
          </button>
        </div>
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
  );
};

export default CartPage;
