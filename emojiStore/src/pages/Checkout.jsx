import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-10">
      <section className="bg-slate-900 w-[80vw] flex flex-col items-center justify-center text-center text-slate-100 py-3.5 h-[80vh] mx-auto">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border border-red-800 w-full flex flex-row justify-between items-center p-2 mb-2"
          >
            <div className="text-left">{item.name}</div>
            <div>{item.emoji}</div>
            <div>${item.price}</div>
            <div>amount: {item.quantity}</div>
            <div>total: ${item.price * item.quantity}</div>
            <div className="flex items-center gap-2">
              <button
                className="px-2 bg-slate-700 rounded hover:bg-slate-600"
                onClick={() => removeFromCart(item)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 bg-slate-700 rounded hover:bg-slate-600"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Checkout;
