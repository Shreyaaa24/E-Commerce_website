import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt=""/>
      CART <img src={arrow_icon} alt=""/>
      PRODUCT <img src={arrow_icon} alt=""/>
    </div>
  )
}

export default Breadcrum
