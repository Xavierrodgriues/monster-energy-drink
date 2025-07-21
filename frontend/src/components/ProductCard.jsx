// components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ProductCard = ({ drink }) => {
  return (
    <Link
      to={`/drinks/${drink.id}`}
      key={drink.id}
      className="relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-xl h-[235px]">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover"
        />

        {/* Price */}
        <p className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/60 px-2 py-1 rounded">
          ₹{drink.price}
        </p>
      </div>

      {/* Title & Subtitle */}
      <div className="mt-3">
        <h2 className="text-base md:text-lg font-semibold leading-tight line-clamp-1">
          {drink.name}
        </h2>
      </div>

      {/* Arrow icon */}
      <div className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <ArrowUpRight className="text-black w-6 h-6" />
      </div>
    </Link>
  );
};

export default ProductCard;
