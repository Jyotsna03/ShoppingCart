import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown'
import { filters } from './Data';
import { SlBasket } from "react-icons/sl";





function Class({ setData = () => { }, cart = [] }) {

  //console.log(useLocation())
  const location = useLocation();
  const filterByPrice = (minPrice, maxPrice) => {
    const filteredItems = filters.filter(item => item.Price >= minPrice && item.Price <= maxPrice);
    setData(filteredItems);
  };

  const filterByLaptopName = (laptopName) => {
    const filteredItems = filters.filter(item => item.Name && item.Name.toLowerCase().includes(laptopName.toLowerCase()));
    setData(filteredItems);
  };

  const filterBySSD = (ssdCapacity) => {
    const filteredItems = filters.filter(item => item.SSD.name === ssdCapacity);
    setData(filteredItems);
  };

  const filterByMemory = (memoryCapacity) => {
    const filteredItems = filters.filter(item => item.memory.value === memoryCapacity);
    setData(filteredItems);
  };

  return (
    <>
      <div className='nav-bar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Price
                  </a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => filterByPrice(20000, 30000)}>₹20,000 - ₹30,000</button></li>
                    <li><button className="dropdown-item" onClick={() => filterByPrice(30000, 50000)}>₹30,000 - ₹50,000</button></li>
                    <li><button className="dropdown-item" onClick={() => filterByPrice(50000, 70000)}>₹50,000 - ₹70,000</button></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Laptop Brand
                  </a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => filterByLaptopName('Lenovo')}>Lenovo</button></li>
                    <li><button className="dropdown-item" onClick={() => filterByLaptopName('HP')}>HP</button></li>
                    <li><button className="dropdown-item" onClick={() => filterByLaptopName('Dell')}>Dell</button></li>
                    <li><button className="dropdown-item" onClick={() => filterByLaptopName('Asus')}>Asus</button></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SSD
                  </a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => filterBySSD('128 GB')}>128GB</button></li>
                    <li><button className="dropdown-item" onClick={() => filterBySSD('256 GB')}>256GB</button></li>
                    <li><button className="dropdown-item" onClick={() => filterBySSD('512 GB')}>512GB</button></li>
                    <li><button className="dropdown-item" onClick={() => filterBySSD('1 TB')}>1TB</button></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Memory
                  </a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => filterByMemory('4gb')}>4GB</button></li>
                    <li><button className="dropdown-item" onClick={() => filterByMemory('8gb')}>8GB</button></li>
                    <li><button className="dropdown-item" onClick={() => filterByMemory('16gb')}>16GB</button></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Link to={'/product'} className='brand'> Shopping Cart</Link>

        <Link to={'/cart'} className='cart'>
          <button type="button" className="btn btn-primary position-relative">
            {cart.length}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <SlBasket size={40} /> </Link>
      </div>
    </>
  );
}

export default Class;