import { Routes,Route } from "react-router-dom"
import Shop from "./pages/Shop"
import AddProduct from "./pages/AddProduct"
import Layout from "./components/Layout"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Shop/>}/>
          <Route path="addproduct" element={<AddProduct/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
