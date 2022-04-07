import React from "react";
import { useWishlist } from "../../Context/wishlist-context";
import { useAuth } from "../../Context/auth-Context";
import getDiscount from "../Discount/Discount";
import { Link } from "react-router-dom";
import axios from "axios";

const WishlistCard = (product) => {
  const { authToken } = useAuth();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const removeFromWishlist = async (product) => {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    setWishlistItems(response.data.wishlist);
  };
  const addToCart = async (product) => {
    const response = await axios.post(
      "/api/user/cart/",
      {
        product: product,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    removeFromWishlist(product);
  };
  return (
    <div
      key={product.product._id}
      className="card__wrapper flex rounded-xl flex-col m-8 box-shadow"
    >
      <div className="card__header flex flex-col relative">
        <img
          className=" card__image--tall pointer"
          src={product.product.image}
          alt=""
        />
        <div className="card__headings h3 txt-gray-50">
          {product.product.title}
        </div>
        <div className="card__headings h3 txt-gray-50">
          {product.product.rating}⭐
        </div>
      </div>
      <div className="card__footer  m-2 flex align-center ">
        <p className="txt-4xl bold txt-gray-100 m-4">
          ₹{product.product.price}
        </p>
        <p className="txt-4xl bold m-0 txt-gray-400 line-through">
          ₹{product.product.actual_price}
        </p>
        <p className="txt-4xl bold m-4 txt-green-500">
          - {getDiscount(product.product.price, product.product.actual_price)}%
        </p>
        <i
          onClick={() => removeFromWishlist(product.product)}
          className="liked material-icons pointer txt-red-500"
        >
          favorite
        </i>
      </div>
      <div id="buynow" className="card__links p-4 align-center flex">
        <Link
          to={`/Product/${product.product._id}`}
          className="button p-4 txt-2xl width-full txt-bold bg--primary  rounded-xl flex justify-center align-center"
        >
          Buy Now
        </Link>
      </div>
      <div id="addtocart" className="card__links p-4 align-center flex">
        <button
          className="button p-4 txt-2xl width-full txt-bold bg-main-black border--primary txt--primary b-1 border-solid  rounded-xl flex justify-center align-center"
          onClick={() => addToCart(product.product)}
        >
          <i className="button__icon material-icons">shopping_cart</i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
