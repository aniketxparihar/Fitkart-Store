import React,{useState,useEffect} from 'react'
import "./Wishlist.css"
import { useWishlist } from '../../Context/wishlist-context';
import getDiscount from '../../components/Discount/Discount';
import { useAuth } from '../../Context/auth-Context';
import axios from "axios";
import ProductCard from '../../components/ProductCard/ProductCard';
import WishlistCard from '../../components/WishlistCard/WishlistCard';


const Wishlist = () => {
  
  return (
      <div className="wishlist__main">
         
      </div>
  );
}

export default Wishlist