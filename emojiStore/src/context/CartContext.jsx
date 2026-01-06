import { createContext, useState } from "react";

// 1. Create the Context
export const CartContext = createContext();

// 2. Create the Provider (Make sure the name matches EXACTLY)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
