import React from "react";
import getDiscount from "../Discount/Discount";
import { useAuth } from "../../Context/auth-Context";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCurrentProduct } from "../../Context/CurrentProduct-Context";
import { useWishlist } from "../../Context/wishlist-context";

const ProductCard = ({ product }) => {
 
  return (
    <div
      key={product._id}
      className="card__wrapper flex rounded-xl flex-col m-8 box-shadow"
    >
    
    </div>
  );
};

export default ProductCard;
