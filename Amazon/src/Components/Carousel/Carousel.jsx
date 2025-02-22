import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import default styles
import { images } from '../Carousel/data.js';
import classes from './carousel.module.css'

const ImageCarousel = () => {
  return (
    <div>
      <Carousel 
        autoPlay={true} 
        infiniteLoop={true} 
        showIndicators={false} 
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default ImageCarousel;
