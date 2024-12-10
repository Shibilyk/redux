import React from "react";
import { useSelector } from "react-redux";
import AfterCarbtn from "./afterCarbtn";
import BeforeCart from "./beforeCart";

const CartButtons = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);
  const cartCount = cartList?.find((items) => items?.id === product?.id)?.count;
  
  return (
    <>
      {cartCount > 0 ? 
    <AfterCarbtn product={product} cartCount={cartCount}/>
       : 
        <BeforeCart product={product} />
      }
    </>
  );
};

export default CartButtons;
