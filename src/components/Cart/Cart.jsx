import React, { useState } from 'react'
import ProductQuantity from '../ProductQuantity'

const Cart = () => {
  const [quantity,setQuantity]= useState(0)
  return (
 <>
 <div className="card-body d-flex flex-row justify-content-evenly align-items-center">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
                className="img-fluid"
                style={{ borderRadius: "100%", height: "3rem", weight: "3rem" }}
            
              />
            </div>
            <div>
              <p>title</p>
              <p>type(large)</p>
              <ProductQuantity quantity = {quantity} setQuantity = {setQuantity}/>

            </div>
            <div>$250</div>
          </div>
          <hr />
 </>
  )
}

export default Cart