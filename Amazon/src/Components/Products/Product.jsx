import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import classes from './product.module.css';
import Loader from '../Loader/Loader.jsx';

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Set initial state to true

  useEffect(() => {
    setIsLoading(true); // Set loading before fetching
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); // Stop loading after successful response
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
          })}
        </section>
      )}
    </>
  );
}

export default Product;
