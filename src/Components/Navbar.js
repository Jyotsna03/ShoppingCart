import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';


const Class = () => {
  return (
    <>
      <div className='nav-bar'>
        <Link to={'/product'} className='brand'> Shopping Cart</Link>

      </div>
      <Link to={'/cart'} className='cart' > Cart </Link>
    </>

  )
}

export default Class;