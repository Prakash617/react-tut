import { createContext} from "react";



export const ProductContext = createContext();


const ProductProvider = (props) => {
    return ( <
        ProductContext.Provider value = { props } > 
            { props.children } 
        </ProductContext.Provider>

    )

}

export default ProductProvider;