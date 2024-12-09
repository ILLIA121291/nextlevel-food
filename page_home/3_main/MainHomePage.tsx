// 'use client';

import { FC } from 'react';
import classes from './MainHomePage.module.css';

// INTERFACE ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const MainHomePage: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <h2>How it works</h2>
        <p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
        <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
      </section>

      <section className={classes.section}>
        <h2>Why NextLevel Food?</h2>
        <p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
        <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
      </section>
    </main>
  );
};

export default MainHomePage;
