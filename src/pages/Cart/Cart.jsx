import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useProductList } from "../../Context/productList-context";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import axios from "axios";
import { useAuth } from "../../Context/auth-Context";
import CartCard from "../../components/CartCard/CartCard";
import getDiscount from "../../components/Discount/Discount";
import CartBill from "../../components/CartBill/CartBill";

const Cart = () => {
  
  return (
    <div className="cart__main">
     
    </div>
  );
};

export default Cart;
