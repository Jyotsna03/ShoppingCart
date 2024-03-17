import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { Product } from './Components/Product';
import Productdetail from './Components/Productdetail';
import Cart from './Components/Cart';
import { useState } from 'react';
import { filters } from './Components/Data';

function App() {
  const [data, setData] = useState([...filters]);
  const [cart, setCart] = useState([])

  return (
    <>
      <BrowserRouter>

        <Navbar setData={setData} cart={cart} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/product' element={<Product cart={cart} setCart={setCart} filters={data} />} />
          <Route path='/product/:ID' element={<Productdetail />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} /
          >
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
