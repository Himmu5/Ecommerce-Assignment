import { Route, Routes } from "react-router-dom";
import MainContant from "./Components/Pages/Products/AllProducts.Page";
import Footer from "./Components/UI-Component/Footer";
import Nav from "./Components/UI-Component/Nav";
import ProductDetailPage from "./Components/Pages/Products/ProductDetail.Page";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<MainContant />} />
        <Route path="/ProductDetail/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
