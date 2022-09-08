import { useEffect, useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shered/Header'
import Cart from './components/shered/Cart'
import axios from 'axios'
import ProtectedRoutes from './components/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
   

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        
        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>

      </Routes>
      
    </div>
  )
}

export default App
