import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';
import { Navbar } from './Components/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/product' Component={<Products />} />
        </Routes>
      </BrowserRouter>

    </>


  );

}

export default App;
