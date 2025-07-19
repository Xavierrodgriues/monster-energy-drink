import { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import FiltersContent from "../components/FiltersContent";
import ProductCard from "../components/ProductCard";
import { useUser } from "@clerk/clerk-react";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCoupon } from "../context/CouponContext";

const Drinks = () => {
  const { allDrinks, filteredDrinks, filters } = useSelector(
    (state) => state.filters
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const isFilterApplied = Object.values(filters).some((val) => val.length > 0);
  const drinksToRender = isFilterApplied ? filteredDrinks : allDrinks;

  const [emailInput, setEmailInput] = useState("");
  const [isCooldown, setIsCooldown] = useState(false);
  const { user } = useUser();

  const { coupons } = useCoupon();

  const handleGenerateCoupon = async () => {
    if (!user) {
      toast.error("You must be logged in to get a coupon.");
      return;
    }

    const userEmail = user.primaryEmailAddress?.emailAddress;

    if (emailInput.trim().toLowerCase() !== userEmail.toLowerCase()) {
      toast.error("Entered email does not match your logged-in email.");
      return;
    }

    if (isCooldown) {
      toast.info("Please wait 20 seconds before generating another coupon.");
      return;
    }

    const selectedCoupon = coupons[Math.floor(Math.random() * coupons.length)];

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/send-coupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          code: selectedCoupon.code,
          discount: selectedCoupon.discount, 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          `🎉 Coupon send in you email.`
        );
      } else {
        toast.error(data.error || "Failed to send coupon.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error while sending coupon.");
    }

    setIsCooldown(true);
    setTimeout(() => setIsCooldown(false), 20000);
  };

  return (
    <div className="bg-[#090701] text-white min-h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Filters */}

        <aside className="w-full hidden md:hidden lg:block lg:w-1/5 p-4 space-y-6">
          <FiltersContent />
        </aside>

        <div className="h-10 flex lg:hidden 2xl:hidden items-end justify-end pr-10">
          <div
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center justify-center cursor-pointer w-8 h-8 bg-gradient-to-t from-lime-300 to-lime-600 text-black rounded-full "
          >
            <img
              className="w-5 h-5 object-contain"
              src="/monster-resources-hackathon/filter-svgrepo-com.svg"
              alt=""
            />
          </div>
        </div>

        {/* Modal for filters on small screens */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 h-[80vh] flex justify-center items-center lg:hidden">
            <div className="bg-[#151311] w-[90%] max-h-[80vh] overflow-y-auto p-6 rounded-lg relative">
              {/* Close Button */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="absolute top-2 right-3 text-white text-2xl font-bold"
              >
                &times;
              </button>

              {/* Modal Header */}
              <h2 className="text-xl font-bold mb-4 text-center">Filters</h2>

              {/* FiltersContent Component */}
              <FiltersContent />
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="w-full h-full lg:w-4/5 p-4 space-y-10">
          <div className="text-white md:h-[30vh] rounded-lg p-6 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold">Pure Energy Big Discount</h1>
              <p className="text-lg mt-2">
                Save up to 50% off on your first order
              </p>
              <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="p-2 border focus:border-lime-400 outline-none border-gray-400 rounded"
                />
                <button
                  onClick={handleGenerateCoupon}
                  className={`px-4 py-2 rounded text-black active:scale-95 ${
                    isCooldown
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-lime-400"
                  }`}
                  disabled={isCooldown}
                >
                  Get Coupon
                </button>

                {/* Toast Container */}
              </div>
            </div>

            {/* Image instead of colored box */}
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs9xYUoN65O3g0X9X5QkfMgDng7TEvoA96XGFv8VniRE9rCA9Kxd4pN-_2gGwmGP2kDENm2uvWtW-A2M_WkQ6OXrzKN-cEekF11s_d0J4Vwj2RfaIjIgAylcY5InD7DtPo2zZUz7NjDEQ/s1600/Tickle_LasVegas_Cox_2011_077.jpg" // Replace with actual path or URL
              alt="Coffee Discount"
              className="h-35 w-35 object-cover rounded-lg"
            />
          </div>

          {/* Product Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Popular Products</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {drinksToRender
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((drink) => (
                  <ProductCard key={drink.id} drink={drink} />
                ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from(
              { length: Math.ceil(drinksToRender.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-lime-400 text-black font-bold"
                      : "bg-[#151311] text-white"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Drinks;
