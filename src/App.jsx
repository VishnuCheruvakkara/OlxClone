
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import SellProduct from './pages/Sell_product/SellProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sell-product' element={<SellProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App