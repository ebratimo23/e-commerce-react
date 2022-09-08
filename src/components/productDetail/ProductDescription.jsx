import React, { useState } from 'react'
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


export const ProductDescription = ({productInfo}) => {

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
      arrows: true
    };
  

    const [counter, setCounter] = useState(1)

    const handlePlus = () => setCounter(counter + 1)
    const handleMinus = () => {
      if (counter - 1 >= 1) {
        setCounter(counter - 1)
      }
    }
    
    const handleAddCart = () => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
      const obj ={
        id: productInfo.id,
        quantity: counter,
      }
      axios.post(URL, obj,getConfig())
      .then(res => console.log())
      .catch(err => console.log(err))
    }
  return (
    <section className='product-desc'>
            <div className='porduct-desc-img'>
              <Slider{...settings}>

                <div>
                  <img src={productInfo?.productImgs[0]}   alt="" />
                </div>              
                <div>
                  <img src={productInfo?.productImgs[1]} alt="" />
                </div>              
                <div>
                  <img src={productInfo?.productImgs[2]}  alt="" />
                </div>              
                
              </Slider>
            </div>

        <div className='product-desc-info-container'>
          <div className='infomartion-product'>
            <h2 className='product-desc-name'>{productInfo?.title}</h2>
            <p className='product-info-description'>{productInfo?.description}</p>
          </div>

            <div className='product-info-body'>
                <article className='product-info-price'>
                  <h3 className='product-label-price'>Price</h3>
                  <span className='price-value'>${productInfo?.price}</span>   
                </article>

                <article className='product-info-quantity'>
                  <h3 className='product-label-quantity'>Quantity</h3>
                  <div className='product-quantity'>
                    <button onClick={handleMinus}>-</button>
                    <div>{counter}</div>
                    <button onClick={handlePlus}>+</button>
                  </div>
                </article>
            </div>
            <button onClick={handleAddCart} className='btn-product'>Add to cart <i class='bx bx-cart-add'></i></button>
        </div>
    </section>
  )
}

