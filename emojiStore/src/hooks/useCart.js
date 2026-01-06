import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);

  // Safety check: if context is undefined, it means we forgot to wrap the app in <CartProvider>
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
