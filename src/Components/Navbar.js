import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


const Class = () => {
  return (
    <>
      <div className='nav-bar'>
        <Link to={'/'} className='brand'> Shopping Cart</Link>

      </div>
      <Link to={'/cart'} className='cart' > Cart </Link>
    </>

  )
}

export default Class;