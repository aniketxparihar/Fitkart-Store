import { useContext, createContext, useState ,useEffect } from "react";
import axios from "axios";
const defaultProductList = [];
const ProductListContext = createContext(defaultProductList);
const ProductListProvider = (props) => {
    useEffect(() => {
        axios.get("/api/products").then((res) => {
            setProductData(res.data.products);
        });
    }, []);

    const [productData, setProductData] = useState([]);
    const [searchFilterString, setSearchFilterString] = useState(null);
    const [pageNumbers, setPageNumbers] = useState(
       []
    );
    return (
        <ProductListContext.Provider value={{productData,searchFilterString,setSearchFilterString,pageNumbers,setPageNumbers}}>
            {props.children}
        </ProductListContext.Provider>)
}
const useProductList = () => useContext(ProductListContext);
export {
    ProductListProvider, useProductList
}