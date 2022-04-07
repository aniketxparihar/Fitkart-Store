import { useContext, createContext, useState ,useEffect } from "react";
import axios from "axios";
const defaultProductList = [];
const ProductListContext = createContext(defaultProductList);
const ProductListProvider = (props) => {
    const getData = () => {
        axios.get("/api/products").then((res) => {
            setProductData(res.data.products);
        });
    };
    const [productData, setProductData] = useState([]);
    const [searchFilterString, setSearchFilterString] = useState(null);
    useEffect(() => getData(), []);
    return (
        <ProductListContext.Provider value={{productData,searchFilterString,setSearchFilterString}}>
            {props.children}
        </ProductListContext.Provider>)
}
const useProductList = () => useContext(ProductListContext);
export {
    ProductListProvider, useProductList
}