import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { useContext } from "react";
import ProductCard from "../../Components/Products/ProductCard";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type.type.js";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Cart = () => {
  const [{ basket }, dispatch] = useContext(DataContext);

  const total = basket?.reduce((amount, product) => {
    return product.price * product.amount + amount;
  }, 0);

  const increment = (product) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: product,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>OOPS! 😊 Your cart is empty</p>
          ) : (
            basket.map((item, index) => (
              <section key={item.id} className={classes.cart_product}>
                <ProductCard
                  key={index}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />

                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={25} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={25} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Proceed to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
