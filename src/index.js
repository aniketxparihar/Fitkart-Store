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
import { AddressProvider } from "./Context/Address-Context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductListProvider>
          <WishlistProvider>
            <CartProvider>
                <FilterProvider>
                  <CurrentProductProvider>
                    <AddressProvider>
                      <Routes />
                    </AddressProvider>
                  </CurrentProductProvider>
                </FilterProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductListProvider>
      </AuthProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
