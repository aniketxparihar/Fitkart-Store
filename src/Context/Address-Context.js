import { useContext, createContext, useState } from "react";

const defaultAddress = {};
const AddressContext = createContext(defaultAddress);
const AddressProvider = (props) => {
    const [currentAddress, setCurrentAddress] = useState();
    const addressHandler = (address) => {
        setCurrentAddress(address)
    }
    return (
        <AddressContext.Provider value={{currentAddress,addressHandler }}>
            {props.children}
        </AddressContext.Provider>)
}

const useAddress = () => useContext(AddressContext);
export {
   AddressProvider, useAddress
}