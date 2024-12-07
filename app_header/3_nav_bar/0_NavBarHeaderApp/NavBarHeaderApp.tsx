// 'use client';

import { FC } from 'react';
import classes from './NavBarHeaderApp.module.css';
import LinkNav from '../1_link_nav/LinkNav';

// Interface ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const NavBarHeaderApp: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <LinkNav href="/meals" title="Browse Meals" />
        </li>

        <li>
          <LinkNav href="/community" title="Foodies Community" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarHeaderApp;
