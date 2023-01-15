import React, { useContext, useState } from 'react'
import ProductQuantity from '../ProductQuantity'


const Cart = ({cartItem}) => {
  const [quantity,setQuantity]= useState(cartItem.quantity)



  return (
 <>
 <div className="card-body d-flex flex-row justify-content-evenly align-items-center">
            <div>
              <img
                src={cartItem.img}
                alt=""
                className="img-fluid"
                style={{ borderRadius: "100%", height: "3rem", weight: "3rem" }}
            
              />
            </div>
            <div>
              <p>{cartItem.id}</p>
              <p>{cartItem.title}</p>
              <p>quantity:{cartItem.quantity}</p>

              <ProductQuantity  cartItemId={cartItem.id} quantity = {quantity} setQuantity = {setQuantity}/>
          

            </div>
            {/* {setCarttotal(carttotal+(cartItem.price * quantity))} */}
            <div>{cartItem.price * quantity}</div>
            {/* <div>{total}</div> */}
          </div>
          <hr />
 </>
  )
}

export default Cart