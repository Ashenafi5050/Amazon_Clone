import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.jsx';

function Product () {
   const [products, setProducts] = useState()
    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
                setProducts(res.data)
            }).catch((err)=> {
                console.log(err);
                
            })
        //     first
        // return () => {
        //     second
        // }
        }, 
        [])
    return (
    <section>
        {
            products.map((singleProduct)=>{
                return <ProductCard product={singleProduct} key={singleProduct.id} />
            })
        }
        
    </section>
    );
    };

export default Product;
