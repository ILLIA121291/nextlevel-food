import HeaderMealsPage from '@/page_meals/1_header/HeaderMealsPage';
import classes from './page.module.css';
import { FC } from 'react';
import GridMealsPage from '@/page_meals/2_grid/GridMealsPage';
import { Suspense } from 'react';
import { getAllMeal } from '@/modules/Meal/MealServices';
import IMeal from '@/interface/IMeal';
import { Metadata } from 'next';

// METADATA -----------------------------------------
export const metadata: Metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

// Loading Data Grid Meals COMPONENT --------------------------------
const LoadingDataGridMeals = async () => {
  const meals: IMeal[] = await getAllMeal();

  // RENDERING LoadingDataGridMeals;
  return (
    <main className={classes.main}>
      <GridMealsPage meals={meals} />
    </main>
  );
};

// COMPOMET ----------------------------------------
const MealsPage: FC = async () => {
  // RENDERING COMPONENT ---------------------------
  return (
    <>
      <HeaderMealsPage />

      <Suspense fallback={<p className={classes.loading}>Fetching meals</p>}>
        <LoadingDataGridMeals />
      </Suspense>
    </>
  );
};

export default MealsPage;
