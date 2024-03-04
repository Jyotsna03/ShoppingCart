import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Products from './Components/Products';
import Sidebar from './Sidebar/Sidebar';
import Category from './Sidebar/Category/Category';
import Nav from './Navigation/Nav';
import 

function App() {
  
    return (
      <div>
        <Nav/>
        <Sidebar/>
        <Category/>
        
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
