import { BrowserRouter, Routes, Route } from "react-router";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="bg-slate-950 min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
