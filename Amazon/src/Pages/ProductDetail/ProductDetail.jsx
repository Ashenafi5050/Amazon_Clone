// import React from 'react';
import { useEffect, useState } from 'react';
import LayOut from '../../Components/LayOut/LayOut.jsx';
import Classes from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint.js';
import Loader from '../../Components/Loader/Loader.jsx';
import ProductCard from '../../Components/Products/ProductCard.jsx';

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const {productId} = useParams()

  useEffect(()=> {
    setIsLoading(true)
    axios.get(`${productUrl}/${productId}`)
    .then((res) => {
      setProduct(res.data);
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [productId])
  return (
    <LayOut>
      {isLoading?(<Loader/>):(<ProductCard
        product={product}
        flex ={true}
        renderDesc={true}
        renderAdd={true}
      />)}
     
    </LayOut>
  )
}

export default ProductDetail
