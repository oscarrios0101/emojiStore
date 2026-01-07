import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import AppContent from "./components/AppContent";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
