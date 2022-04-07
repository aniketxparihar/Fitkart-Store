import React from "react";
import getDiscount from "../Discount/Discount";
import { useCart } from "../../Context/cart-context";
import axios from "axios";
import { useAuth } from "../../Context/auth-Context";
import { useWishlist } from "../../Context/wishlist-context";

const CartCard = (product) => {
  
  return (
    <div className="card__wrapper--horizontal  flex flex-col m-8 bg--main-black">
      
    </div>
  );
};

export default CartCard;
