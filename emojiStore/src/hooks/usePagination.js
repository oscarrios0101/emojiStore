import { useState, useMemo, useEffect } from "react";

export const usePagination = (items = [], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 if the items array changes (e.g. searching/filtering).
  // Example: If a user searches for "smile" and the results change, we reset to the first page of results.
  useEffect(() => {
    setCurrentPage(1);
  }, [items, itemsPerPage]);

  // Calculate pagination derived state.
  // Example: With 25 items and 10 items per page:
  // - totalPages will be 3 (Math.ceil(25/10))
  // - On page 2, startIndex is 10, endIndex is 20.
  // useMemo is used here to "memoize" (cache) these calculations.
  // The logic inside this function will ONLY run if 'items', 'currentPage', or 'itemsPerPage' changes.
  // If the component re-renders for other reasons, useMemo returns the previously calculated result instantly.
  const { currentItems, totalPages, hasNextPage, hasPrevPage } = useMemo(() => {
    // Calculate the total number of pages required.
    const totalPages = Math.ceil(items.length / itemsPerPage);
    // Calculate the starting index. We subtract 1 from currentPage because arrays are 0-indexed.
    // Multiplying by itemsPerPage calculates how many items to "skip" from previous pages.
    // Example: For Page 2 with 10 items/page, we skip (2-1)*10 = 10 items.
    const startIndex = (currentPage - 1) * itemsPerPage;
    // Calculate the ending index for the slice (exclusive).
    const endIndex = startIndex + itemsPerPage;
    // Get the items for the current page by slicing the array.
    const currentItems = items.slice(startIndex, endIndex);

    return {
      currentItems,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    };
  }, [items, currentPage, itemsPerPage]);

  // Navigate to the next page only if there is a next page.
  // Example: If currentPage is 1 and totalPages is 3, this updates currentPage to 2.
  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (hasPrevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
  };
};
