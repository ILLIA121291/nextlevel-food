'use client';

import { FC } from 'react';
import classes from './LinkNav.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Interface ------------------------------------
interface IProps {
  href: string;
  title: string;
}

// COMPONENT ------------------------------------
const LinkNav: FC<IProps> = ({ href, title }) => {
  const path = usePathname();

  // RENDERING COMPONENT ------------------------
  return (
    <Link href={href} className={path.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link}>
      {title}
    </Link>
  );
};

export default LinkNav;
