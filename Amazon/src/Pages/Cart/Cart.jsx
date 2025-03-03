// import React from 'react'
import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { useContext } from "react";
import ProductCard from "../../Components/Products/ProductCard";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => amount + item.price, 0);
  console.log(basket);
  
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            basket?.map((product, index) => (
              <>
                <section className={classes.cart_product}>
                  <ProductCard
                    key={index}
                    product={product}
                    renderDescription={true}
                    renderAdd={false}
                    flex={true}
                  />

                  <div className={classes.btn_container}>
                    {/* <button
                      className={classes.btn}
                      onClick={() => increment(product)}
                    >
                      <IoIosArrowUp size={25} />
                    </button>
                    <span>{product.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={25} />
                    </button> */}
                  </div>
                </section>
              </>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={`${classes.subtotal} `}>
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
