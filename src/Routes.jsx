import React from "react";
import {
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home"; 
import Product from "./pages/Product/Product";
import Mockman from "mockman-js";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/AuthPages/Login/Login";
import Signup from "./pages/AuthPages/Signup/Signup";
import ForgotPassword from "./pages/AuthPages/ForgotPassword/ForgotPassword";
import Address from "./pages/Address/Address";
import ProductPage from "./pages/ProductPage/ProductPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthRoute from "./components/AuthRoute/AuthRoute";


const Routes = () => {
  return (
    <RoutesContainer>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:_id" element={<ProductPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Address" element={<Address />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Route>
      <Route element={<AuthRoute />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Route>
      <Route path="/Mockman" element={<Mockman />} />
    </RoutesContainer>
  );
    };
export default Routes;