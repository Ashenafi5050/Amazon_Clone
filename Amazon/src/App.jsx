// import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Header from "./Components/Headers/Header.jsx";
import Routing from "./Router.jsx"; // Import the Routing component
// import { Carousel } from "react-responsive-carousel";
// import Category from "./Components/Category/Category.jsx";
// import Product from "./Components/Products/Product.jsx";

const App = () => {
  return (
    <>
      {/* <Header />
      <Carousel />
      <Category />
      <Product /> */}
      <BrowserRouter>
      <Routing />
    </BrowserRouter>
    </>
  );
};

export default App;
