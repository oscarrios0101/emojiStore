import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import { useProducts } from "../hooks/useProducts";

const AppContent = () => {
  const { isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="text-slate-100 text-center pt-20 bg-slate-950 min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-slate-950 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppContent;
