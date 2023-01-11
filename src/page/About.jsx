import React, { useContext } from "react";
// import Card from '../components/Card'
import ProductCard from "../components/ProductCard";
// import productsData from "../data/productsData";
// import { useContext } from "react";
// import { ProductContext } from "../index";
// import getProducts from "../helper/AxiosInstance";
// import axios from "axios";
import { ProductContext } from "../App";
// import getProducts from "../helper/AxiosInstance";



// const product = await getProducts ();
const About = () => {

// const [products,setProducts]=useState([])
// useEffect(()=>{
//   // console.log("product",getProducts().data)
//   // setProducts(getProducts().data)
//   // console.log("products",products)
//   async function getUser() {
//     console.log('enter')
//     try {
//       const response = await axios.get("https://639d448e16d1763ab15be5cb.mockapi.io/api/pets/products");
//       const data = response.data
//       console.log('data',data);
//       setProducts( [...products,...data] )
//       console.log('product',products);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getUser();


// }, [])

const {products, loading, setLoading}= useContext(ProductContext)


  // const user  = useContext(ProductContext)
  return (
    // <ProductContext.Consumer >
    //   { ({user}) => {
    //     <h1>{user}</h1>
    //   } }
    <div>
      <h1 onClick={()=>setLoading('loading')}>Flash Sale---:</h1>
      <h1>{loading}</h1>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {/* {products.map((product, index) => (
          <ProductCard key={index} product={product[0]} />
        ))} */}
        {
          products?products.map((product,index)=><ProductCard key ={index} product = {product}/>):'no products'
        }
      </div>

      {/* {user} */}
      {/* {products.map((product, index) => <h1 key={index}>{product.title}</h1>)} */}
    </div>
    // </ProductContext.Consumer>
  );
};

export default About;
