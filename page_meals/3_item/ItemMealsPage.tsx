// 'use client';

import { FC } from 'react';
import classes from './ItemMealsPage.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Interface ------------------------------------
interface IProps {
  meal: any;
}

// COMPONENT ------------------------------------
const ItemMealsPage: FC<IProps> = ({ meal }) => {
  const { title, summary, image, slug } = meal;

  // RENDERING COMPONENT ------------------------
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={`https://illiabulgakovawsbucket.s3.eu-north-1.amazonaws.com/${image}`} alt={title} width={426} height={240} priority />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by ILLIA</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default ItemMealsPage;
