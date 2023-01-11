import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import productsData from "../data/productsData";
// import cartData from "../data/cartData";
import ProductQuantity from "./ProductQuantity";
import { ProductContext } from "../App";

const ProductDetail = () => {
  const params = useParams();

  // const [products, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  // console.log(params);
  
  
  const {products,cart,setCart} = useContext(ProductContext)
  
  const thisProduct = products.find(
    (prod) => prod.id === params.id

  );
  // const [cart, setCart] = useState([])
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('helloworld');
    thisProduct['quantity'] = quantity;
    // const listProduct =[...[thisProduct]];
    
    // setCart([1,2,3,4,5,6,7,8])
    setCart([...cart,...[thisProduct]])
    console.log("cart",cart)

  }

  return (
    <>
      <div className="card d-flex flex-md-row w-100 flex-col justify-content-around">
       
        <div className=" w-sm-50 mx-auto">
          <img src={thisProduct.img} className="card-img w-80 " alt="..." />
        </div>
        <form className=" w-50" onSubmit={(e)=>handleSubmit(e)}>
          <h5 className="">{thisProduct.title}</h5>
          <p>{thisProduct.description} {quantity}</p>

          <p className=" text-danger">{thisProduct.amount}</p>

          <ProductQuantity quantity = {quantity} setQuantity = {setQuantity}/>
          <div className="text-center ">

          <input type="submit" className="btn btn-warning ms text-white " value={'Add to cart'}/>
          <Link to="/order">

          <input type="button" className="btn btn-success ms text-white ms-5" value={'Checkout'}/>
          </Link>
          
          </div>
        
         
        </form>
      </div>
    </>
  );
};

export default ProductDetail;
