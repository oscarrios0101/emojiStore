import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ShowMoreProducts from "../components/ui/ShowMoreProducts";

const Home = () => {
  const { products, isLoading } = useProducts();
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
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <ShowMoreProducts />
    </main>
  );
};

export default Home;
