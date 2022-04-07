import React from 'react'
import { useWishlist } from '../../Context/wishlist-context';
import { useAuth } from "../../Context/auth-Context";
import getDiscount from '../Discount/Discount';
import { Link } from 'react-router-dom';
import axios from "axios";

const WishlistCard = (product) => {
   
    return (
      <div
        key={product.product._id}
        className="card__wrapper flex rounded-xl flex-col m-8 box-shadow"
      >
       
      </div>
    );
}

export default WishlistCard