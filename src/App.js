import { Fragment, useEffect, useRef } from "react";
import { ProductList, Header } from "./conponents";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/cart";

function App() {
  const { userDetail } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const counterRef = useRef(1);

  useEffect(() => {
    dispatch(fetchUser(counterRef.current));
  }, [dispatch]);
  return (
    <Fragment>
      <Header />
      <pre>{JSON.stringify(userDetail)}</pre>
      <ProductList />
    </Fragment>
  );
}

export default App;
