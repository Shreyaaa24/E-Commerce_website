import React, { useState,useContext } from 'react' 
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import ShopContext from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("home");
const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""height={80}width={80}/>
        <p>FURNURA</p>
        </div>
<ul className="nav-menu">
    <li onClick={()=>{setMenu("homedecor")}}><Link to='/homedecor'>Home Decor</Link>{menu==="homedecor"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("livingroom")}}><Link to='/livingroom'>Living Room</Link>{menu==="livingroom"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("bedroom")}}><Link to='/bedroom'>Bedroom</Link>{menu==="bedroom"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kitchen")}}><Link to='/kitchen'>Kitchen & Dining</Link>{menu==="kitchen"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("product")}}><Link to='product/'>Product</Link>{menu==="product"?<hr/>:<></>}</li>
 </ul>
<div className ="nav-login-cart">
    <button><Link to='/login'>Login</Link></button>
  <Link to='/cart'  ><img src={cart_icon} alt=""height={40}width={40}/></Link>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>
        </div>
    
  )
}

export default Navbar
