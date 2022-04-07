import { useContext, createContext,useState } from "react";

const defaultWishlist = {};
const WishlistContext = createContext(defaultWishlist);
const WishlistProvider = (props) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    
    return (
    <WishlistContext.Provider value={{wishlistItems,setWishlistItems}}>
            {props.children}
    </WishlistContext.Provider>)
}

const useWishlist = () => useContext(WishlistContext);
export {
    WishlistProvider, useWishlist
}