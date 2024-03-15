import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { Product } from './Components/Product';
import Productdetail from './Components/Productdetail';
import Cart from './Components/Cart';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Productdetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
