import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import { Home } from './Components/Home';


function App() {
  
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path = '/' Component = {Login}/> 
          <Route path = '/home' Component = {Home}/> 
        </Routes>
        </BrowserRouter>
      </div>    
    );
  
}

export default App;
