import { createContext, useState } from "react";

// 1. Create the Context
export const CartContext = createContext();

// 2. Create the Provider (Make sure the name matches EXACTLY)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
