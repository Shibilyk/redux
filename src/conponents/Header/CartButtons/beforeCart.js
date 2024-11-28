import React from "react";
import "./cartButton.css";
const beforeCart = ({addToCart}) => {
  return (
    <div className="before-cart">
      <button className="add-cart-button" onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default beforeCart;
