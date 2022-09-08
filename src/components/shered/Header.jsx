import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [cartSidebar, setCartSidebar] = useState("cart")

  const showSidebar = () => setCartSidebar()
  return (
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
          <div className='liner-gray'></div>
            <NavLink className={({isActive}) => isActive ? 'active-link': ''} to="/login">
            <i class='bx bx-user'></i>
            </NavLink>
          </li>
          <li className="header__item">
          <div className='liner-gray'></div>
            <NavLink className={({isActive}) => isActive ? 'active-link': ''} to="/purchases">
            <i class='bx bx-box'></i>
            </NavLink>
          </li>
          <li className="header__item">
          <div className='liner-gray'></div>
          <NavLink className={({isActive}) => isActive ? 'cart-drop': ''} to="/cart">
          <i class='bx bxs-cart-alt'></i>
            </NavLink>
            
 
          </li>
        </ul>
      </nav>
    </header>

  )
}

export default Header