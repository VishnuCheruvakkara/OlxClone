import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import SellProduct from './pages/Sell_product/SellProduct';
import ProductDetailPage from './pages/product-detail-page/ProductDetailPage';
import { ToastContainer } from 'react-toastify';
import { auth } from './firebase/FireBase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);
  
  // Move the `useNavigate` hook inside the BrowserRouter component
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Correct usage inside BrowserRouter

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [navigate]);



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell-product" element={user ? <SellProduct /> : <Home />} />
      <Route path="/product-details/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
