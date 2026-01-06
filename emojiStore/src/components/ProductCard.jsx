const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col items-center text-center  cursor-pointer">
      <span className="text-4xl mb-2">{product.emoji}</span>
      <h2 className="text-slate-100 font-semibold">{product.name}</h2>
      <p className="text-slate-400">${product.price}</p>
      <button className="w-full py-2 rounded border border-sky-400 text-sky-400 font-bold hover:bg-slate-700 transition-colors mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
