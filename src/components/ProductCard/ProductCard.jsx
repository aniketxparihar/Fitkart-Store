import React,{useEffect, useState} from "react";
import getDiscount from "../Discount/Discount";
import { useAuth } from "../../Context/auth-Context";
import { Link } from "react-router-dom";
import axios from "axios";
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
  useEffect(() => wishlistItems.some((item)=>item._id===product._id)===true?setAddingWishlist("favorite"):null, []);
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
    setTimeout(() => setAdding("Add to cart"), 1000);
    setCartItems(
      response.data.cart.reduce((filter, current) => {
        if (!filter.find((item) => item._id === current._id)) {
          return filter.concat([current]);
        } else return filter;
      }, [])
    );
  };
 
  return (
    <div
      
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
          onClick={() => { addToWishlist(); setAddingWishlist("favorite");}}
          className="liked material-icons pointer txt-main-white"
          style={{color:addingWishlist==="favorite"?"red":"white"}}
        >
          {addingWishlist}
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
          onClick={() => { addToCart(); setAdding("Adding to cart..."); }}
        >
          <i className="button__icon material-icons">shopping_cart</i>
         {adding}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
