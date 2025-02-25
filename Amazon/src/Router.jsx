import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Results from "./Pages/Results/Results.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Payments" element={<Payment />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Category/:categoryName" element={<Results />} />
    </Routes>
  );
}

export default Routing;
