import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const Class = () => {
  return (
    <>
      <div className='nav-bar'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Price
                  </a>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item" href="#">$0 - $500</a></li>
                    <li><a class="dropdown-item" href="#">$501 - $1000</a></li>
                    <li><a class="dropdown-item" href="#">$1001 - $1500</a></li>

                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Laptop Brand
                  </a>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item" href="#">Lenovo</a></li>
                    <li><a class="dropdown-item" href="#">HP</a></li>
                    <li><a class="dropdown-item" href="#">Dell</a></li>
                    <li><a class="dropdown-item" href="#">Asus</a></li>

                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SSD
                  </a>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item" href="#">128GB</a></li>
                    <li><a class="dropdown-item" href="#">256GB</a></li>
                    <li><a class="dropdown-item" href="#">512GB</a></li>
                    <li><a class="dropdown-item" href="#">1TB</a></li>

                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Memory
                  </a>
                  <ul class="dropdown-menu">

                    <li><a class="dropdown-item" href="#">4GB</a></li>
                    <li><a class="dropdown-item" href="#">8GB</a></li>
                    <li><a class="dropdown-item" href="#">16GB</a></li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Link to={'/product'} className='brand'> Shopping Cart</Link>


        <Link to={'/cart'} className='cart' > Cart </Link>
      </div>
    </>
  )
}

export default Class;