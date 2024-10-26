import React, { useState } from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""height={80}width={80}/>
        <p>FURNURA</p>
        </div>
<ul className="nav-menu">
    <li onClick={()=>{setMenu("homedecor")}}><Link to='/'>Home Decor</Link>{menu==="homedecor"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("livingroom")}}><Link to='/'>Living Room</Link>{menu==="livingroom"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("bedroom")}}><Link to='/'>Bedroom</Link>{menu==="bedroom"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kitchen")}}><Link to='/'>Kitchen & Dining</Link>{menu==="kitchen"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("product")}}><Link to='/'>Product</Link>{menu==="product"?<hr/>:<></>}</li>
 </ul>
<div className ="nav-login-cart">
    <button><Link to='/login'></Link>Login</button>
  <Link to='/cart'  ><img src={cart_icon} alt=""height={40}width={40}/></Link>
    <div className="nav-cart-count">0</div>
</div>
        </div>
    
  )
}

export default Navbar
