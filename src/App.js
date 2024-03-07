import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';

import 

function App() {
  
    return (
      <div>
        
        <BrowserRouter>
        <Routes>

          <Route path = '/' Component = {Login}/> 
          <Route path ='/product' Component={Products}/>
          {/* <Route path = '/product' Component = {Product}/> */}
  
        </Routes>
        </BrowserRouter>
      </div>    
    );
  
}

export default App;
