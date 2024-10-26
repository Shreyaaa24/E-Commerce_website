
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div className='navbar'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/homedecor'element={<Home/>}/>
      <Route path='/livingroom' element={<Home/>}/>
      <Route path='/bedroom' element={<Home/>}/>
      <Route path='/kitchen' element={<Home/>}/>
      <Route path='/product' element={<Home/>}/>
      <Route path=':productId' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;


