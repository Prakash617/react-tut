import React, { useContext } from 'react'
import CardLayout from '../components/Cart/CardLayout'
import { ProductContext } from '../App'

const Order = () => {
  const {cart ,setCart} = useContext(ProductContext)
  return (
    <div>
      <CardLayout cart = {cart}/>
    </div>
  )
}

export default Order