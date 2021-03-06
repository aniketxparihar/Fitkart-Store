import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useCurrentProduct } from "../../Context/CurrentProduct-Context";
import getDiscount from "../../components/Discount/Discount";
import "./ProductPage.css";
import { useAuth } from "../../Context/auth-Context";
import Review from "../../components/Review/Review";
import { useCart } from "../../Context/cart-context";
import { notify } from "../../utils/toastUtil"; 
import { addToCart, removeFromCart } from "../../Services/CartService";

const ProductPage = () => {
  const { _id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});
  const [newReview, setNewReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const { foundUser,authToken } = useAuth();
  const { cartItems, setCartItems } = useCart()
  const [addToCartButton, setAddToCartButton] = useState("Add to cart")
  const { currentProduct } = useCurrentProduct();
  useEffect(() => {
    
    (async () => {
      try {
        const response = await axios.get(`/api/products/${_id}`);
        if (response.status === 200) {
          setSingleProductData(response.data.product);
        } else {
          throw new Error(response.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  useEffect(() => {
     if (cartItems.some((item) => item._id === currentProduct._id))
       setAddToCartButton("Remove from cart");
     else setAddToCartButton("Add to cart");
 }, []);
  return (
    <div>
      <main>
        {Object.entries(singleProductData).length ? (
          <div className="product__page__main__container bg-main-black">
            <div className="p-2 product__metadata__wrapper">
              <div className="flex flex-col product__container ">
                <img className="product__image" src={singleProductData.image} />
                <div className="product__details flex flex-col">
                  <header className="product__name h1 p-4 txt-main-white txt-gray-300">
                    {singleProductData.title}
                  </header>
                </div>
                <div className="product__pricing p-2 flex  align-center">
                  <p className="h4 bold txt-gray-300 m-2">
                    {singleProductData.price}
                  </p>
                  <p className="h4 bold m-0 txt-gray-400 line-through">
                    {singleProductData.actual_price}
                  </p>
                  <p className="h4 bold m-2 txt-yellow-500">
                    (
                    {getDiscount(
                      singleProductData.price,
                      singleProductData.actual_price
                    )}
                    % Off)
                  </p>
                </div>
                <div className="rating h4 txt-main-white p-4">
                  Rating : {singleProductData.rating}???
                </div>
                <div className="card__links p-4 align-center flex">
                  <button
                    className="product__action button  p-8 h5 width-full txt-bold bg-main-white  txt-main-black  rounded-xl flex justify-center align-center"
                    onClick={async () => {
                      setAddToCartButton("Removing...");
                   if(cartItems.some((item)=>item._id===singleProductData._id)){
                   const res = await removeFromCart(authToken, singleProductData);
                   await setCartItems(res.data.cart);
                   setTimeout(() => setAddToCartButton("Add to cart"), 1000);
                   notify("Removed from cart", "success");
                   }
                   else {
                     setAddToCartButton("Adding...");
                     const res = await addToCart(authToken, singleProductData);
                     await setCartItems(res.data.cart);
                     setTimeout(() => setAddToCartButton("Remove From cart"), 1000);
                     notify("Added to cart", "success");
                 }
          }}>
                    <i className="button__icon material-icons">shopping_cart</i>
                    {addToCartButton}
                  </button>
                </div>

                <div className="product__metadata">
                  <div className="product__category h5 txt-gray-300 p-4">
                    Category : {singleProductData?.categoryName[0]}
                  </div>
                  <div className="sold__peices h5 txt-gray-300 p-4">
                    3000+ Sold
                  </div>
                </div>
                <div className="enter__review">
                  <input
                    className="name h5 txt-gray-900 p-4 flex align-center width-full"
                    placeholder="Enter Review"
                    onChange={(e) => setNewReview(e.target.value)}
                    value={newReview}
                  />
                  <button
                    onClick={() => {
                      setReviews(reviews.concat(newReview));
                      notify("Review Added","success")
                    }}
                    className="button submit__review p-4 txt-2xl width-full txt-bold bg-main-black txt-gray-300   flex justify-center align-center"
                  >
                    Submit
                  </button>

                  <div className="provide__rating flex align-center">
                    <div className="h5 txt-gray-300">Rate the Product</div>
                    <div className="rating flex flex-row-reverse p-4">
                      <input type="radio" name="star" id="star1" />
                      <label className="h1" htmlFor="star1" />
                      <input type="radio" name="star" id="star2" />
                      <label className="h1" htmlFor="star2" />
                      <input type="radio" name="star" id="star3" />
                      <label className="h1" htmlFor="star3" />
                      <input type="radio" name="star" id="star4" />
                      <label className="h1" htmlFor="star4" />
                      <input type="radio" name="star" id="star5" />
                      <label className="h1" htmlFor="star5" />
                    </div>
                  </div>
                </div>
                {reviews.map((review) => {
                  return <Review text={newReview} user={foundUser.firstName} />;
                })}
               
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default ProductPage;
