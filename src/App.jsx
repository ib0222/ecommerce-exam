import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Favorites from "./pages/Favorites"
import Wishlist from "./pages/Wishlist"
import { CardContextProvider } from "./context/CardContext";
function App() {
  return (
    <>
      <CardContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="shop" element={<Shop />} />
            <Route path="productpage" element={<ProductPage />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </CardContextProvider>
    </>
  );
}

export default App;
