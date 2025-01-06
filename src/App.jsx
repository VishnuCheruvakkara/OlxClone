
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import SellProduct from './pages/Sell_product/SellProduct'
import ProductDetailPage from "./pages/product-detail-page/ProductDetailPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sell-product' element={<SellProduct />} />
          <Route path='/product-details/:productId' element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App