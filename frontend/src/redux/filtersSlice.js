// src/redux/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    Flavor: [],
    Type: [],
    "Pack Size": [],
    Price: [],
  },
  allDrinks: [
    {
      id: 1,
      name: "Monster Original",
      flavor: "Original",
      type: "Regular",
      packSize: "Single can",
      price: 99,
      volume: "473ml",
      caffeineContent: "160mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product1.jpg?updatedAt=1752859784998",
      available: true,
      rating: 4.6,
      ingredients: [
        "Carbonated Water",
        "Sugar",
        "Caffeine",
        "Taurine",
        "Ginseng Extract",
      ],
      description:
        "The original green Monster Energy drink delivers a powerful punch with a smooth flavor.",
      reviews: ["Perfect pre-workout drink!", "Strong and tasty."],
    },
    {
      id: 2,
      name: "Monster Mango Loco",
      flavor: "Mango Loco",
      type: "Juice",
      packSize: "Pack of 4",
      price: 200,
      volume: "473ml",
      caffeineContent: "150mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product2.jpg?updatedAt=1752859784983",
      available: true,
      rating: 4.8,
      ingredients: [
        "Mango Juice",
        "Apple Juice",
        "Guava",
        "Caffeine",
        "Taurine",
      ],
      description:
        "Mango Loco is a heavenly blend of exotic juices mixed with Monster’s energy blend.",
      reviews: ["Love the tropical vibe!", "My go-to energy juice!"],
    },
    {
      id: 3,
      name: "Monster Ultra Sunrise",
      flavor: "Ultra Sunrise",
      type: "Ultra",
      packSize: "Pack of 12",
      price: 299,
      volume: "355ml",
      caffeineContent: "140mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product3.jpg?updatedAt=1752859784960",
      available: true,
      rating: 4.7,
      ingredients: [
        "Carbonated Water",
        "Citric Acid",
        "Natural Flavors",
        "Caffeine",
        "Ginseng Extract",
      ],
      description:
        "Crisp citrus flavor with zero sugar, designed for early risers and grind chasers.",
      reviews: ["Refreshing and no sugar!", "Amazing start to the day."],
    },
    {
      id: 4,
      name: "Monster Zero Sugar",
      flavor: "Zero Sugar",
      type: "Zero Sugar",
      packSize: "Single can",
      price: 90,
      volume: "473ml",
      caffeineContent: "140mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product4.jpg?updatedAt=1752859784918",
      available: true,
      rating: 4.3,
      ingredients: [
        "Carbonated Water",
        "Erythritol",
        "Sucralose",
        "Caffeine",
        "Taurine",
      ],
      description:
        "All the buzz, none of the sugar. Classic Monster energy with a guilt-free formula.",
      reviews: ["Tastes just like the original!", "Love the zero calories."],
    },
    {
      id: 5,
      name: "Monster Watermelon",
      flavor: "Watermelon",
      type: "Ultra",
      packSize: "Pack of 4",
      price: 160,
      volume: "355ml",
      caffeineContent: "150mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product5.jpg?updatedAt=1752859785065",
      available: true,
      rating: 4.5,
      ingredients: [
        "Watermelon Juice",
        "Carbonated Water",
        "Caffeine",
        "B Vitamins",
      ],
      description:
        "Bright and bold watermelon flavor with a clean, refreshing finish and zero sugar.",
      reviews: ["So fresh!", "Summer vibes in a can."],
    },
    {
      id: 6,
      name: "Monster Hydro",
      flavor: "Watermelon",
      type: "Hydro",
      packSize: "Single can",
      price: 110,
      volume: "650ml",
      caffeineContent: "188mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product6.jpg?updatedAt=1752859784921",
      available: true,
      rating: 4.2,
      ingredients: ["Water", "Electrolytes", "Caffeine", "L-Carnitine"],
      description:
        "Hydration meets energy. Ideal for athletes needing a fuel + hydration boost.",
      reviews: ["Hydrating and energetic!", "Great after workout."],
    },
    {
      id: 7,
      name: "Monster Rehab",
      flavor: "Mango Loco",
      type: "Rehab",
      packSize: "Pack of 12",
      price: 300,
      volume: "473ml",
      caffeineContent: "160mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product7.jpg?updatedAt=1752859784949",
      available: false,
      rating: 4.4,
      ingredients: ["Tea Extract", "Mango Juice", "Electrolytes", "Caffeine"],
      description:
        "Non-carbonated drink with electrolytes and tea-based mango flavor. Rehydrates and energizes.",
      reviews: ["Mellow and effective!", "Great post-run drink."],
    },
    {
      id: 8,
      name: "Monster Ultra Sunrise",
      flavor: "Ultra Sunrise",
      type: "Ultra",
      packSize: "Pack of 4",
      price: 220,
      volume: "355ml",
      caffeineContent: "140mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product8.jpg?updatedAt=1752859784906",
      available: true,
      rating: 4.7,
      ingredients: ["Carbonated Water", "Caffeine", "Sucralose", "Citric Acid"],
      description:
        "Zero sugar citrus-flavored energy drink in a budget-friendly 4-pack.",
      reviews: ["Good value!", "Crisp flavor, no calories."],
    },
    {
      id: 9,
      name: "Monster Juice Punch",
      flavor: "Mango Loco",
      type: "Juice",
      packSize: "Pack of 12",
      price: 310,
      volume: "473ml",
      caffeineContent: "160mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product9.jpg?updatedAt=1752859785049",
      available: true,
      rating: 4.6,
      ingredients: ["Mixed Juices", "Carbonated Water", "Caffeine", "Taurine"],
      description:
        "A fruity explosion with high-energy kick, combining flavor and performance.",
      reviews: ["My favorite flavor!", "Fruit punch for adults!"],
    },
    {
      id: 10,
      name: "Monster Regular OG",
      flavor: "Original",
      type: "Regular",
      packSize: "Single can",
      price: 85,
      volume: "473ml",
      caffeineContent: "160mg",
      image:
        "https://ik.imagekit.io/wr6ziyjiu/product10.jpg?updatedAt=1752859784806",
      available: true,
      rating: 4.5,
      ingredients: ["Carbonated Water", "Sugar", "Caffeine", "Taurine"],
      description:
        "The OG flavor that started it all. Smooth, bold, and addictive.",
      reviews: ["Still the best!", "Classic for a reason."],
    },
  ],
  filteredDrinks: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter(state, action) {
      const { category, value } = action.payload;
      const current = state.filters[category];
      if (category === "Price") {
        // Only allow one selection at a time for price
        if (current.includes(value)) {
          state.filters[category] = []; // Deselect if already selected
        } else {
          state.filters[category] = [value]; // Replace with new value
        }
      } else {
        if (current.includes(value)) {
          state.filters[category] = current.filter((v) => v !== value);
        } else {
          state.filters[category].push(value);
        }
      }
    },
    resetFilters(state) {
      state.filters = {
        Flavor: [],
        Type: [],
        "Pack Size": [],
        Price: [],
      };
    },
    resetFilterCategory: (state, action) => {
      const category = action.payload;
      state.filters[category] = [];
    },
    applyFilters(state) {
      state.filteredDrinks = state.allDrinks.filter((drink) => {
        const { filters } = state;

        const check = (category, drinkValue) => {
          return (
            filters[category].length === 0 ||
            filters[category].includes(drinkValue)
          );
        };

        const priceCheck = () => {
          if (filters.Price.length === 0) return true;

          return filters.Price.some((range) => {
            const cleaned = range.replace(/₹/g, "").replace("+", "");
            const parts = cleaned.split("-");
            const min = Number(parts[0]);
            const max = parts[1] ? Number(parts[1]) : null;

            if (!isNaN(min) && max === null) {
              return drink.price >= min; // For "₹300+"
            } else if (!isNaN(min) && !isNaN(max)) {
              return drink.price >= min && drink.price <= max;
            }

            return false; // fallback
          });
        };

        return (
          check("Flavor", drink.flavor) &&
          check("Type", drink.type) &&
          check("Pack Size", drink.packSize) &&
          priceCheck()
        );
      });
    },
  },
});

export const { updateFilter, resetFilters, applyFilters, resetFilterCategory } =
  filtersSlice.actions;
export default filtersSlice.reducer;
