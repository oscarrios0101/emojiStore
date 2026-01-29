const FeaturedItem = ({ product }) => {
  if (!product) return null;

  return (
    <div className="relative mx-auto max-w-7xl border-4 border-sky-400 bg-slate-900 p-10 text-center shadow-2xl">
      <div className="absolute -top-8 -right-4 flex h-32 w-32 rotate-12 items-center justify-center rounded-full border-4 border-slate-900 bg-red-500 text-4xl font-black text-white shadow-xl">
        -50%!
      </div>
      <h2 className="mb-4 text-6xl font-black tracking-tighter text-slate-100 uppercase">
        Featured <span className="text-sky-400">Item</span>
      </h2>
      <div className="flex flex-col items-center gap-4">
        <span className="text-8xl">{product.emoji}</span>
        <p className="text-4xl font-bold text-slate-100">{product.name}</p>
        <p className="text-2xl font-bold text-slate-400">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
};

export default FeaturedItem;
