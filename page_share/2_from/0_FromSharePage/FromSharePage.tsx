'use client';

import { FC } from 'react';
import classes from './FromSharePage.module.css';
import { addOneMealToDataBase } from '@/modules/Meal/MealServices';
import ImagePickerSharePage from '../1_image_picker/ImagePickerSharePage';
import SubmitButtonSharePage from '../2_submit_button/SubmitButtonSharePage';

// INTERFACE ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const FromSharePage: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <form className={classes.form} action={addOneMealToDataBase}>
      <div className={classes.row}>
        <p>
          <label htmlFor="creator">Your name</label>
          <input type="text" id="creator" name="creator" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" rows={10} required></textarea>
      </p>
      <ImagePickerSharePage label="Your image" name="img" />
      <SubmitButtonSharePage />
    </form>
  );
};

export default FromSharePage;
