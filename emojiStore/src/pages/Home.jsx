import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { products, isLoading } = useContext(ProductContext);
  console.log(products, isLoading);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-xl font-medium text-slate-400 animate-pulse">
          content loading...
        </div>
      </div>
    );
  }

  return (
    <main>
      <header>
        <h1>The only store with very fake items</h1>
      </header>
      <section id="product-grid">
        {products.slice(0, 10).map((product) => (
          <div key={product.id} className="p-4 border border-slate-700 rounded">
            {product.emoji} {product.name} - ${product.price}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
