import { useContext, createContext, useState } from "react";

const defaultCart = {};
const CartContext = createContext(defaultCart);
const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [totalCartAmount, setTotalCartAmount] = useState(0);
    return (
        <CartContext.Provider value={{ cartItems, setCartItems, totalCartAmount, setTotalCartAmount, orderedItems, setOrderedItems }}>
            {props.children}
        </CartContext.Provider>)
}

const useCart = () => useContext(CartContext);
export {
    CartProvider, useCart
}