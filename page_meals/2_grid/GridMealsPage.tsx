// 'use client';

import { FC } from 'react';
import classes from './GridMealsPage.module.css';
import ItemMealsPage from '../3_item/ItemMealsPage';
import IMeal from '@/interface/IMeal';

// Interface ------------------------------------
interface IProps {
  meals: IMeal[];
}

// COMPONENT ------------------------------------
const GridMealsPage: FC<IProps> = ({ meals }) => {
  // RENDERING COMPONENT ------------------------
  return (
    <ul className={classes.meals}>
      {meals.reverse().map(meal => {
        return (
          <li key={meal._id}>
            <ItemMealsPage meal={meal} />
          </li>
        );
      })}
    </ul>
  );
};

export default GridMealsPage;
