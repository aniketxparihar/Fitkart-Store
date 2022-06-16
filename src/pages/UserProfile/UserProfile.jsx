import React, { useEffect } from 'react'
import "./UserProfile.css"
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/auth-Context';
import { useCart } from '../../Context/cart-context';
import profileImage from "./profileImage.png"
const UserProfile = () => {
  const { foundUser, userHandler } = useAuth();
  const {
    cartItems,
    totalCartAmount,
    setCartItems,
    setTotalCartAmount,
    orderedItems,
    setOrderedItems,
  } = useCart();
    const logout = () => {
        localStorage.removeItem("user");
        userHandler(null);
    }
  useEffect(() => { }, [foundUser])
  return (
    <div className="profile__container">
      <div className="profile">
        <div className="logout" onClick={logout}>
          <button className="logout button m-8 p-4 txt-2xl txt-bold bg--secondary rounded-m">
            Logout
          </button>
        </div>
        <div className="user-details">
          <h1 className="user-details--heading">
             Hi, {foundUser.firstName} {foundUser.lastName}!
          </h1>
          <h1 className="order-details--heading">Previous orders - </h1>
          {
            orderedItems.length===0?<div>No orders yet...</div>:null
          }
          <div className="">
            {orderedItems.map((item) => (
              <p className="ordered-items txt-2xl txt-main-white p-4 ">
                {item.title} ₹{item.price} qty {item.qty}
              </p>
            ))}
          </div>
          <img src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UserProfile