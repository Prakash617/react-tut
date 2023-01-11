import React, { useContext, useState } from 'react'
import ProductQuantity from '../ProductQuantity'


const Cart = ({cartItem}) => {
  const [quantity,setQuantity]= useState(1)
  const [total,setTotal]= useState(1)

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
              <p>{cartItem.title}</p>
              <p>quantity:{cartItem.quantity}</p>
              <ProductQuantity  quantity = {quantity} setQuantity = {setQuantity}/>

            </div>
            <div>{cartItem.price * quantity}</div>
          </div>
          <hr />
 </>
  )
}

export default Cart