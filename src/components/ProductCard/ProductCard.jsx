import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import "./ProductCard.css";
import { getDiscount } from "../../utils/discountUtil";
import { notify } from "../../utils/toastUtil";
import { useAuth } from "../../Context/auth-Context";
import {
  addToWishlist,
  removeFromWishlist,
  getAllWishlist,
} from "../../Services/WishlistService";
import {
  addToCart,
  removeFromCart,
  getAllCart,
} from "../../Services/CartService";


import { useCurrentProduct } from "../../Context/CurrentProduct-Context";
import { useWishlist } from "../../Context/wishlist-context";
import { useCart } from "../../Context/cart-context";

const ProductCard = ({ product }) => {
  const { authToken } = useAuth();
  const { currentProductHandler } = useCurrentProduct();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const { cartItems, setCartItems } = useCart();
  const [adding, setAdding] = useState("Add to cart");
  const [addingWishlist, setAddingWishlist] = useState("favorite_border");
  useEffect(()=>wishlistItems.some((item)=>item._id===product._id)===true?setAddingWishlist("favorite"):null, []);

  useEffect(() => {
    if (cartItems.some((item) => item._id === product._id))
      setAdding("Remove from cart");
    else setAdding("Add to cart");
  },[])
  const notify = (text, type) => {
    if (type === "success") toast.success(text);
    else toast.error(text);
    };

 
  return (
    <div
      className="card__wrapper flex rounded-xl flex-col m-8 box-shadow"
    >
      <Link
      to={`/Product/${product._id}`}
      onClick={()=>currentProductHandler(product)} className="card__header flex flex-col relative">
        <img
          className=" card__image--tall pointer"
          src={product.image}
          alt=""
        />
        <div className="card__headings h3 txt-gray-50">{product.title}</div>
        <div className="card__headings h3 txt-gray-50">{product.rating}⭐</div>
      </Link>

      <div className="card__footer  m-2 flex align-center ">
        <p className="txt-4xl bold txt-gray-100 m-4">₹{product.price}</p>
        <p className="txt-4xl bold m-0 txt-gray-400 line-through">
          ₹{product.actual_price}
        </p>
        <p className="txt-4xl bold m-4 txt-green-500">
          - {getDiscount(product.price, product.actual_price)}%
        </p>
        <i
          onClick={async () => {
            if(wishlistItems.some((item) => item.id === product.id)){
              const res = await removeFromWishlist(authToken, product);
              setWishlistItems(res.data.wishlist);
              setAddingWishlist("favorite_border");
              notify("Removed from wishlist", "success");
            }
            else {
            const res = await addToWishlist(authToken, product);
             setWishlistItems(res.data.wishlist)
              setAddingWishlist("favorite");
              notify("Added to wishlist","success")
            }
            
          }}
          className="liked material-icons pointer txt-main-white"
          style={{ color: addingWishlist === "favorite" ? "red" : "white" }}
        >
          {addingWishlist}
        </i>
      </div>

      <div className="card__links p-4 align-center flex">
        <button
          className="button p-4 txt-2xl width-full txt-bold bg--primary  rounded-xl flex justify-center align-center"
          onClick={async () => {
            if(cartItems.some((item)=>item._id===product._id)){
            const res = await removeFromCart(authToken, product);
            await setCartItems(res.data.cart);
            setTimeout(() => setAdding("Add to cart"), 1000);
            notify("Removed from cart", "success");
            }
            else {
              setAdding("Adding to cart...");
              const res = await addToCart(authToken, product);
              await setCartItems(res.data.cart);
              setTimeout(() => setAdding("Remove From cart"), 1000);
              notify("Added to cart", "success");
            }
          }}
        >
          <i className="button__icon material-icons">shopping_cart</i>
          {adding}
        </button>
      </div>

     
    </div>
  );
};

export default ProductCard;
