import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
//import Product from './Components/Product';

function App() {
  
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path = '/' Component = {Login}/> 
          {/* <Route path = '/product' Component = {Product}/> */}
  
        </Routes>
        </BrowserRouter>
      </div>    
    );
  
}

export default App;
