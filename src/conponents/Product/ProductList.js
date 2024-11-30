import React, { useState } from 'react';
import product from '../../api/product.json';
import AfterCartbtn from '../Header/CartButtons/afterCarbtn';
import BeforeCart from '../Header/CartButtons/beforeCart';
import "./ProductList.css"

const Product = () => {
  const [count,setCount] = useState(0)
  const addToCart = ()=>{
    setCount(1);
  }  
  return (
    <section className='container'>
      {product.map((product, key) => (
        <div className='product-container' key={key}>
          <img src={product?.image} alt="not found" />
          <h3>{product?.title}</h3>
          {count>0 ?<AfterCartbtn/>:<BeforeCart addToCart={addToCart}/>}
        </div>
      ))}
    </section>

  );  
};

export default Product;
