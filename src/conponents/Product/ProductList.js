import product from "../../api/product.json";
import AfterCartbtn from "../Header/CartButtons/afterCarbtn";
import BeforeCart from "../Header/CartButtons/beforeCart";
import "./ProductList.css";
import { useSelector } from "react-redux";

const Product = () => {
  const { cartCount,cartList } = useSelector((state) => state.cart);
  console.log(cartList);
  
  
  return (
    <section className="container">
      {product.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="not found" />
          <h3>{product?.title}</h3>
          {cartCount > 0 ? <AfterCartbtn /> : <BeforeCart product={product} />}
        </div>
      ))}
    </section>
  );
};

export default Product;
