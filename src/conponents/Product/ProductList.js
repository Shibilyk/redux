import product from "../../api/product.json";
import CartButtons from "../Header/CartButtons";
import "./ProductList.css";
import { useSelector } from "react-redux";

const Product = () => {
  const { cartList } = useSelector((state) => state.cart);
  console.log(cartList);
  return (
    <section className="container">
      {product.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="not found" />
          <h3>{product?.title}</h3>
          <CartButtons product={product} />
        </div>
      ))}
    </section>
  );
};

export default Product;
