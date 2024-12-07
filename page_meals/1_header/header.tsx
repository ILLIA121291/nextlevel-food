// 'use client';

import { FC } from 'react';
import classes from './header.module.css';
import Link from 'next/link';

// Interface ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const HeaderMealsPage: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <header className={classes.header}>
      <h1>
        Delicius meals, created <span className={classes.highlight}>by you</span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share Your Favorite Recipe</Link>
      </p>
    </header>
  );
};

export default HeaderMealsPage;
