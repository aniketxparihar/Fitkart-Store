import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { getDiscount } from "../../utils/discountUtil";
import { notify } from "../../utils/toastUtil";

import { useCart } from "../../Context/cart-context";
import { useAuth } from "../../Context/auth-Context";
import { useWishlist } from "../../Context/wishlist-context";
import { removeFromCart } from "../../Services/CartService";
import { addToWishlist } from "../../Services/WishlistService";
import { increaseCartItem, decreaseCartItem } from "../../Services/CartService";

const CartCard = (product) => {
  const { authToken } = useAuth();
  const { cartItems, setCartItems } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();

  const itemCount = cartItems.filter(
    (value) => value._id === product.product._id
  ).length;
  return (
    <div className="card__wrapper--horizontal  flex flex-col m-8 bg--main-black">
      <div className="card__header--row flex flex-col relative">
        <img
          className="card__image--horizontal pointer"
          src={product.product.image}
          alt=""
        />
        <div className="card__headings--horizontal p-4">
          <p className="txt-4xl txt-gray-200">{product.product.title}</p>
          <div className="card__footer flex align-center ">
            <p className="txt-4xl bold  txt-gray-200 ">
              ₹{product.product.price}
            </p>
            <p className="txt-4xl bold m-2 txt-gray-400 line-through">
              ₹{product.product.actual_price}
            </p>
            <p className="txt-3xl bold m-2 txt-yellow-500">
              (
              {getDiscount(product.product.price, product.product.actual_price)}
              % Off)
            </p>
          </div>
          <div className="card__footer flex align-center ">
            <p
              className="add txt-4xl bold m-2 txt-gray-800  rounded-full flex justify-center align-center bg-pink-50 pointer"
              onClick={async () => {
                if (product.product.qty >= 2) {
                  const res = await decreaseCartItem(authToken,product.product);
                  setCartItems(res.data.cart);
                }
                else {
                  notify("0 items not allowed","error")
                }
              }}
            >
              -
            </p>
            <p className="quantity txt-2xl bold  txt-gray-200 p-4 rounded-s ">
              {product.product.qty}
            </p>
            <p
              className="subtract txt-4xl bold m-2 bg-main-white rounded-full flex justify-center bg-pink-50 align-center pointer"
              onClick={async () => {
                const res = await increaseCartItem(authToken,product.product);;
                setCartItems(res.data.cart);
              }}
            >
              +
            </p>
          </div>
        </div>
      </div>
      <div className="card__footer--horizontal flex align-center">
        <div className="card__links p-2 align-center flex">
          <div className="width-half m-2">
            <button
              className="button width-full  bg-gray-300 p-4 txt-2xl txt-bold txt-main-black rounded-xl flex justify-center align-center"
              onClick={async () => {
                const res2=await removeFromCart(authToken, product.product)
                await setCartItems(res2.data.cart);
                notify("Item Removed", "success");
              }}
            >
              Remove
            </button>
          </div>
          <div className="width-half m-2">
            <button
              className="button width-full  bg-gray-300  p-4 txt-2xl txt-bold txt-main-black rounded-xl flex justify-center align-center"
              onClick={async () => {
                const res1=await addToWishlist(authToken, product.product);
                await setWishlistItems(res1.data.wishlist);
                const res2=await removeFromCart(authToken, product.product)
                await setCartItems(res2.data.cart);
                notify("Item Added to wishlist", "success");
              }}
            >
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
