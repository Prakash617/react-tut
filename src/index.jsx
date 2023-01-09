import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {createContext } from "react";
import getProducts from "./helper/AxiosInstance";


// export const ProductContext = createContext();


// const products = await getProducts();

// const fetchProducts = () =>{ 
//   const [products,setProducts] = useState([])

//   useEffect(() =>{
//     setProducts(getProducts().data)
//   },[]);
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
            {/* <ProductContext.Provider value={"products"}> */}
          <App />
          {/* </ProductContext.Provider> */}

  </React.StrictMode>
);
