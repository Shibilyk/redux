import React from 'react'
import "./cart-button.css";

const afterCarbtn = () => {
  return (
    <div className='after-cart'>
          <button className="cart-counter-button">-</button>
          <div className="cart-count">1</div>
          <button className="cart-counter-button">+</button>
    </div>
  )
}

export default afterCarbtn
