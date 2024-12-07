import Link from 'next/link';
import { FC } from 'react';
import classes from './0_AppHeader.module.css';

import BackgroundHeaderApp from '../1_background/BackgroundHeaderApp';
import LogoHeaderApp from '../2_logo/LogoHeaderApp';
import NavBarHeaderApp from '../3_nav_bar/0_NavBarHeaderApp/NavBarHeaderApp';

// COMPONENT ----------------------------------------
const AppHeader: FC = () => {
  // RENDERING COMPONENT ---------------------------
  return (
    <>
      <BackgroundHeaderApp />
      <header className={classes.header}>
        <LogoHeaderApp />
        <NavBarHeaderApp />
      </header>
    </>
  );
};

export default AppHeader;
