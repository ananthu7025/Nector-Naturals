import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Auth from './pages/auth/Auth';
import ConfirmPassword from './pages/auth/ConfirmPassword';
import ForgotPassword from './pages/auth/ForgotPassword';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import MyOrder from './pages/order/MyOrder';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/confirm" element={<ConfirmPassword/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/forgetpass" element={<ForgotPassword/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/myorder" element={<MyOrder/>} />
          </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App