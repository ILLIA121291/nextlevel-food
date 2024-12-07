import { FC } from 'react';

// Interface ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const NotFoundPage: FC<IProps> = () => {
  // RENDERING COMPONENT ------------------------
  return (
    <main className="not-found">
      <h1>This Page Not Found</h1>
      <p>Unfortunatel!!!</p>
    </main>
  );
};

export default NotFoundPage;
