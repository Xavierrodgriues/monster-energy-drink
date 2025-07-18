import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import FiltersContent from "../components/FiltersContent";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Drinks = () => {
  const { allDrinks, filteredDrinks, filters } = useSelector(
    (state) => state.filters
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const isFilterApplied = Object.values(filters).some((val) => val.length > 0);
  const drinksToRender = isFilterApplied ? filteredDrinks : allDrinks;

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
          <div className="bg-white md:h-[30vh] text-black rounded-lg p-6 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold">Pure Coffee Big Discount</h1>
              <p className="text-lg mt-2">
                Save up to 50% off on your first order
              </p>
              <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-2 border border-gray-400 rounded"
                />
                <button className="bg-lime-400 text-black px-4 py-2 rounded">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="h-28 w-28 bg-gray-400 rounded-lg" />
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
