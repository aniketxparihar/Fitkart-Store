import { useContext, createContext,useState,useEffect } from "react";
import { getAllWishlist } from "../Services/WishlistService";
import { useAuth } from "./auth-Context";

const defaultWishlist = {};
const WishlistContext = createContext(defaultWishlist);
const WishlistProvider = (props) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const { authToken } = useAuth();

    useEffect(() => {
        (async () => {
            const res=await getAllWishlist(authToken)
            setWishlistItems(res.data.wishlist);
        })();
    }, []);
    return (
    <WishlistContext.Provider value={{wishlistItems,setWishlistItems}}>
            {props.children}
    </WishlistContext.Provider>)
}

const useWishlist = () => useContext(WishlistContext);
export {
    WishlistProvider, useWishlist
}