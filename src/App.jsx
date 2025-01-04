
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import SelectSellCategory from "./pages/Select_Sell_Category/SelectSellCategory"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/select-sell-category' element={<SelectSellCategory/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
