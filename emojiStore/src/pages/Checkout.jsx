import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const { cart, addToCart, removeFromCart, substractFromCart } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-10">
      <section className="bg-slate-900 w-[80vw] flex flex-col items-center justify-center text-center text-slate-100 py-3.5 h-[80vh] mx-auto">
        {cart.length === 0 && <div>EMPTY CART!</div>}
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 gap-4 border border-red-800 w-full items-center p-2 mb-2"
          >
            <div className=" whitespace-normal text-center">{item.name}</div>
            <div>{item.emoji}</div>
            <div>${item.price}</div>
            <div>amount: {item.quantity}</div>
            <div>total: ${item.price * item.quantity}</div>
            <div className="flex items-center justify-center gap-2">
              <button
                className="px-2 bg-slate-700 rounded hover:bg-slate-600"
                onClick={() => substractFromCart(item)}
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
              <button onClick={() => removeFromCart(item)}>🗑️</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Checkout;
