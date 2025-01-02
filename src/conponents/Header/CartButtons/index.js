import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import AfterCarbtn from "./afterCarbtn";
import BeforeCart from "./beforeCart";

const CartButtons = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);
  const cartCount = useMemo(() => {
    return cartList?.find((item) => item?.id === product?.id)?.count;
  }, [cartList, product?.id]);
  return (
    <>
      {cartCount > 0 ? (
        <AfterCarbtn productID={product?.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
};

export default CartButtons;
