// import Checkout from './pages/checkout/Checkout.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home.js"
import Login from './pages/loginForm/login.js'
import NotFond from './pages/NotFond/NotFond.js';
import Register from './pages/RegisterForm/Register';
import Makeup from './pages/Makeup/Makeup.js';
import Shirt from './pages/Shirt/Shirt.js';
import Pants from  "./pages/Pants/Pants.js";
import MyAccount from  "./pages/MyAccount/MyAccount.js";
import Checkout from './pages/Checkout/Checkout.js';
import State from './pages/Checkout/State.js';
import MyCart from './pages/My-Cart/MyCart.js';



function App() {
  return (
    
    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/signup" element={<Register />}/>
      <Route path="/makeup" element={<Makeup />}/>
      <Route path="/shirt" element={<Shirt />}/>
      <Route path="/pants" element={<Pants />}/>
      <Route path="/my-account" element={<MyAccount />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/state" element={<State />}/>
      <Route path="/cart" element={<MyCart />}/>


      <Route path="*" element={< NotFond/>}/>
    </Routes>

    
  );
}

export default App;
