import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product, getAllProductsCart}) => {
  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))
  }
  return (
    <article className='cart__item'>
        <header>
            <h4 className='cart__subtitle'>{product.brand}</h4>
            <h3 className='cart__name'>{product.title}</h3>
        </header>       
          <i onClick={handleDeleteProduct} class='bx bx-trash'></i>

        <span className='cart_quantity'>{product.productsInCart.quantity}</span>
        <div className='cart-container-price'>
            <span className='cart__total_label'>Total:</span>
            <p className='cart_total_number'>{product.price}</p>
        </div>
    </article>
  )
}

export default ProductCartInfo