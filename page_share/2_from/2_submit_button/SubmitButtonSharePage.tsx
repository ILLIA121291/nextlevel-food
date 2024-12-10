'use client';

import { FC } from 'react';
import classes from './SubmitButtonSharePage.module.css';
import { useFormStatus } from 'react-dom';

// INTERFACE ------------------------------------
interface IProps {}

// COMPONENT ------------------------------------
const SubmitButtonSharePage: FC<IProps> = () => {
  const { pending } = useFormStatus();

  // RENDERING COMPONENT ------------------------
  return (
    <p className={classes.actions}>
      <button 
        type="submit" 
        disabled={pending}
        >
        {pending ? 'Submit Form...' : 'Submit Form'}
      </button>
    </p>
  );
};

export default SubmitButtonSharePage;
