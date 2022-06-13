import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate, useNavigationType } from 'react-router-dom';
import { useAuth } from '../../Context/auth-Context';
import { useCart } from '../../Context/cart-context';
import { removeFromCart } from '../../Services/CartService';
import "./OrderPlaced.css"
const OrderPlaced = () => {
  const {
    cartItems,
    totalCartAmount,
    setCartItems,
    setTotalCartAmount,
    orderedItems,
    setOrderedItems,
  } = useCart();
  const { authToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    
    (async () => {
    await setOrderedItems(cartItems);
    for(let item of cartItems){
      const res = await removeFromCart(authToken, item);
      setCartItems(res.data.cart)
    }
    })()
  },[])
  setTimeout( () => {
    navigate("/Product");
  }, 2000);
  
  return (
    <div className="order-placed__container ">
      <div className="order-placed--message">
        Congratulations You order has been placed🎉🎉
      </div>
    </div>
  );
}

export default OrderPlaced