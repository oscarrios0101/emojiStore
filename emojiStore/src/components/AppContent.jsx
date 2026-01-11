import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import Goals from "./Goals";
import { useProducts } from "../hooks/useProducts";

const AppContent = () => {
  const { isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 pt-20 text-center text-slate-100">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen bg-slate-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppContent;
