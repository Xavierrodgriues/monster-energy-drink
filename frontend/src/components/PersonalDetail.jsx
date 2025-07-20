import React from "react";

const PersonalDetail = () => {
  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center p-4">
      <div className="bg-[#1f2937] text-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">Address details</h2>
        <p className="text-gray-400 mb-8">
          Dynamically whiteboard frictionless models for client-centric architectures.
        </p>

        <h3 className="text-xl font-semibold mb-4">Delivery address</h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#374151] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Second Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#374151] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">Street Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#374151] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Street and number"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">City</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#374151] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#374151] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="00-000"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Country</label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-[#374151] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="India"
            >
              <option>India</option>
              <option>USA</option>
              <option>Germany</option>
              <option>Poland</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded-lg bg-[#374151] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123456789"
            />
            <p className="text-xs text-gray-500 mt-1">Keep 9-digit format with no spaces or dashes.</p>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetail;
