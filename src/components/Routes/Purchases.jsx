import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import axios from 'axios'
import PurchasesCart from '../purchases/PurchasesCart'


const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])

  console.log(purchases);
  
  return (
    <div>
      {
        purchases?.map(purchase =>(
          <PurchasesCart
          key={purchase.id}
          purchase={purchase}/>
        ))
      }
    </div>
  )
}

export default Purchases