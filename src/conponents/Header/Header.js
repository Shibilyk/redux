import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux'
const Header = () => {
  const {cartList = []}  = useSelector((state)=>state.cart)
  const totelCount = cartList.reduce((acc,value)=>acc+=value.count,0)
  return (
   <header>
    <div className="container">
        <h1>HelloWorld</h1>
        <div className='right-section'>
          <div className="count">{totelCount}</div>
        <img src="/image.png" alt="" />
        </div>
    </div>
   </header>
  )
}

export default Header
