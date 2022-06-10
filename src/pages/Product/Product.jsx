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
  const { productData, searchFilterString,pageNumbers,setPageNumbers } = useProductList();
  const { wishlistItems, wishlistCount, addToWishlist } = useWishlist();
  const { cartCount, cartItems, addToCart } = useCart();
  const { foundUser } = useAuth();
  const prod = productData;
  const filterData = funcFilter(prod);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);
  
  useEffect(() => {
    const numberOfPages = () => Math.ceil(filterData.length / 4);
    for (let x = 1; x <= numberOfPages(); x++) {
      setPageNumbers((prev) => [...prev, x]);
    }
    
  },[])
  useEffect(() => {
    setPageNumbers([]);
    const numberOfPages = () => Math.ceil(filterData.length / 4);
    for (let x = 1; x <= numberOfPages(); x++) {
      setPageNumbers((prev)=>[...prev,x])
    }
  }, [state,productData])

  return (
    <main className="product_page_main">
      <div className="main__container">
        <Filter prod={prod} />
        <div className="products">
          {filterData.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          }).slice(start,end)}
        </div>
      </div>
      <ul className="pagination__container rounded-xl txt-main-white p-8 h5 flex justify-center ">
        <span className="page__previous pointer txt--primary " onClick={() => { if (start >= 4) { setStart(start - 4); setEnd(end - 4) } }}>&lt; </span>
       
        {
          [...pageNumbers].map((page,index) => {
            return (
              <li
                className="page__number"
                onClick={() => {
                  setStart(index);
                  setEnd(index+4);
                }}
              >
                {page}
              </li>
            );
          })
        }
        <span className="page__next pointer txt--primary" onClick={() => { if (end <= 9) { setStart(start + 4); setEnd(end + 4) } }}>&gt;</span>
      </ul>
    </main>
  );
};

export default Product;
