import React from "react";
import Header from "./Components/Headers/Header.jsx";
import Carousel from "./Components/Carousel/Carousel.jsx";
import Category from "./Components/Category/Category.jsx";
import Product from "./Components/Products/Product.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </>
  );
};

export default App;
