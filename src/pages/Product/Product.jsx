import React from "react";
import "./Product.css";
import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { useWishlist } from "../../Context/wishlist-context";
import { useCart } from "../../Context/cart-context";
import { useProductList } from "../../Context/productList-context";
import { useAuth } from "../../Context/auth-Context";
import Filter from "../../components/Filter/Filter";
import funcFilter from "../../components/Filter/FilterFunc";
import { useFilter } from "../../Context/Filter-Context";
import getDiscount from "../../components/Discount/Discount";
import ProductCard from "../../components/ProductCard/ProductCard";

const Product = () => {
  const { state, dispatch } = useFilter();
  const { productData, searchFilterString } = useProductList();
  const { wishlistItems, wishlistCount, addToWishlist } = useWishlist();
  const { cartCount, cartItems, addToCart } = useCart();
  const { foundUser } = useAuth();
  const prod = productData;
  const filterData = funcFilter(prod);

  return (
        <main className="product_page_main">
          <div className="main__container">
            <Filter prod={prod} />
            <div className="products">
              {filterData.map((product) => {
                return <ProductCard product={product} />;
              })}
            </div>
          </div>
          
        </main>
  );
};

export default Product;
