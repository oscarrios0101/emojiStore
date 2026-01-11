import { useCart } from "../hooks/useCart";
import { Link } from "react-router";

const Checkout = () => {
  const { cart, addToCart, removeFromCart, substractFromCart } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="pt-1">
      <section className="mx-auto mt-15 flex h-[80vh] w-[80vw] flex-col items-center justify-start bg-slate-900 py-3.5 text-center text-slate-100">
        {cart.length === 0 && <div>EMPTY CART!</div>}
        {cart.map((item) => (
          <div
            key={item.id}
            className="mb-2 flex w-full flex-col items-center gap-4 border-y-2 border-slate-800 p-2 md:grid md:grid-cols-6"
          >
            <div className="text-center whitespace-normal">{item.name}</div>
            <div>{item.emoji}</div>
            <div>
              {`item price : ${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.price)} `}
            </div>
            <div>amount: {item.quantity}</div>
            <div>
              {`total: ${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(item.price * item.quantity)}`}
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <button
                className="rounded bg-slate-700 px-2 hover:bg-slate-600"
                onClick={() => substractFromCart(item)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="rounded bg-slate-700 px-2 hover:bg-slate-600"
                onClick={() => addToCart(item)}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item)}>🗑️</button>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="mt-2 w-1/2 text-center">
            your total is{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(cartTotal)}
            <Link
              to="/success"
              className="mt-2 block w-full rounded border border-sky-400 py-2 font-bold text-sky-400 transition-colors hover:bg-slate-700"
            >
              Proceed to Payment
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Checkout;
