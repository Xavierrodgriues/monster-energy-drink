import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "@clerk/clerk-react";
import { removeCoupon } from "../redux/couponSlice";
import { useState } from "react";

const PersonDetails = ({ totalCost }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);
    
    if (!isSignedIn) {
      toast.error("Please sign in to continue with the payment.");
      setLoading(false);
      return;
    }
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      setLoading(false);
      return;
    }

    try {
      const orderResponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/payment/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: totalCost }),
        }
      );

      const orderData = await orderResponse.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Monster Energy Drink",
        description: "Order Payment",
        order_id: orderData.id,
        handler: async function (response) {
          const orderData = {
            userId: user.id,
            userName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            address: {
              street: data.street,
              postCode: data.postCode,
              city: data.city,
              country: data.country,
            },
            products: cartItems.map((item) => ({
              productId: item._id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            })),
            totalCost,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
          };

          try {
            const res = await fetch(
              `${import.meta.env.VITE_API_BASE_URL}/api/orders`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
              }
            );

            const result = await res.json();

            if (result.success) {
              toast.success("Order placed successfully!");

              // ✅ Clear the cart here
              dispatch(clearCart());
              dispatch(removeCoupon());
              // ✅ Optional: Redirect to success page
              navigate("/myOrders");
            } else {
              toast.error("Failed to save order");
            }
          } catch (err) {
            console.error(err);
            toast.error("Error saving order");
          }
          setLoading(false);
        },
        modal: {
          ondismiss: function () {
            // ✅ Called when user closes Razorpay popup
            setLoading(false);
            toast.info("Payment cancelled");
          },
        },

        prefill: {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          contact: data.phone,
        },
        notes: {
          address: `${data.street}, ${data.city}`,
        },
        theme: { color: "#00FF00" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <div className="flex-1 bg-[#131313] px-8 py-5 rounded-2xl shadow-xl border border-[#2e2e2e]">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Delivery Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* PERSONAL DETAILS */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            YOUR PERSONAL DETAILS
          </h3>

          {/* ID */}
          <input
            type="text"
            placeholder="National Identity Number / D-number"
            maxLength={11}
            {...register("id", {
              required: "ID is required",
              minLength: { value: 11, message: "Must be 11 digits" },
              maxLength: { value: 11, message: "Must be 11 digits" },
            })}
            className="w-full focus:border-lime-300 outline-none p-3 bg-[#121212] border border-gray-700 text-white rounded-xl"
          />
          {errors.id && (
            <p className="text-red-500 text-xs mt-1">{errors.id.message}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* First Name */}
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl w-full"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", {
                  required: "Last name is required",
                })}
                className="p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl w-full"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            YOUR RESIDENTIAL ADDRESS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Street Address */}
            <div>
              <input
                type="text"
                placeholder="Street Address"
                {...register("street", {
                  required: "Street address is required",
                })}
                className="p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl w-full"
              />
              {errors.street && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.street.message}
                </p>
              )}
            </div>

            {/* Optional Address */}
            <div>
              <input
                type="text"
                placeholder="Street Address (optional)"
                className="p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Post Code */}
            <div>
              <input
                type="text"
                placeholder="Post Code"
                {...register("postCode", {
                  required: "Post code is required",
                })}
                className="p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl w-full"
              />
              {errors.postCode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.postCode.message}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <input
                type="text"
                placeholder="City"
                {...register("city", { required: "City is required" })}
                className="p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl w-full"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <input
                type="text"
                placeholder="Country"
                {...register("country", { required: "Country is required" })}
                className="p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl w-full"
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            CONTACT DETAILS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="w-full p-3 focus:border-lime-300 outline-none bg-[#121212] border border-gray-700 text-white rounded-xl"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <input
                type="email"
                placeholder="Your Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full focus:border-lime-300 outline-none p-3 bg-[#121212] border border-gray-700 text-white rounded-xl"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4 flex gap-4 justify-between md:justify-end">
          <NavLink
            to={"/drinks/cart"}
            className="p-4 bg-zinc-300 active:scale-95 text-black font-bold py-3 rounded-md shadow-lg hover:bg-zinc-400"
          >
            Go Back
          </NavLink>
          <button
            type="submit"
            disabled={loading}
            className={`p-4 bg-gradient-to-r from-lime-500 to-lime-400 text-black font-bold py-3 rounded-md shadow-lg ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer active:scale-95"
            }`}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonDetails;
