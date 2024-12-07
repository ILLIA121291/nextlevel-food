'use client';

import classes from './page.module.css';
import ImagePickerSharePage from '@/page_share/1_image_picker/ImagePickerSharePage';
import { addOneMealToDataBase } from '@/modules/Meal/MealServices';
import SubmitButtonSharePage from '@/page_share/2_submit_button/SubmitButtonSharePage';

// COMPONENT -----------------------------------
function ShareMealPage() {
  // RENDERING COMPONENT -----------------------
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
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
      </main>
    </>
  );
}

export default ShareMealPage;
