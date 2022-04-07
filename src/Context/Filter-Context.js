import { useContext, createContext, useState, useEffect,useReducer } from "react";
import { useProductList } from "./productList-context";

const defaultFilter = [];
const FilterContext = createContext(defaultFilter);
const FilterProvider = (props) => {
    const { productData, searchFilterString } = useProductList();
    const [filterVisible, setFilterVisible] = useState(false);
    const initialState = {
        products: productData,
        sort: "",
        rating: "0",
        category: [],
        categoryFilter: false,
        maxPrice: 60000,
    };
    const filterReducer = (state, action) => {
        switch (action.type) {
            case "CATEGORY":
                if (action.checked === true) {
                    if (state.category.includes(action.value)) {
                        return { ...state, categoryFilter: false };
                    } else {
                        return {
                            ...state,
                            categoryFilter: true,
                            category: state.category.concat(action.value),
                        };
                    }
                } else {
                    return {
                        ...state,
                        category: state.category.filter((value) => value !== action.value),
                    };
                }
            case "SORT":
                return { ...state, sort: action.value };
            case "RATING":
                return { ...state, rating: action.value };
            case "MAX_PRICE":
                return { ...state, maxPrice: action.value };
            case "CLEAR":
                return { ...state, products: productData, sort: null, rating: null, category: [], categoryFilter: false, maxPrice: 60000 };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(filterReducer, initialState);

    return (
        <FilterContext.Provider value={{ state,dispatch,filterVisible,setFilterVisible }}>
            {props.children}
        </FilterContext.Provider>)
}
const useFilter = () => useContext(FilterContext);
export {
    FilterProvider, useFilter
}