import React, { useContext } from 'react'
import Cartitems from '../Components/Cartitems/Cartitems'
import { UserCircleIcon } from '@heroicons/react/16/solid'
import ShopContext from '../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cart = () => {

  const {all_product,Cartitems,removefromcart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>PRODUCT</p>
        <p>TITLE</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
        <p>REMOVE</p>
      </div>
      <hr/>
      <div>
        <div className='cartitems-format'>
          <img src =""alt="" className='carticon-product-icon'/>
<p></p>
<p></p>
<button className='cartitems-quantity'></button>  
<p></p>      
<img src={remove_icon} onClick={()=>{removefromcart()}}alt=""/>
    </div>
    <hr/>
    {all_product.map((e)=>{
if(Cartitems[e.id>0])
    })}
      </div>
    </div>
  )
}

export default Cart
