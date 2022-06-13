import axios from "axios";

export const getAllCart = async (authToken) => {
    try {
        const res = await axios.get("/api/user/cart", {
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

export const addToCart = async (authToken, product) => {
    try {
        const res = await axios.post("/api/user/cart", {
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

export const removeFromCart = async (authToken, product) => {
    try {
        const res = await axios.delete(`/api/user/cart/${product._id}`, {
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

export const decreaseCartItem = async (authToken, product) => {
    try {
        const res = await axios.post(
            `/api/user/cart/${product._id}`,
            {
                action: {
                    type: "decrement",
                },
            },
            {
                headers: {
                    authorization: authToken,
                },
            }
        );
        return res;
    }
    catch (err) {
        console.log(err);
    }
   
};

export const increaseCartItem = async (authToken, product) => {
    try {
        const res = await axios.post(
            `/api/user/cart/${product._id}`,
            {
                action: {
                    type: "increment",
                },
            },
            {
                headers: {
                    authorization: authToken,
                },
            }
        );
        return res;
    }
    catch (err) {
        console.log(err);
    }
};