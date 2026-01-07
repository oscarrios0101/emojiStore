import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const { cart, addToCart } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-slate-950 min-h-screen p-8 pb-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-100 mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-slate-400 text-center py-12 border border-slate-800 rounded-lg bg-slate-900">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-slate-900 p-4 rounded-lg border border-slate-800"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <div>
                    <h3 className="text-slate-100 font-semibold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-slate-400">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-slate-950 rounded-lg p-1 border border-slate-800">
                    <button
                      onClick={() => addToCart(item, -1)}
                      disabled={item.quantity <= 1}
                      className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="text-slate-100 font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-slate-100 font-medium w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-end mt-8 pt-8 border-t border-slate-800">
              <div className="text-right">
                <p className="text-slate-400 mb-1">Total</p>
                <p className="text-3xl font-bold text-sky-400">
                  ${cartTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
