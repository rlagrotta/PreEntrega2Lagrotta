import React from 'react'

const CartWidget = () => {
  console.log(cart)
  return (<>
  <div className="shopcart-container">
    <p className={{"margin":"auto"}}>100</p>
    <img src="/shop-cart.png" alt="Logo" style={{ "height":"40px" }} />
    </div>
    </>
  )
}

export default CartWidget