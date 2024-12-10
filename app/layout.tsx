import type { Metadata } from 'next';
import './globals.css';
import AppHeader from '@/app_header/0_HeaderMainApp/HeaderMainApp';
import classes from './layout.module.css';

// METO DATA FOR PAGE -----------------------
export const metadata: Metadata = {
  title: 'Next Level Food',
  description: 'Next Level Food',
};

// HTML ROOT LAYOUT ------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // RENDERING HTML ROOT LAYOUT ------------
  return (
    <html lang="en" className={classes.html}>
      <body className={` ml-[20px]`}>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
