import React from "react";
import { increment, decrement } from "../../../redux/cart";
import { useDispatch } from "react-redux";
import "./cart-button.css";

const AfterCarbtn = ({product,cartCount}) => {
  const dispatch = useDispatch();
  return (
    <div className="after-cart">
      <button
        className="cart-counter-button"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div className="cart-count">{cartCount}</div>
      <button
        className="cart-counter-button"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default AfterCarbtn;
