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

  return (
    <>
      <BrowserRouter>
        <Navbar setData={setData} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/product' element={<Product filters={data} />} />
          <Route path='/product/:id' element={<Productdetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
