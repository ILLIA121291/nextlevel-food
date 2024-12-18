import Image from 'next/image';

import mealIcon from '@/public/icons/meal.png';
import communityIcon from '@/public/icons/community.png';
import eventsIcon from '@/public/icons/events.png';
import classes from './page.module.css';
import { Metadata } from 'next';

// METO DATA FOR PAGE -----------------------
export const metadata: Metadata = {
  title: 'Community',
  description: 'Community Page',
};

// COMPONENT ----------------------------------
export default function CommunityPage() {
  // RENDERING COMPONENT ----------------------
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" priority />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" priority />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="A crowd of people at a cooking event" priority />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
