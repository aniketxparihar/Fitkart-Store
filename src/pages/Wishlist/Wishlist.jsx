import React, { useState, useEffect } from "react";
import axios from "axios";


import "./Wishlist.css";
import { useWishlist } from "../../Context/wishlist-context";
import getDiscount from "../../components/Discount/Discount";
import { useAuth } from "../../Context/auth-Context";
import ProductCard from "../../components/ProductCard/ProductCard";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { Link } from "react-router-dom";
import empty from "./empty.png";
const Wishlist = () => {
  const { wishlistItems} = useWishlist();

  return (
    <div className="wishlist__main">
      <Link
        to="/Product"
        className="back button m-8 p-4 txt-2xl txt-bold bg-violet-400 rounded-m"
      >
        Back
      </Link>
      <div className="wishlist__heading">Your Wishlist</div>
      {wishlistItems.length > 0 ? (
        <div className="wishlist__products">
          {wishlistItems.map((product) => {
            return <WishlistCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <div className="wishlist__empty">
          <img src={empty} alt="" />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
