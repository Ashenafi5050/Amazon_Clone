import { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut.jsx";
import Classes from "./Payments.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider.jsx";
import ProductCard from "../../Components/Products/ProductCard.jsx";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat.jsx";
import { BounceLoader } from "react-spinners";
import { axiosInstance } from "../../Api/axios.js";
import { db } from "../../Utility/firebase.js";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [error, setError] = useState(null);
  const [process, setProcess] = useState(false);
  // console.log("Payment");

  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.error) {
      setError(e?.error?.message);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcess(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      console.log("response.data",response.data);
      const clientSecret = response.data?.clientSecrete;
   console.log(clientSecret);
   
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      dispatch({
        type: "EMPTY_BASKET",
      });

      console.log(paymentIntent);
      setProcess(false);
      navigate("/orders", { state: { msg: "Order Placed Successfully" } });
    } catch (error) {
      console.log(error);
      setProcess(false);
    }
  };

  return (
    <LayOut>
      <div className={Classes.payment_header}>Checkout ({totalItem}) items</div>

      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h2>Delivery Address</h2>
          <div>
            {user?.email}
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        <div className={Classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard key={index} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        <div className={Classes.flex}>
          <h3>Payment Method</h3>
          <div className={Classes.payment_card_container}>
            <div className={Classes.payment_details}>
              <form action="" onSubmit={handlePayment}>
                {error && (
                  <small style={{ color: "red", padding: "10px" }}>
                    {" "}
                    {error}{" "}
                  </small>
                )}
                <CardElement onChange={handleChange} />

                <div className={Classes.payment_price}>
                  <div style={{ marginBottom: "15px" }}>
                    <span className={Classes.flex}>
                      <b>Total Order</b> | <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {process ? (
                      <div className={Classes.loading}>
                        <BounceLoader color="green" size={15} />
                      </div>
                    ) : (
                      " Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;
