import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'

const cart = () => {
    const [cartProducts, setCartProducts] = useState()
    const [totalPrice, setTotalPrice] = useState()

  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => { 
        const products = res.data.data.cart.products 
        setCartProducts(products)
        const total = products.reduce((acc, cv) => {
          return Number(cv.price) * cv.productsInCart.quantity + acc
        }, 0)
        setTotalPrice(total)
      })
      .catch(err => setCartProducts())
  }

  useEffect(() => {
    getAllProductsCart()
  }, [])

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
        setTotalPrice(0)
      })
      .catch(err => console.log(err))
  }
    
  return (
    <section className='cart'>
      <h2 className='title-cart'>Cart</h2>
        <div className='cart-item-buy'>
            {
                cartProducts?.map(product => (
                    <ProductCartInfo
                    key={product.id}
                    product={product}
                    getAllProductsCart={getAllProductsCart}/>
                ))
            }
        </div>
        <hr className='cart_hr'/>

        <footer className='cart_footer'>
            <span className='cart_total_label'>Total:</span>
            <p className='cart_global_value'>{totalPrice}</p>
            <button onClick={handleCheckout} className='cart_btn'>Checkout</button>
        </footer>
    </section>
  )
}

export default cart