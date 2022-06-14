import React, { useEffect } from 'react'
import "./UserProfile.css"
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/auth-Context';
import { useCart } from '../../Context/cart-context';
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
  console.log(orderedItems)
  return (
    <div className="profile__container">
      <div className="profile">
        <div className="logout" onClick={logout}>
          <button className="logout button m-8 p-4 txt-2xl txt-bold bg--secondary rounded-m">
            Logout
          </button>
        </div>
        <div>
          <h1 className="user-details--heading">Name</h1>
          <div className="user-details">
            {foundUser.firstName} {foundUser.lastName}
          </div>
          <h1 className="user-details--heading"> Email</h1>
          <div className="user-details">{foundUser.email}</div>
          <h1 className="order-details--heading">Previous Orders</h1>
          <div className="">
            {orderedItems.map((item) => (
              <p className="ordered-items txt-2xl txt-main-white p-4 ">
                {item.title} ₹{item.price}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile