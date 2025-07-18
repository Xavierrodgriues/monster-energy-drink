import React from "react";
import {
  updateFilter,
  applyFilters,
  resetFilterCategory,
} from "../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const FiltersContent = () => {
  const dispatch = useDispatch();

  // Get selected filters from Redux
  const selectedFilters = useSelector((state) => state.filters.filters);

  const filtersData = {
    Flavor: [
      "Original",
      "Mango Loco",
      "Ultra Sunrise",
      "Zero Sugar",
      "Watermelon",
    ],
    Type: ["Regular", "Zero Sugar", "Ultra", "Juice", "Rehab", "Hydro"],
    "Pack Size": ["Single can", "Pack of 4", "Pack of 12"],
    Price: ["₹50-₹99", "₹100-₹199", "₹200-₹299", "₹300+"],
  };

  return (
    <>
      {Object.entries(filtersData).map(([filterName, options]) => {
        const isPrice = filterName === "Price";

        return (
          <div
            key={filterName}
            className="bg-[#151311] rounded-lg px-4 py-3 lg:p-4 mb-4"
          >
            {/* Header with Reset */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-white">{filterName}</h2>
              <button
                onClick={() => {
                  dispatch(resetFilterCategory(filterName));
                  dispatch(applyFilters());
                }}
                className="text-xs text-gray-300 underline hover:text-white transition"
              >
                Reset
              </button>
            </div>

            {/* Price Radio Buttons */}
            {isPrice ? (
              <div className="grid grid-cols-2 gap-2">
                {options.map((option) => {
                  const id = `${filterName}-${option}`;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className={`cursor-pointer px-3 py-1.5 text-sm rounded font-semibold text-center transition ${
                        selectedFilters[filterName]?.includes(option)
                          ? "bg-lime-500 text-black"
                          : "bg-lime-400 text-black hover:bg-lime-500"
                      }`}
                    >
                      <input
                        type="radio"
                        id={id}
                        name="price"
                        className="hidden"
                        checked={selectedFilters[filterName]?.includes(option) || false}
                        onChange={() => {
                          dispatch(
                            updateFilter({
                              category: filterName,
                              value: option,
                            })
                          );
                          dispatch(applyFilters());
                        }}
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
            ) : (
              // Other checkboxes
              <div className="flex flex-wrap gap-3 lg:flex-col">
                {options.map((option) => {
                  const id = `${filterName}-${option}`;
                  const isChecked = selectedFilters[filterName]?.includes(option);

                  return (
                    <label
                      htmlFor={id}
                      key={id}
                      className={`flex items-center w-28 md:w-fit justify-between cursor-pointer text-[0.6rem] md:text-sm px-2 py-1 rounded transition ${
                        isChecked
                          ? "bg-lime-500 text-black"
                          : "bg-black/80 md:bg-transparent hover:bg-[#1f1d1a] text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={id}
                          className="accent-lime-400 w-4 h-4"
                          checked={isChecked || false}
                          onChange={() => {
                            dispatch(
                              updateFilter({
                                category: filterName,
                                value: option,
                              })
                            );
                            dispatch(applyFilters());
                          }}
                        />
                        <span>{option}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FiltersContent;
