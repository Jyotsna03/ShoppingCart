import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';

function App() {
  
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path = '/' Component = {Login}/> 
  
        </Routes>
        </BrowserRouter>
      </div>    
    );
  
}

export default App;
