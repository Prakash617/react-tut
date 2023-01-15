import React, { useContext, useState } from "react";
import Cart from "./Cart";
import { ProductContext } from '../../App'
import CartTotal from "./CartTotal";

const CardLayout = () => {
  const {cart ,setCart,carttotal} = useContext(ProductContext)
  // const [carttotal, setCarttotal] = useState(0)
  return (
    <div>
      <div className="card container">
        <h5 className="card-header">Cart Order</h5>
        {
          cart?cart.map(
            (cartItem,index) =><Cart key={index}  cartItem={cartItem}  />
            )
        
          : <h1 className="card-title">No Cart Order</h1>
        }
    
       

        <div className="d-flex justify-content-around">
          <div >
            <button type="button" onClick={()=>setCart([])} className="btn btn-outline-danger">
              Empty
            </button>
          </div>
          <div>
            {carttotal}
            <CartTotal cartItems={cart}/>
            {/* <p className="text-success">{cart.reduce((total,currentV)=>set ,0)}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
