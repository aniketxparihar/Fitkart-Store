import React from "react";
import getDiscount from "../Discount/Discount";
import { useAuth } from "../../Context/auth-Context";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCurrentProduct } from "../../Context/CurrentProduct-Context";
import { useWishlist } from "../../Context/wishlist-context";

const ProductCard = ({ product }) => {
  const { authToken } = useAuth();
  const { currentProductHandler } = useCurrentProduct();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const addToWishlist = async () => {
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product: product,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    setWishlistItems(response.data.wishlist);
  };
  const addToCart = async () => {
    const response = await axios.post(
      "/api/user/cart",
      {
        product: product,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
  };
  return (
    <div
      key={product._id}
      className="card__wrapper flex rounded-xl flex-col m-8 box-shadow"
    >
      <div className="card__header flex flex-col relative">
        <img
          className=" card__image--tall pointer"
          src={product.image}
          alt=""
        />
        <div className="card__headings h3 txt-gray-50">{product.title}</div>
        <div className="card__headings h3 txt-gray-50">{product.rating}⭐</div>
      </div>
      <div className="card__footer  m-2 flex align-center ">
        <p className="txt-4xl bold txt-gray-100 m-4">₹{product.price}</p>
        <p className="txt-4xl bold m-0 txt-gray-400 line-through">
          ₹{product.actual_price}
        </p>
        <p className="txt-4xl bold m-4 txt-green-500">
          - {getDiscount(product.price, product.actual_price)}%
        </p>
        <i
          onClick={() => addToWishlist()}
          className="liked material-icons pointer txt-main-white"
        >
          favorite_border
        </i>
      </div>
      <div className="procard__links p-4 align-center flex">
        <Link
          to={`/Product/${product._id}`}
          className="button p-4 txt-2xl width-full txt-bold bg--primary  rounded-xl flex justify-center align-center"
          onClick={currentProductHandler(product)}
        >
          Buy Now
        </Link>
      </div>
      <div className="card__links p-4 align-center flex">
        <button
          className="button p-4 txt-2xl width-full txt-bold bg-main-black border--primary txt--primary b-1 border-solid  rounded-xl flex justify-center align-center"
          onClick={() => addToCart()}
        >
          <i className="button__icon material-icons">shopping_cart</i>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
