import React from 'react';
import "./Product.css"
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import { useState,useEffect,useReducer } from 'react';
import { useWishlist } from '../../Context/wishlist-context';
import { useCart } from '../../Context/cart-context';
import { useProductList } from '../../Context/productList-context';
import { useAuth } from '../../Context/auth-Context';
import Filter from '../../components/Filter/Filter';
import funcFilter from "../../components/Filter/FilterFunc";
import { useFilter } from '../../Context/Filter-Context';
import getDiscount from '../../components/Discount/Discount';
import ProductCard from '../../components/ProductCard/ProductCard';



const Product = () => {
  
  return (
    <>
      
    </>
  );
}


export default Product