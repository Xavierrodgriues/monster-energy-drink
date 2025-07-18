export const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to load cart from localStorage", err);
    return [];
  }
};

export const saveCartToLocalStorage = (cartItems) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (err) {
    console.error("Failed to save cart to localStorage", err);
  }
};