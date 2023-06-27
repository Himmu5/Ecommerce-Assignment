import { Route, Routes } from "react-router-dom";
import MainContant from "./Components/Pages/Products/AllProducts.Page";
import Footer from "./Components/UI-Component/Footer";
import Nav from "./Components/UI-Component/Nav";
import ProductDetailPage from "./Components/Pages/Products/ProductDetail.Page";
import CartProvider from "./Providers/CartProvider";
import CartPage from "./Components/Pages/Cart/Cart.page";

function App() {
  return (
    <div >
      <CartProvider>
      <Nav />
        <Routes>
          <Route path="/" element={<MainContant />} />
          <Route path="/ProductDetail/:id" element={<ProductDetailPage />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
