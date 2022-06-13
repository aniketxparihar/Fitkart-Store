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
        <div className="list__wrapper flex flex-col bg-main-black m-8">
          <h1 className="order-placed--heading txt-main-white p-4">User</h1>
          <div className="list__stacked">
            <div className="list__item  txt-main-white p-4 ">
              {foundUser.firstName} {foundUser.lastName}
            </div>
          </div>
        </div>

        <div className="list__wrapper flex flex-col bg-main-black">
          <h1 className="order-placed--heading txt-main-white p-4">
            Previous Orders
          </h1>
          <div className="list__stacked ">
            {orderedItems.map((item) => (
              <li className="ordered-items list__item txt-2xl txt-main-white p-4 ">
                Item: {item.title} Cost: {item.price}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile