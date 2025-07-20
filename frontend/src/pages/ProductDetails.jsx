import React, { useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ImageMagnifier from "../components/ImageMagnifier";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../redux/CartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const dispatch = useDispatch();

  const { allDrinks } = useSelector((state) => state.filters);
  const drink = allDrinks.find((d) => d.id === parseInt(id));

  if (!drink) {
    return (
      <div className="text-center text-white mt-10">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <button
          className="mt-4 bg-lime-400 text-black px-4 py-2 rounded"
          onClick={() => navigate("/drinks")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const relatedDrinks = [...allDrinks]
    .filter((d) => d.id !== drink.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="bg-[#090701] text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span
            onClick={() => navigate("/")}
            className="hover:underline cursor-pointer"
          >
            Home
          </span>{" "}
          /
          <span
            onClick={() => navigate("/drinks")}
            className="hover:underline cursor-pointer ml-1"
          >
            Drinks
          </span>{" "}
          /<span className="ml-1 text-white">{drink.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <div className="lg:w-1/2 bg-[#13120f] p-6 rounded-md">
            <div className="aspect-square rounded-xl overflow-hidden">
              <ImageMagnifier
                src={drink.image}
                alt={drink.name}
                className="rounded-xl"
              />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={drink.image}
                  alt={`thumb-${i}`}
                  className="w-20 h-20 object-contain rounded bg-[#1e1d1b] border border-[#2e2e2e] p-1 cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-1/2 space-y-10 text-base leading-relaxed text-white">
            {/* Title & Price */}
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{drink.name}</h1>
              <span className="text-2xl font-bold text-lime-400">
                ₹{drink.price}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: drink.id,
                      name: drink.name,
                      image: drink.image,
                      price: drink.price,
                      packSize: drink.packSize
                    })
                  )
                }
                className="bg-lime-400 active:scale-95 text-black px-6 py-2 rounded hover:bg-lime-500 transition font-semibold"
              >
                Add to Cart
              </button>
              <NavLink to={"/drinks/cart"} className="border active:scale-95 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-semibold">
                Buy Now
              </NavLink>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h2 className="font-semibold text-xl">Description</h2>
              <p className="text-gray-300">{drink.description}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>
                  <span className="font-medium text-white">Type:</span>{" "}
                  {drink.type}
                </li>
                <li>
                  <span className="font-medium text-white">Flavor:</span>{" "}
                  {drink.flavor}
                </li>
                <li>
                  <span className="font-medium text-white">Pack Size:</span>{" "}
                  {drink.packSize}
                </li>
              </ul>
            </div>

            {/* Collapsible Sections */}
            <div className="border-t border-[#2a2a2a] pt-4">
              {["Shipping", "Reviews"].map((section) => (
                <div key={section} className="border-b border-[#2a2a2a] py-4">
                  <button
                    onClick={() =>
                      setActiveSection(
                        activeSection === section ? null : section
                      )
                    }
                    className="w-full text-left font-semibold text-lg flex justify-between items-center"
                  >
                    {section}
                    <span className="text-xl">
                      {activeSection === section ? "−" : "+"}
                    </span>
                  </button>

                  {activeSection === section && (
                    <div className="mt-3 text-gray-400 text-sm leading-relaxed transition-all duration-300 ease-in-out opacity-100 animate-fadeIn">
                      {section === "Shipping" ? (
                        <p>
                          🚚 Ships in 2-3 business days. Free shipping on orders
                          over ₹500.
                        </p>
                      ) : (
                        <p>
                          ⭐️⭐️⭐️⭐️⭐️ — "Absolutely love the flavor and the
                          energy boost!"
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Drinks */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Related Drinks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedDrinks.map((drink) => (
              <ProductCard key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
