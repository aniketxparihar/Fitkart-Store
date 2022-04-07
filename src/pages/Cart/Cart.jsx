import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useProductList } from "../../Context/productList-context";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import axios from "axios";
import { useAuth } from "../../Context/auth-Context";
import CartCard from "../../components/CartCard/CartCard";
import getDiscount from "../../components/Discount/Discount";
import CartBill from "../../components/CartBill/CartBill";

const Cart = () => {
  const { authToken } = useAuth();
  const { cartItems, setCartItems } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
 
  
  
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: authToken,
        },
      });
      setCartItems(response.data.cart);
    })();
  }, []);

  const prod = cartItems.reduce((filter, current) => {
    if (!filter.find((item) => item._id === current._id)) {
      return filter.concat([current]);
    } else return filter;
  }, []);

  const cartPrice = cartItems.reduce((totalPrice, current) => {
    totalPrice += Number(current.actual_price) * Number(current.qty);
    return totalPrice;
  }, 0);
 
  const cartDiscount = cartItems.reduce((totalDiscount, current) => {
    totalDiscount +=
      Number(current.actual_price - current.price) * Number(current.qty);
    return totalDiscount;
  }, 0);
  const [finalPrice, setFinalPrice] = useState(cartPrice - cartDiscount + 250);
  useEffect(() => {
    setFinalPrice(cartPrice - cartDiscount + 250);
  }, [cartPrice]);

  

  return (
    <div className="cart__main">
      <div className="cart__heading h2 txt-gray-200 ">Your Cart</div>
      <div className="cart__actions">
        <button className="share button m-8 p-4 txt-2xl txt-bold b-1 bg-main-black txt--success border-solid border--success rounded-m">
          Share Cart
        </button>
      </div>

      <div className="cart__container">
        <div className="cart__products">
          {prod.map((product) => {
            return <CartCard product={product} />;
          })}
        </div>
        <div className="bill__container">
          {cartItems.length > 0 ? (
            <CartBill
              cartPrice={cartPrice}
              cartItems={cartItems}
              cartDiscount={cartDiscount}
              couponApplied={couponApplied}
              finalPrice={finalPrice}
              setCoupon={setCoupon}
              setCouponApplied={setCouponApplied}
              coupon={coupon}
            />
          ) : (
            <div className="cart__empty">
              Nothing Here :( add some items and Come Back
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
