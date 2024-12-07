'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './ImageSlideShow.module.css';



const images = [
  { image: 'burger.jpg', alt: 'A delicious, juicy burger' },
  { image: 'curry.jpg', alt: 'A delicious, spicy curry' },
  { image: 'dumplings.jpg', alt: 'Steamed dumplings' },
  { image: 'macncheese.jpg', alt: 'Mac and cheese' },
  { image: 'pizza.jpg', alt: 'A delicious pizza' },
  { image: 'schnitzel.jpg', alt: 'A delicious schnitzel' },
  { image: 'tomato-salad.jpg', alt: 'A delicious tomato salad' },
];

// COMPONENT --------------------------------------------------
const ImageSlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // RENDERING COMPONENTS ----------------------------------
  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image 
        key={index} 
        src={`https://illiabulgakovawsbucket.s3.eu-north-1.amazonaws.com/${image.image}`} 
        className={index === currentImageIndex ? classes.active : ''} alt={image.alt} width={800} height={800} />
      ))}
    </div>
  );
};

export default ImageSlideShow;
