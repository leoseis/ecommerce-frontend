import React from 'react'
import CartItem from './CartItem'
import CartSummary from './cartSummary'

const CartPage = () => {
  return (
     <div
      className="container my-3 py-3"
      style={{ height: "80vh", overflow: "scroll" }}
    >
      <h5 className="mb-4">
        {/* {productCount == 1
          ? `Shopping Cart: You have ${productCount} product in your cart`
          : `Shopping Cart: You have ${productCount} products in your cart`} */}
      </h5>
      <div className="row">
        <div className="col-md-8">
          <CartItem/>
          
        </div>

        <CartSummary/>
      </div>
    </div>
  )
}

export default CartPage