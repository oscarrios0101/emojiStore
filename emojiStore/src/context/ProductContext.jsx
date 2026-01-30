import { createContext, useState, useEffect } from "react";
import ItemsData from "../data/items.json";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading all products initially (in a real app, this would be paginated from the backend)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(ItemsData.map((item) => ({ ...item, quantity: 1 })));
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
