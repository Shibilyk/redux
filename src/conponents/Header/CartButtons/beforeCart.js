import React from "react";
import { addToCart } from "../../../redux/cart";
import "./cart-button.css";
import { useDispatch } from "react-redux";
const BeforeCart  = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button className="add-cart-button" onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  );
};

export default BeforeCart ;
