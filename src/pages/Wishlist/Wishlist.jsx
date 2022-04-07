import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import { useWishlist } from "../../Context/wishlist-context";
import getDiscount from "../../components/Discount/Discount";
import { useAuth } from "../../Context/auth-Context";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import WishlistCard from "../../components/WishlistCard/WishlistCard";

const Wishlist = () => {
  const { authToken } = useAuth();
  const { wishlistItems, setWishlistItems } = useWishlist();
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: authToken,
        },
      });
      setWishlistItems(response.data.wishlist);
    })();
  }, []);
  return (
    <div className="wishlist__main">
      <div className="wishlist__heading">Your Wishlist</div>
      {wishlistItems.length > 0 ? (
        <div className="wishlist__products">
          {wishlistItems.map((product) => {
            return <WishlistCard product={product} />;
          })}
        </div>
      ) : (
        <div className="wishlist__empty">
          Nothing Here :( add some items and Come Back
        </div>
      )}
    </div>
  );
};

export default Wishlist;
