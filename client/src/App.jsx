import React from "react";
import { Route, Routes,  Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleProduct from "./components/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchProducts from './pages/SearchProducts'

const App = () => {
  const user = true;
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products/:category" element={<SearchProducts />}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
        {/* Navigating a user to home if he is already logged in and tries to login again */}
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />}/>
        {/* Same nconditional navigation for register process */}
      </Routes>
    </>
  );
};

export default App;