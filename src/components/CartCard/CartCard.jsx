import React,{useState} from "react";
import getDiscount from "../Discount/Discount";
import { useCart } from "../../Context/cart-context";
import axios from "axios";
import { useAuth } from "../../Context/auth-Context";
import { useWishlist } from "../../Context/wishlist-context";

const CartCard = (product) => {
  const { authToken } = useAuth();
  const { cartItems, setCartItems } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const addToWishlist = async () => {
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product: product.product,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    setWishlistItems(response.data.wishlist);
  };

  const removeCartItem = async (product) => {
    const response = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    setCartItems(response.data.cart);
  };
  
  const decreaseCartItem = async (product) => {
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    setCartItems(response.data.cart);
  };

  const increaseCartItem = async (product) => {
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    setCartItems(response.data.cart);
  };
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
          <p className="txt-4xl txt-gray-200">{product.title}</p>
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
              onClick={() => {
                if (product.product.qty > 1) decreaseCartItem(product.product);
                else removeCartItem(product.product);
              }}
            >
              -
            </p>
            <p className="quantity txt-2xl bold  txt-gray-200 p-4 rounded-s ">
              {product.product.qty}
            </p>
            <p
              className="subtract txt-4xl bold m-2 bg-main-white rounded-full flex justify-center bg-pink-50 align-center pointer"
              onClick={() => {
                increaseCartItem(product.product);
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
              onClick={() => {
                removeCartItem(product.product);
              }}
            >
              Remove
            </button>
          </div>
          <div className="width-half m-2">
            <button
              className="button width-full  bg-gray-300  p-4 txt-2xl txt-bold txt-main-black rounded-xl flex justify-center align-center"
              onClick={() => {
                addToWishlist();
                removeCartItem(product.product);
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
