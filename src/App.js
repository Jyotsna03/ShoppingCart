import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';
import Sidebar from './Sidebar/Sidebar';

function App() {
  
    return (
      <div>
        <Sidebar/>
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
