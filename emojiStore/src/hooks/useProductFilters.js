import { useState, useMemo } from "react";

export const useProductFilters = (products) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterBy, setFilterBy] = useState("name");

  // Extract unique categories dynamically from the products list.
  // This ensures the filter dropdown always matches the available data.
  // Example: ["All", "Sci-Fi", "Magic", ...]
  const categories = useMemo(() => {
    const allCategories = products.map((product) => product.category);
    // Use Set to get unique values, then sort them alphabetically.
    const uniqueCategories = [...new Set(allCategories)].sort();
    return ["All", ...uniqueCategories];
  }, [products]);

  // Filter the products array based on the current search query and category.
  // This runs whenever products, searchQuery, or selectedCategory changes.
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search logic based on selected filter type
      let matchesSearch = false;
      const query = searchQuery.toLowerCase();

      if (filterBy === "name") {
        matchesSearch = product.name.toLowerCase().includes(query);
      } else if (filterBy === "tag") {
        matchesSearch =
          product.tags &&
          product.tags.some((tag) => tag.toLowerCase().includes(query));
      }

      // Exact match for category (unless "All" is selected)
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory, filterBy]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filterBy,
    setFilterBy,
    categories,
    filteredProducts,
  };
};
