import React from 'react'
import { useSelector} from 'react-redux'
import CardHome from '../home/CardHome'

const Home = () => {

 

  const products = useSelector(state => state.products)

  return (
    <div className='home'>
      <div className='home_container-card'>
        {
          products?.map(product => (
            <CardHome
            key={product.id}
            product={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home