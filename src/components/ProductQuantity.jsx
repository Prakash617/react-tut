import React from 'react'

const ProductQuantity = ({quantity , setQuantity}) => {
    // const [quantity,setQuantity] =useState(0)
    // console(quantity)
  return (
    <div>
            {/* <span className="me-5">Quantity </span> */}
            <button type="button" className="btn btn-light fs-5" onClick={()=>setQuantity(quantity+1)}>+</button>
            <input type="text" className='border border border-0 mx-1 bg-white text-center' style={{ width:'35px' } } value={quantity} disabled/>
            <button type="button" className="btn btn-light fs-5" onClick={()=>setQuantity(quantity<=0?0: quantity-1)}>-</button>
            <div className='mt-5 text-center'>

            
            </div>

          </div>
  )
}

export default ProductQuantity