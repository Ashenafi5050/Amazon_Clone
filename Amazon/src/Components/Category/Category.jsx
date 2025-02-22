import React from 'react'
import { categoryInfos } from './categoryFullInfos.js';
import CategoryCard from './CategoryCard.jsx';
import classes from './category.module.css'

const Category = () => {
  return (
    <section className={classes.category_container}>
        {
            categoryInfos.map((infos) => (
                <CategoryCard key={infos.id} data = {infos}/>
            ))
        }

    </section>
    )
}

export default Category
