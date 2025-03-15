import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { useEffect, useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Classes from "./Orders.module.css";
import ProductCard from "../../Components/Products/ProductCard";

const Orders = () => {
  const { user } = useContext(DataContext); // Get user from context
  const [orders, setOrders] = useState([]); // State to store orders

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    // Firestore snapshot listener
    const unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => {
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(fetchedOrders);
      });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [user]);

  return (
    <LayOut>
      <section className={Classes.container}>
        <div className={Classes.orders_container}>
          <h2>Your Orders</h2>
          <div style={{ padding: "20px" }}>
            {orders.length === 0 && <p>You don't have any orders yet</p>}
          </div>

          <div>
            {orders.map((eachOrder) => (
              <div key={eachOrder.id, index}>
                <hr />
                <p>Order ID: {eachOrder.id}</p>
                {eachOrder.data.basket?.map((item, index) => (
                  <ProductCard key={item.id || index} flex={true} product={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
