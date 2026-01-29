import { createContext, useState, useEffect, useCallback } from "react";
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

  // Function to get a page of products (simulated for this example)
  const getProductsPage = useCallback(
    (page, limit) => {
      const startIndex = (page - 1) * limit;
      return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
          const paginatedProducts = products.slice(
            startIndex,
            startIndex + limit,
          );
          resolve({
            data: paginatedProducts,
            total: products.length,
            page,
            limit,
            totalPages: Math.ceil(products.length / limit),
          });
        }, 300);
      });
    },
    [products],
  );

  return (
    <ProductContext.Provider value={{ products, isLoading, getProductsPage }}>
      {children}
    </ProductContext.Provider>
  );
};
