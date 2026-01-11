import { useState } from "react";
import { useCart } from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex cursor-pointer flex-col items-center rounded-lg border border-slate-800 bg-slate-900 p-4 text-center">
      <span className="mb-2 text-4xl">{product.emoji}</span>
      <h2 className="font-semibold text-slate-100">{product.name}</h2>
      <p className="text-slate-400">
        {`Price: ${new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}`}
      </p>
      <div className="my-3 flex items-center gap-3">
        <button
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          -
        </button>
        <span className="w-4 text-center font-medium text-slate-100">
          {quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="flex h-8 w-8 items-center justify-center rounded border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-auto w-full rounded border border-sky-400 py-2 font-bold text-sky-400 transition-colors hover:bg-slate-700"
      >
        Add {quantity > 1 ? `${quantity} ` : ""}to Cart
      </button>
    </div>
  );
};

export default ProductCard;
