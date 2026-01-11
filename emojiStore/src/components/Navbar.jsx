import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:h-16 sm:flex-row sm:gap-0 sm:py-0">
        <Link
          to="/"
          className="text-xl font-bold text-slate-100 transition-colors hover:text-sky-400"
        >
          emojiStore
        </Link>
        <Link
          to="/goals"
          className="font-medium text-slate-100 transition-colors hover:text-sky-400"
        >
          Goals
        </Link>
        <Link
          to="/checkout"
          className="font-medium text-slate-100 transition-colors hover:text-sky-400"
        >
          Cart 🛒 ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
