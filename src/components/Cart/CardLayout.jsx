import React, { useContext } from "react";
import Cart from "./Cart";
import { ProductContext } from '../../App'

const CardLayout = () => {
  const {cart} = useContext(ProductContext)
  return (
    <div>
      <div className="card container">
        <h5 className="card-header">Cart Order</h5>
        {
          cart?cart.map(
            (cartItem,index) =><Cart key={index} cartItem={cartItem} />
            )
        
          : <h1 className="card-title">No Cart Order</h1>
        }
    
       

        <div className="d-flex justify-content-around">
          <div >
            <button type="button" className="btn btn-outline-danger">
              Empty
            </button>
          </div>
          <div>
            <p className="text-success">$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
