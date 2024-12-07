'use client';

import { FC } from 'react';

// INTERFACE --------------------------------------
interface IProps {
  error: any;
}

// COMPONENT -------------------------------------------
const Error: FC<IProps> = ({ error }) => {
  // REINDERING PAGE COMPONENT -------------------------------
  return (
    <main className="error">
      <h1>An error occurred</h1>
      <p>{error.message}</p>
    </main>
  );
};

export default Error;
