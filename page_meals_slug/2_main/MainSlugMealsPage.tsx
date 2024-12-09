// 'use client';

import { FC } from 'react';
import classes from './MainSlugMealsPage.module.css';

// INTERFACE ------------------------------------
interface IProps {
  instructions: string;
}

// COMPONENT ------------------------------------
const MainSlugMealsPage: FC<IProps> = ({ instructions }) => {
  // RENDERING COMPONENT ------------------------
  return (
    <main>
      <p className={classes.instructions}>{instructions}</p>
    </main>
  );
};

export default MainSlugMealsPage;
