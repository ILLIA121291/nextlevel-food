// 'use client';

import { FC } from 'react';
import classes from './HederSharePage.module.css';

// INTERFACE ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const HeaderSharePage: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <header className={classes.header}>
      <h1>
        Share your <span className={classes.highlight}>favorite meal</span>
      </h1>
      <p>Or any other meal you feel needs sharing!</p>
    </header>
  );
};

export default HeaderSharePage;
