import React from "react";
import { increment, decrement } from "../../../redux/cart";
import { useDispatch, useSelector } from "react-redux";
import "./cart-button.css";

const AfterCarbtn = () => {
  const dispatch = useDispatch();
  const { cartCount } = useSelector((state) => state.cart);
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
