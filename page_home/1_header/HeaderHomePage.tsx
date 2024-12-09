// 'use client';

import { FC } from 'react';
import classes from './HeaderHomePage.module.css';
import Link from 'next/link';
import ImageSlideShow from '@/page_home/2_image_slide/ImageSlideShow';

// INTERFACE ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const HeaderHomePage: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <header className={classes.header}>
      <ImageSlideShow />

      <div>

        <div className={classes.hero}>
          <h1>Next Level Food for NextLevl Foodies</h1>
          <p>Taste & share food from all over the world</p>
        </div>

        <div className={classes.cta}>
          <Link href="/community">Join the Comutnity</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>

      </div>
    </header>
  );
};

export default HeaderHomePage;
