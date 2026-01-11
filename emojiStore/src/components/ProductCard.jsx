import { useState } from "react";
import { useCart } from "../hooks/useCart";
import Button from "./ui/Button";

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
    <div className="flex flex-col items-center rounded-lg border border-slate-800 bg-slate-900 p-4 text-center">
      <span className="mb-2 text-4xl">{product.emoji}</span>
      <h2 className="font-semibold text-slate-100">{product.name}</h2>
      <p className="text-slate-400">
        {`Price: ${new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}`}
      </p>
      <div className="my-3 flex items-center gap-3">
        <Button
          variant="icon"
          onClick={handleDecrement}
          disabled={quantity <= 1}
        >
          -
        </Button>
        <span className="w-4 text-center font-medium text-slate-100">
          {quantity}
        </span>
        <Button variant="icon" onClick={handleIncrement}>
          +
        </Button>
      </div>
      <Button onClick={handleAddToCart} className="mt-auto">
        Add {quantity > 1 ? `${quantity} ` : ""}to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
