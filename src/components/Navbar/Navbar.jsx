import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useWishlist } from "../../Context/wishlist-context";
import { useCart } from "../../Context/cart-context";
import { useProductList } from "../../Context/productList-context";
import {useAuth} from "../../Context/auth-Context"
import { useFilter } from "../../Context/Filter-Context";

const Navbar = (props) => {
  const [hiddenMenuToggle, setHiddenMenuToggle] = useState("none");
  const { wishlistItems } = useWishlist();
  const { cartItems, setCartItems } = useCart();
  const { cartCount } = useCart();
  const { searchFilterString, setSearchFilterString } = useState("");
  const [authAction, setAuthAction] = useState("Login");
  const { foundUser } = useAuth();
  const { filterVisible, setFilterVisible } = useFilter();
 
  return (
    <div>
      <nav>
        <Link to="/" id="logo" className="txt-gray-200">
          Fitkart
        </Link>
        <div id="search__container">
          <input
            type="text"
            id="search__input"
            placeholder="  Search Here "
            value={searchFilterString}
            onChange={(e) => setSearchFilterString(e.target.value)}
          />
          <Link
            to="/Product"
            id="search__icon"
            className="badge__icon material-icons relative p-4 bg-gray-700 rounded-s txt-gray-400 pointer"
          >
            search
          </Link>
        </div>
        <div id="links">
          <Link to="/Wishlist" className="link pointer" id="cart__page">
            <i className="badge__icon material-icons relative p-5 txt-gray-400">
              favorite_border
              <div className="badge--right badge--small txt-2xl txt-main-black bg--success flex justify-center align-center rounded-full absolute">
                {wishlistItems.length}
              </div>
            </i>
          </Link>

          <Link to="/Cart" className="link pointer" id="cart__page">
            <i className="badge__icon material-icons relative p-5 txt-gray-400">
              shopping_cart
              <div className="badge--right badge--small txt-2xl txt-main-black bg--success flex justify-center align-center rounded-full absolute">
                {cartItems.length}
              </div>
            </i>
          </Link>
          <Link to="/Profile" className="link pointer" id="cart__page">
            <i className="badge__icon material-icons relative p-5 txt-green-400">
              account_circle
            </i>
          </Link>
          <div
            className="link pointer hamburger"
            id="cart__page"
            onClick={() => {
              setHiddenMenuToggle("flex");
              setFilterVisible(true);
            }}
          >
            <i className="badge__icon material-icons relative p-5 txt-gray-400">
              menu
            </i>
          </div>
        </div>
      </nav>
      <div className="hidden__menu" style={{ display: hiddenMenuToggle }}>
        <Link to="/Wishlist" className="hidden__link pointer" id="cart__page">
          <i className="badge__icon material-icons relative p-5 txt-gray-400">
            favorite_border
            <div className="badge--right badge--small txt-2xl txt-main-black bg--success flex justify-center align-center rounded-full absolute">
              {wishlistItems.length}
            </div>
          </i>
        </Link>
        <Link to="Cart" className="hidden__link pointer" id="cart__page">
          <i className="badge__icon material-icons relative p-5 txt-gray-400">
            shopping_cart
            <div className="badge--right badge--small txt-2xl txt-main-black bg--success flex justify-center align-center rounded-full absolute">
              {cartItems.length}
            </div>
          </i>
        </Link>
        <Link to="/Profile" className="hidden__link pointer" id="cart__page">
          <i className="badge__icon material-icons relative p-5 txt-green-400">
            account_circle
          </i>
        </Link>
        <div
          className="hidden__link pointer close"
          id="cart__page"
          onClick={() => {
            setHiddenMenuToggle("none");
            setFilterVisible(false);
          }}
        >
          <i className="badge__icon material-icons relative p-5 txt-gray-400">
            close
          </i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;