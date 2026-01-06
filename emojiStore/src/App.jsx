import { BrowserRouter, Routes, Route } from "react-router";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <div>
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
