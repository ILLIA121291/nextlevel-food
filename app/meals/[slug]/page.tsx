import { FC } from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getOneMeal } from '@/modules/Meal/MealServices';
import IMeal from '@/interface/IMeal';
import { PageProps } from '@/.next/types/app/layout';

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
const MealsDineamicPage: FC<PageProps> = async ({ params }) => {
  // Get meal name from URL;
  const { slug } = await params;

  // Getting data from the database;
  const meal: IMeal = await getOneMeal(slug);

  const { title, image, summary, instructions } = meal;

  // RENDERING COMPONENT --------------------------
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={`https://illiabulgakovawsbucket.s3.eu-north-1.amazonaws.com/${image}`} alt={title} width={480} height={320} />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a>NAME</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>

      <main>
        <p className={classes.instructions}>{instructions}</p>
      </main>
    </>
  );
};

export default MealsDineamicPage;
