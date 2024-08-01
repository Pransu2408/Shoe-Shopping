<<<<<<< HEAD
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Styles/navbar.css'
import logo from './sheep-svgrepo-com.svg'
import '../Styles/font.css'

const Navbar = ({size, setScreen}) => {
  return (
    <nav>
    <div className='nav_box'>
      <img className='sheepy' src={logo} onClick={() => setScreen(true)} />
      <span style={{fontFamily: 'Quant'}} className='myshop' onClick={() => setScreen(true)}>
        Black Sheep Kicks
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
=======
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
>>>>>>> b3a28b23bc2610f33b81c9e611ad8c6c4bf31213
