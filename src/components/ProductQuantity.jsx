import axios from 'axios';
import React from 'react'
import {API_ROOT} from './../helper/AxiosInstance'

const ProductQuantity = ({quantity , setQuantity,cart, cartItemId}) => {
    // const [quantity,setQuantity] =useState(0)
    // console(quantity)
    const handleInc = async()=> {
      
      try {
      await axios.put(`${API_ROOT}/${cartItemId}`,{...cart, quantity})
      }
      catch (err) {
        console.error(err)
      }
      setQuantity(quantity+1);

    }
  return (
    <div>
            {/* <span className="me-5">Quantity </span> */}
            <button type="button" className="btn btn-light fs-5" onClick={handleInc}>+</button>
            <input type="text" className='border border border-0 mx-1 bg-white text-center' style={{ width:'35px' } } value={quantity} disabled/>
            <button type="button" className="btn btn-light fs-5" onClick={()=>setQuantity(quantity<=0?0: quantity-1)}>-</button>
            <div className='mt-5 text-center'>
              <p>qid</p>
              <p>{cartItemId}</p>

            
            </div>

          </div>
  )
}

export default ProductQuantity