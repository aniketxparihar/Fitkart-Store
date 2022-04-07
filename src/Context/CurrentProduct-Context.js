import { useContext, createContext, useState } from "react";

const defaultCurrentProduct = {};
const CurrentProductContext = createContext(defaultCurrentProduct);
const CurrentProductProvider = (props) => {
    const [currentProduct, setCurrentProduct] = useState({});
    const currentProductHandler = (product) => {
        setCurrentProduct(product);
    }
    return (
        <CurrentProductContext.Provider value={{currentProduct,currentProductHandler }}>
            {props.children}
        </CurrentProductContext.Provider>)
}

const useCurrentProduct = () => useContext(CurrentProductContext);
export {
    CurrentProductProvider, useCurrentProduct
}