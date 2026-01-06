import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, isLoading } = useProducts();
  if (isLoading) {
    return (
      <div>
        <div>content loading...</div>
      </div>
    );
  }

  return (
    <main className="bg-slate-950 min-h-screen">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-center w-full text-3xl font-bold py-3 text-slate-100">
          emojiStore
        </h1>
        <h2 className="text-slate-100">The only store with very fake items</h2>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
