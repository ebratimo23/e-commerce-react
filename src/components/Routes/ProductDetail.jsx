import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDescription } from '../productDetail/ProductDescription'
import SimilarProducts from '../productDetail/SimilarProducts'

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then( res => setProductInfo(res.data))
    .catch(err => console.log(err))
  }, [])

 
  
  return (
    <div>
      <ProductDescription productInfo={productInfo?.data.product}/>
      <SimilarProducts productInfo={productInfo?.data.product}/>
    </div>
  )
}

export default ProductDetail