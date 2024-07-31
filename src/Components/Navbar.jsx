import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Styles/navbar.css'

const Navbar = ({size, setScreen}) => {
  return (
    <nav>
    <div className='nav_box'>
      <span className='myshop' onClick={() => setScreen(true)}>
        DXO Shop
      </span>
      <div className='cart' onClick={() => setScreen(false)}>
        <span>
            <i className='fas fa-cart-plus'></i>
        </span>
        <span>{size}</span>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
