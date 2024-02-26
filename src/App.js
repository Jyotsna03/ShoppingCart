import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import { Home } from './Components/Home';
import { ToastContainer } from 'react-toastify';

function App() {
  
    return (
      <div>
        <ToastContainer theme ='colored'> </ToastContainer>
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
