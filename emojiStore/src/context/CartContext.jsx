import { createContext, useState } from "react";

// 1. Create the Context
export const CartContext = createContext();

const handleQuantity = (prevCart, product, quantityToAdd) => {
  const itemExists = prevCart.find((item) => item.id === product.id);
  if (itemExists) {
    return prevCart.map((item) => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity + quantityToAdd }
        : item;
    });
  }
  return [...prevCart, { ...product, quantity: quantityToAdd }];
};

// 2. Create the Provider (Make sure the name matches EXACTLY)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantityToAdd = 1) => {
    console.log("Adding to cart:", product, "quantity:", quantityToAdd);
    setCart((prevCart) => handleQuantity(prevCart, product, quantityToAdd));
  };

  const substractFromCart = (product, quantityToSubstract = 1) => {
    console.log(
      "Substracting from cart:",
      product,
      "quantity:",
      quantityToSubstract
    );
    setCart((prevCart) => {
      prevCart = prevCart.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity - quantityToSubstract }
          : item;
      });
      return prevCart.filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (product) => {
    console.log("Removing from cart:", product);
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== product.id);
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, substractFromCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
