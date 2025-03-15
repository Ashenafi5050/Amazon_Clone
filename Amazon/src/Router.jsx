import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";

// Load Stripe public key from environment variable
const stripePromise = loadStripe(
  "pk_test_51QzTcaIYxwX0uWxBn7xHb5JuM4Gtu5fNYofz2hTNwbXzf7Wuye4NJEYkLPIJBS6LSZ9jbbATYkTpauC3VsJkzOj700O3Jp3a3L"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />

      {/* Protected Payment Route */}
      <Route
        path="/payments"
        element={
          <ProtectedRoute msg="You must log in to pay" redirect="/auth">
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />

      {/* Protected Orders Route (Fixed) */}
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg="You must log in to access your orders"
            redirect="/auth"
          >
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default Routing;
