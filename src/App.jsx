import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import Layout from "./components/Layout"
import Shop from "./pages/Shop"
import ProductPage from "./pages/ProductPage"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="addproduct" element={<AddProduct/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="productpage" element={<ProductPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
