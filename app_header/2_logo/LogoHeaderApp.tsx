import { FC } from 'react';
import classes from './LogoHeaderApp.module.css';

import Link from 'next/link';
import Image from 'next/image';
import ImgeLog from '@/public/icons/logo.png';

// Interface ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const LogoHeaderApp: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <Link href="/" className={classes.logo}>
      <Image src={ImgeLog} alt="" priority />
      NextLevel Food
    </Link>
  );
};

export default LogoHeaderApp;
