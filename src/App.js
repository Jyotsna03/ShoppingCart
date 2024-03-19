import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { Product } from './Components/Product';
import Productdetail from './Components/Productdetail';
import Cart from './Components/Cart';
import { useState } from 'react';
import { items } from './Components/Data';

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([])

  return (
    <>
      <BrowserRouter>

        <Navbar setData={setData} cart={cart} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/product' element={<Product cart={data} setCart={setCart} filters={Product} />} />
          <Route path='/product/:id' element={<Productdetail setData={setData} cart={cart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} /
          >
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
