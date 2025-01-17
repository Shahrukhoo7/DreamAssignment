// src/components/Routing.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Cart from '../components/Cart';
import Blog from '../components/Blog';
import Products from '../components/Products';
// import Navbar from '../components/Navbar';
import Footer from '../components/layouts/Footer';
import PricingPage from '../components/PricingPage';
import CustomNavbar from '../components/CustomNavbar';

const Routing = () => {
  const { isAuthenticated } = useSelector((state) => state.auth); // Access auth state

  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products" element={<Products />} />
        <Route path="pricing" element={<PricingPage/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="cart" element={isAuthenticated ? <Cart /> : <Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default Routing;