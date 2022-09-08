import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import getConfig from '../../utils/getConfig'
const CardHome = ({product}) => {
    
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

   const handleAddCart = e => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj ={
        id: product.id,
        quantity: 1
    }
    axios.post(URL, obj, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
   }
  return (
    <article onClick={handleClick} className='card_home'>
        <header className='card_home-header'>
            <img className="img-home" src={product.productImgs[0]} alt="" />
        </header>
        <div className='card_home_body'>
            <h3 className='card-Home-title'>{product.title}</h3>
            <section className='card-home-price'>
                <h4 className='card-price-label'>Price</h4>
                <span className='card-home-price-value'>${product.price}</span>
            </section>
            <button onClick={handleAddCart} className='btn-home-buy'><i class='bx bxs-cart-add'></i></button>
        </div>
    </article>
  )
}

export default CardHome