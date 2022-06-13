import axios from "axios";

export const getAllWishlist = async (authToken) => {
    try {
        const res = await axios.get("/api/user/wishlist", {
            headers: {
                authorization: authToken
            }
        }
        );
    return res;
    }
    catch (err) {
        console.log(err);
    }
   
}

export const addToWishlist = async (authToken,product) => {
    try {
        const res = await axios.post("/api/user/wishlist", {
            product
        }, {
            headers: {
                authorization: authToken
            }
        } 
        )
        return res;
    }
    catch (err) {
        console.log(err)
    }
}

export const removeFromWishlist = async (authToken,product) => {
    try {
        const res = await axios.delete(`/api/user/wishlist/${product._id}`, {
            headers: {
                authorization: authToken,
            },
        }
        )
        return res;
    }
    catch (err) {
        console.log(err);
    }
    
}