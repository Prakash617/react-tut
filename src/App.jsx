import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import NoPage from "./components/NoPage";
import Form from "./components/Form";
import ProductDetail from "./components/ProductDetail";
import Order from "./page/Order";
// import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getProducts } from "./helper/AxiosInstance";
// import { useEffect } from "react";
// import getProducts from "./helper/AxiosInstance";
// import ProductProvider from "./components/UseContext/ProductContext";


export const ProductContext = createContext();
function App() {

  const [products,setProducts]=useState([])
  const [loading, setLoading] = useState('true');
  const [cart, setCart] = useState([]);
  // const [product,setProduct]=useState({})
useEffect(()=>{

  async function getUser() {
    console.log('enter')
    try {
      const data = await getProducts()
      console.log('data',data);
      setProducts([...data])
      console.log('product',products);
      // setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();

},[])



  return (
    <>
   
   <ProductContext.Provider value={{products ,loading ,setLoading,cart ,setCart } }>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route index element={<Home />} /> */}
          <Route path="/shop" element={<About />} />
          <Route path="/login" element={<Form/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/shop/product/:id" element={<ProductDetail/>} />
          <Route path="*" element={<NoPage/>} />
         
        </Routes>
      
      </BrowserRouter>
      </ProductContext.Provider>
    </>

   
  );
}

export default App;


