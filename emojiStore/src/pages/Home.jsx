import { useState, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import { usePagination } from "../hooks/usePagination";
import { useProductFilters } from "../hooks/useProductFilters";
import ProductCard from "../components/ProductCard";
import FeaturedItem from "../components/ui/featuredItem";
import Pagination from "../components/Pagination";

const Home = () => {
  const { products, isLoading } = useProducts();
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filterBy,
    setFilterBy,
    categories,
    filteredProducts,
  } = useProductFilters(products);

  const featuredProduct = useMemo(() => {
    if (products.length === 0) return null;
    return products[Math.floor(Math.random() * products.length)];
  }, [products]);

  const {
    currentItems,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
  } = usePagination(filteredProducts, itemsPerPage);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-xl font-bold text-slate-100">
          content loading...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 pb-10">
      <header className="flex flex-col items-center justify-start overflow-hidden border py-4">
        <h1 className="w-full max-w-full text-center text-3xl font-bold text-slate-100">
          emojiStore
        </h1>
        <h2 className="max-w-full pt-1 text-slate-100">
          The only store with very fake items
        </h2>
      </header>
      <FeaturedItem product={featuredProduct} />
      <div className="mx-auto max-w-7xl p-6">
        {/* Filters Toolbar */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search and Filter Type */}
          <div className="flex flex-1 gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-xs rounded border border-slate-700 bg-slate-800 p-2 text-slate-100 placeholder-slate-400"
            />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="rounded border border-slate-700 bg-slate-800 p-2 text-slate-100"
            >
              <option value="name">Name</option>
              <option value="tag">Tag</option>
            </select>
          </div>

          {/* Category and Pagination Controls */}
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded border border-slate-700 bg-slate-800 p-2 text-slate-100"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="rounded border border-slate-700 bg-slate-800 p-2 text-slate-100"
            >
              <option value={6}>6 per page</option>
              <option value={12}>12 per page</option>
              <option value={24}>24 per page</option>
              <option value={48}>48 per page</option>
            </select>
          </div>
        </div>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </main>
  );
};

export default Home;
