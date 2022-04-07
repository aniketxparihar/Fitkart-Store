import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistProvider } from "./Context/wishlist-context";
import { ProductListProvider } from "./Context/productList-context";
import { CartProvider } from "./Context/cart-context";
import { AuthProvider } from "./Context/auth-Context";
import { FilterProvider } from "./Context/Filter-Context";
import Routes from './Routes'
import { CurrentProductProvider } from "./Context/CurrentProduct-Context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductListProvider>
        <WishlistProvider>
          <CartProvider>
            <AuthProvider>
              <FilterProvider>
                <CurrentProductProvider>
                  <Routes />
                </CurrentProductProvider>
              </FilterProvider>
            </AuthProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
