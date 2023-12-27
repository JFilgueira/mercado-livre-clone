import { createContext, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartItens, setCartItens] = useState([]);
    const [isCartActive, setIsCardActive] = useState(false);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItens,
        setCartItens,
        isCartActive, 
        setIsCardActive
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )


}