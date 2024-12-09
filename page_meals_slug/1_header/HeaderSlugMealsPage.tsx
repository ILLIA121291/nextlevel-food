// 'use client';

import { FC } from 'react';
import classes from './HeaderSlugMealsPage.module.css';
import Image from 'next/image';

// INTERFACE ------------------------------------
interface IProps {
  image: string;
  title: string;
  summary: string;
  creator: string;
}

// COMPONENT ------------------------------------
const HeaderSlugMealsPage: FC<IProps> = ({ image, title, summary, creator }) => {
  // RENDERING COMPONENT ------------------------
  return (
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={`https://illiabulgakovawsbucket.s3.eu-north-1.amazonaws.com/${image}`} alt={title} width={500} height={500} />
      </div>

      <div className={classes.headerText}>
        <h1>{title}</h1>
        <p className={classes.creator}>
          by <a>{creator}</a>
        </p>

        <p className={classes.summary}>{summary}</p>
      </div>
    </header>
  );
};

export default HeaderSlugMealsPage;
