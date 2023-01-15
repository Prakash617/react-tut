import React from 'react'

const CartTotal = ({cartItems}) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>Total: ${total}</div>
  )
}

export default CartTotal