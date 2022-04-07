import { useContext, createContext, useState } from "react";

const defaultCart = {};
const CartContext = createContext(defaultCart);
const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartContext.Provider value={{ cartItems,setCartItems}}>
            {props.children}
        </CartContext.Provider>)
}

const useCart = () => useContext(CartContext);
export {
    CartProvider, useCart
}