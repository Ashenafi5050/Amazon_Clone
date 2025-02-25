import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import classes from './product.module.css';
import { productUrl } from '../../Api/endPoint.js';

function Product() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {setProducts(res.data);
        console.log(res);
        
  })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
     <section className={classes.products_container}>
          {products?.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
    </section>
    </>
   
  );
}

export default Product;
