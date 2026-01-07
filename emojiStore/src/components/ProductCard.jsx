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
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col items-center text-center cursor-pointer">
      <span className="text-4xl mb-2">{product.emoji}</span>
      <h2 className="text-slate-100 font-semibold">{product.name}</h2>
      <p className="text-slate-400">${product.price}</p>
      <div className="flex items-center gap-3 my-3">
        <button
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className="w-8 h-8 flex items-center justify-center bg-slate-800 text-slate-100 rounded hover:bg-slate-700 border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -
        </button>
        <span className="text-slate-100 font-medium w-4 text-center">
          {quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="w-8 h-8 flex items-center justify-center bg-slate-800 text-slate-100 rounded hover:bg-slate-700 border border-slate-700"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full py-2 rounded border border-sky-400 text-sky-400 font-bold hover:bg-slate-700 transition-colors mt-2"
      >
        Add {quantity > 1 ? `${quantity} ` : ""}to Cart
      </button>
    </div>
  );
};

export default ProductCard;
