import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
import ShopContext from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='productdisplay-img-list'>
        <img src={Product.image} alt=""/>
        <img src={Product.image} alt=""/>
        <img src={Product.image} alt=""/>
        <img src={Product.image} alt=""/>
      </div>
      <div className='productdisplay-img'>
        <img className='productdiplay-main-img'src={Product.image}/>
      </div>
      </div>
      <div className='productdisplay-right'>
       <h1>{Product.name}</h1>
       <div className='productdisplay-right-star'></div>
       <img src={star_icon}alt=""/>
       <img src={star_icon}alt=""/>
       <img src={star_icon}alt=""/>
       <img src={star_icon}alt=""/>
       <img src={star_dull_icon}alt=""/>
       <p>(122)</p>
      </div>
      <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-prices-old'>${Product.old_price}</div>
        <div className='productdisplay-right-prices-new'>${Product.new_price}</div>
      </div>
      <div className='productdisplay-right-description'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, sunt praesentium. Provident repudiandae illo ipsa cupiditate nesciunt, soluta deserunt, totam laboriosam, molestias qui facilis voluptate. At iusto atque facilis praesentium!
    </div>
    <button onClick={(=>{addToCart(product.id)}}> ADD TO CART</button>
    </div>
    
  )
}

export default ProductDisplay
