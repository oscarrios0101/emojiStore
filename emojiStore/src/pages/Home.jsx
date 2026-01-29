import { useState, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import { usePagination } from "../hooks/usePagination";
import ProductCard from "../components/ProductCard";
import Button from "../components/ui/Button";
import FeaturedItem from "../components/ui/featuredItem";
import Pagination from "../components/Pagination";

const Home = () => {
  const { products, isLoading } = useProducts();
  const [itemsPerPage, setItemsPerPage] = useState(12);

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
    goToPage,
    nextPage,
    prevPage,
  } = usePagination(products, itemsPerPage);

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
        <div className="mb-4 flex justify-end">
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              goToPage(1); // Reset to first page when changing items per page
            }}
            className="rounded border border-slate-700 bg-slate-800 p-2 text-slate-100"
          >
            <option value={6}>6 per page</option>
            <option value={12}>12 per page</option>
            <option value={24}>24 per page</option>
            <option value={48}>48 per page</option>
          </select>
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
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </main>
  );
};

export default Home;
