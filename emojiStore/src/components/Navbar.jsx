import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-slate-100 hover:text-sky-400 transition-colors"
        >
          emojiStore
        </Link>
        <Link
          to="/checkout"
          className="text-slate-100 hover:text-sky-400 font-medium transition-colors"
        >
          Cart 🛒 ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
