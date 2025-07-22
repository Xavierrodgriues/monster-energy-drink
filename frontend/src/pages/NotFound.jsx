// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link to="/" className="bg-lime-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-lime-300 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;