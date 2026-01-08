import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ShowMoreProducts from "../components/ui/ShowMoreProducts";

const Home = () => {
  const { products, isLoading } = useProducts();
  if (isLoading) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="text-slate-100 text-xl font-bold">
          content loading...
        </div>
      </div>
    );
  }

  return (
    <main className="bg-slate-950 min-h-screen">
      <header className="flex flex-col items-center justify-start border border-red-800 py-4 overflow-hidden">
        <h1 className="text-center w-full text-3xl font-bold text-slate-100 max-w-full">
          emojiStore
        </h1>
        <h2 className="text-slate-100 pt-1 max-w-full">
          The only store with very fake items
        </h2>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <ShowMoreProducts />
    </main>
  );
};

export default Home;
