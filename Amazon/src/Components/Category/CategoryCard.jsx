import classes from './category.module.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ data }) => {
  if (!data) return null; 


  return (
    <div className={classes.category}>
      <Link to={`/category/${data.category}`}>
        <span>
          <h2>{data.category}</h2>
        </span>
        
          <img src={data.image} alt={data.title || "Category Image"} loading="lazy" />
        
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
