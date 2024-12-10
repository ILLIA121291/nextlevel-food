// 'use client';

import classes from './page.module.css';
import ImagePickerSharePage from '@/page_share/2_from/1_image_picker/ImagePickerSharePage';
import { addOneMealToDataBase } from '@/modules/Meal/MealServices';
import SubmitButtonSharePage from '@/page_share/2_from/2_submit_button/SubmitButtonSharePage';
import HeaderSharePage from '@/page_share/1_header/HederSharePage';
import FromSharePage from '@/page_share/2_from/0_FromSharePage/FromSharePage';

// COMPONENT -----------------------------------
function ShareMealPage() {
  // RENDERING COMPONENT -----------------------
  return (
    <>
      <HeaderSharePage />
      <main className={classes.main}>
        <FromSharePage />
      </main>
    </>
  );
}

export default ShareMealPage;
