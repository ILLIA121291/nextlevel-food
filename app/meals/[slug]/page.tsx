import { FC } from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getOneMeal } from '@/modules/Meal/MealServices';
import IMeal from '@/interface/IMeal';
import { PageProps } from '@/.next/types/app/layout';
import HeaderSlugMealsPage from '@/page_meals_slug/1_header/HeaderSlugMealsPage';
import MainSlugMealsPage from '@/page_meals_slug/2_main/MainSlugMealsPage';

// INTERFACE METADATA ---------------------------
type TMetaData = (props: PageProps) => Promise<{ title: string; description: string }>;

// METADATA FOR DYNAMIC PAGES ------------
export const generateMetadata: TMetaData = async ({ params }) => {
  // Get meal name from URL;
  const { slug } = await params;

  // Getting data from the database;
  const meal: IMeal = await getOneMeal(slug);

  // Actions if this product is not found in the database - redirect to page 404;
  if (!meal) {
    notFound();
  }

  // Returning an object with method data;
  return {
    title: meal.title,
    description: meal.summary,
  };
};

// INTERFACE -------------------------------------
interface IProps {
  params: {
    slug: string;
  };
}

// COMPONENT --------------------------------------
const SlugMealsPage: FC<PageProps> = async ({ params }) => {
  // Get meal name from URL;
  const { slug } = await params;

  // Getting data from the database;
  const meal: IMeal = await getOneMeal(slug);

  const { title, image, summary, instructions, creator } = meal;

  // RENDERING COMPONENT --------------------------
  return (
    <>
      <HeaderSlugMealsPage image={image} title={title} summary={summary} creator={creator} />
      <MainSlugMealsPage instructions={instructions} />
    </>
  );
};

export default SlugMealsPage;
