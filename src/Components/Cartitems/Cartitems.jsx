import React from 'react'
import './Cartitems.css'
import Cartitems from '../Components/Cartitems/Cartitems'
import ShopContext from '../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {

  const {getTotalAmount,all_product,Cartitems,removefromcart}=useContext(ShopContext)
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
      
   
    {all_product.map((e)=>{
if(Cartitems[e.id]>0)
    {
return <div>
<div className='cartitems-format'>
  <img src ={e.img}alt="" className='carticon-product-icon'/>
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className='cartitems-quantity'>{Cartitems[e.id]}</button>  
<p>${e.new_price*Cartitems[e.id]}</p>      
<img className='cartitems-remove-icon'   src={remove_icon} onClick={()=>{removefromcart(e.id)}}alt=""/>
</div>
 <hr/>
</div> 

    }
    return null;
    })}
    <div className='cartitems-down'>
<div className='cartitems-total'>
    <h1>Cart Total</h1>
    <div className='cartitems-total-items'>
        <p>Sub Total</p>
        <p>${getTotalAmount()}</p>
    </div>
    <hr/>
    <div  className='cartitems-total-items'>
<p>Shipping Fee</p>
<p>Free</p>
    </div>
    <hr/>
    <div className='cartitems-total-items'>

        <h3>Total</h3>
        <h3>${getTotalAmount()} </h3>
    </div>
</div>
<button>PROCEED TO CHECKOUT</button>
 </div>
      </div>

  )
}


export default Cartitems
