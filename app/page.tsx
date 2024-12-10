import { FC } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import ImageSlideShow from '@/page_home/2_image_slide/ImageSlideShow';
import HeaderHomePage from '@/page_home/1_header/HeaderHomePage';
import MainHomePage from '@/page_home/3_main/MainHomePage';
import { Metadata } from 'next';

// METO DATA FOR PAGE -----------------------
export const metadata: Metadata = {
  title: 'Next Level Food',
  description: 'Next Level Food',
};

// PAGE COMPONRNT ------------------------------------------
const HomePage: FC = async () => {
  // RENDERING PAGE COMPONENT -------------------------
  return (
    <>
      <HeaderHomePage />
      <MainHomePage />
    </>
  );
};

export default HomePage;
