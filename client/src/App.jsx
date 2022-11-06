import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleProduct from "./components/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchProducts from './pages/SearchProducts'

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<SearchProducts />}/>
        <Route path="/product" element={<SingleProduct />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </>
  );
};

export default App;